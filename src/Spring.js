import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from "@react-three/drei";
import Box from './component/Box'
import Hook from './component/Hook';
import Wall from './component/Wall';
import * as THREE from 'three';
import { useRef } from 'react';


export default function Spring() {
  let x = 0, y = 0, dy = 0.0005, requestID, requestSHM, K = 500;
  let initPos = 13.2;
  let reflineGeometry = new THREE.BufferGeometry().setFromPoints(
    [new THREE.Vector3(-10, 0, 0),
    new THREE.Vector3(10, 0, 0)]);

  const hookRef = useRef()
  const massRef = useRef();
  const rodRef = useRef();
  const weightRef = useRef();
  const distMeasureRef = useRef();
  const forceLabel = useRef();
  const ForceMeassureRef = useRef();
  const ForceMeassure2Ref = useRef();


  const [params, setParams] = useState({
    kConst: 500,
    m: 0,
    force: 0,
    b: 0.11,
    points: 400,
    extrude: 0.25,
    r: 2,
    t: 120,
    g: 9.8,
    reset: false,
    harmonic: false,
    horizontal: false,
    grid: true,
    T: 0
  }
  )

  const [mass, setMass] = useState(0)
  const [curve, setCurve] = useState(() => springCurve(params.b))
  const [distVal, setDisVal] = useState(0.0)
  const [massPos, setMassPos] = useState(0.0);


  const handleMassChange = (val) => {
    setDisVal(0.0)
    setMass(val)
    params.m = val
    setParams(params)

    y = 0;
    cancelAnimationFrame(requestSHM);
    cancelAnimationFrame(requestID);
    K = params.m / (1200 + params.kConst)



    if (params.harmonic) {
      weightRef.current.scale.y = 1 + params.m / 10
      K = (params.m) / (1200 + params.kConst);
      params.T = timePeriod()
      setParams(params)

      harmonicVerical();
    } else {
      weightRef.current.scale.y = 1 + val / 10
      weightAction();

    }

  }

  function springCurve(b) {
    // Create an empty array to stores the points

    const curvePoints = [];
    function helixPoint(a, b, t) {

      return new THREE.Vector3(a * Math.cos(t), a * Math.sin(t), b * t);

    }

    for (let t = 0; t < params.t; t += 0.1) {

      curvePoints.push(helixPoint(params.r, b, t));

    }

    return new THREE.CatmullRomCurve3(curvePoints);
  }

  function weightAction() {


    if (K > 0 && y < Math.abs(K)) {
      y += dy
      massRef.current.position.z += y;
      massRef.current.position.z = params.t * (params.b + y);
      setMassPos(massRef.current.position.z);
      setCurve(() => springCurve(params.b + y))

      distChange(massRef.current.position.z - initPos);
      requestID = requestAnimationFrame(weightAction);
      console.log('Harmonic, vertical', K)

    } else if (K === 0) {
      setCurve(() => springCurve(params.b))
      distChange(massRef.current.position.z - initPos);
      requestID = requestAnimationFrame(weightAction);
      console.log('Not Harmonic, vertical', K)
    } else {
      cancelAnimationFrame(weightAction)
    }

  }

  function harmonicVerical() {
    let a = (params.m) / (1200 + params.kConst);
    setCurve(() => springCurve(params.b + a * Math.sin(x)))

    x += .01;

    requestSHM = requestAnimationFrame(harmonicVerical);


  }

  function timePeriod(D) {
    let period;
    if (params.horizontal) {
      period = 2 * Math.PI * Math.sqrt(Math.abs(params.force) / (params.kConst * D));
      return period
    } else {
      period = 2 * Math.PI * Math.sqrt(params.m * params.g / params.kConst);
      return period
    }
  }

  // function distCal(T, A) {

  //   if (params.harmonic) {

  //     distText.innerHTML = 'T = ' + T.toFixed(2) + ' s';
  //     distEl.innerText = A.toFixed(2);
  //     timeEl.innerText = T.toFixed(2);
  //   } else {
  //     distText.innerHTML = 'd = ' + A.toFixed(2) + ' m';
  //     distEl.innerText = A.toFixed(2);
  //     timeEl.innerText = 0.00;
  //   }
  //   if (params.horizontal) {

  //     valEl.innerText = params.force;
  //   } else {

  //     valEl.innerText = params.m;
  //   }
  // }

  function distChange(xvalue) {
    console.log('d: ', xvalue)
    distMeasureRef.current.geometry.dispose();
    let newdistGeometry = new THREE.BufferGeometry().setFromPoints(
      [new THREE.Vector3(-3.5, 0, xvalue),
      new THREE.Vector3(-3.5, 0, 0)]);
    distMeasureRef.current.geometry = newdistGeometry;
    setDisVal(xvalue.toFixed(2))

    let forcedistGeometry1 = new THREE.BufferGeometry().setFromPoints(
      [new THREE.Vector3(8, 0, xvalue),
      new THREE.Vector3(8, 0, 0)]);
    ForceMeassureRef.current.geometry = forcedistGeometry1;
    let forcedistGeometry2 = new THREE.BufferGeometry().setFromPoints(
      [new THREE.Vector3(8, 0, -xvalue),
      new THREE.Vector3(8, 0, 0)]);
    ForceMeassure2Ref.current.geometry = forcedistGeometry2;
  }




  return (
    <div style={{backgroundColor:'white'  }}>

      <Canvas
        
        id='scene'
        style={{ height: window.innerHeight, width: window.innerWidth }}
        camera={{ fov: 50, zoom: 0.9, near: 0.1, far: 1500, position: [-40, -5, 20] }}
      >

        <OrbitControls enablePan={true} enableZoom={true} target={[0, -4, 6]} enableDamping={true} dampingFactor={0.05} rotateSpeed={0.1} />
        <ambientLight intensity={1} />
        <directionalLight intensity={3.0} position={[10, 10, 10]} />
        <gridHelper args={[50, 50]} position={[5, -2.5, 0]} rotation={[0, 0, 1.57]} />
        <group position={[0, 11, 0]} rotation={[1.57, 0, 0]}>
          {/* Hook */}
          <Hook
            rf={hookRef}
            radius={2.2} width={2}
            col={0x0B5345}
            rx={1.57}
            px={0}
            py={0}
            pz={-1} />
          {/* Mass */}
          <Hook
            rf={massRef}
            children={
              <Hook
                rf={rodRef}
                children={
                  <Hook
                    rf={weightRef}
                    radius={2.2} width={0.5}
                    col={0x1A5276}
                    rx={0}
                    px={0}
                    py={2.5}
                    pz={0}

                  />
                }
                radius={0.2} width={5}
                col={0x117A65}
                rx={0}
                px={0}
                py={3}
                pz={0}
              />
            }
            radius={2.2} width={1}
            col={0x1A5276}
            rx={1.57}
            px={0}
            py={0}
            pz={13.2}
          />
          {/* refLine*/}
          <line geometry={reflineGeometry} position={[0, 0, 13.2]} rotation={[0, 0, 1.57]}>
            <lineBasicMaterial attach="material" color={0xFF008C} side={THREE.DoubleSide} />
            <line ref={distMeasureRef}>
              <bufferGeometry setFromPoints={[[new THREE.Vector3(-3.5, 0, distVal), new THREE.Vector3(-3.5, 0, 0)]]} />
              <lineBasicMaterial attach="material" color={0x000000} side={THREE.DoubleSide} />
              <Html
                position={[-10.5, 0, 2]}
              >
                <div style={{ width: '100px', fontWeight: 'bold' }}>
                  d: {distVal} m
                </div>
              </Html>
              <line ref={ForceMeassureRef}>
                <bufferGeometry setFromPoints={[[new THREE.Vector3(10, 30, distVal), new THREE.Vector3(10, 30, 0)]]} />
                <lineBasicMaterial attach="material" color={0x000000} side={THREE.DoubleSide} />

              </line>
              <line ref={ForceMeassure2Ref}>
                <bufferGeometry setFromPoints={[[new THREE.Vector3(10, 30, distVal), new THREE.Vector3(10, 30, 0)]]} />
                <lineBasicMaterial attach="material" color={0x000000} side={THREE.DoubleSide} />

              </line>
            </line>
          </line>

          {/* Weight */}

          <group>
            <Box params={params} curve={curve} />
          </group>

          <Wall />

        </group>
        <Html position={[0, 13, 27]}>
          <div style={{ width: '20vw', backgroundColor: 'black', padding: 10, borderRadius: 10, color: 'white' }}>
            <form>
              <div class="mb-3" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: 'bold', width: 200 }}>k (N/m)</label>
                <input type="number" class="form-control" id="exampleInputNumber1" aria-describedby="numberHelp" value={K} />
              </div>
              <div class="mb-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <label for="dropdownMenuButton1" class="form-label" style={{ fontWeight: 'bold', marginRight: 30 }}>Mass (kg)</label>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {mass} kg
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li onClick={() => handleMassChange(0)}><a class="dropdown-item" href="#">0 kg</a></li>
                    <li onClick={() => handleMassChange(5)}><a class="dropdown-item" href="#">5 kg</a></li>
                    <li onClick={() => handleMassChange(10)}><a class="dropdown-item" href="#">10 kg</a></li>
                    <li onClick={() => handleMassChange(15)}><a class="dropdown-item" href="#">15 kg</a></li>
                    <li onClick={() => handleMassChange(25)}><a class="dropdown-item" href="#">25 kg</a></li>
                    <li onClick={() => handleMassChange(50)}><a class="dropdown-item" href="#">50 kg</a></li>
                    <li onClick={() => handleMassChange(100)}><a class="dropdown-item" href="#">100 kg</a></li>
                  </ul>
                </div>
              </div>

              <button type="submit" class="btn btn-primary">Reset</button>
            </form>
          </div>
        </Html>
        <Html ref={forceLabel} position={[20, -(distVal * 2) - 1, 0]}>
          <div style={{ color: '#0000ff', width: 100 }} >
            Applied F
          </div>
        </Html>
        <Html ref={forceLabel} position={[20, (distVal * 2) + 2, 0]}>
          <div style={{ color: '#ff0000', width: 100 }}>
            Spring F
          </div>
        </Html>



      </Canvas>
    </div>

  )
}
