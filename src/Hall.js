import React, { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Connector from './component/Connector'
import * as THREE from 'three'
import SpriteMaterial from './component/SpriteMaterial'
import { InstancedFlow } from 'three/examples/jsm/modifiers/CurveModifier';
import { OrbitControls, Html } from "@react-three/drei";
import MeasureSpline from './component/MeasureSpline';
import SupplySpline from './component/SupplySpline';
import TWEEN from '@tweenjs/tween.js';
import SquareFromPoints from './component/SquareFromPoints';
import { useState } from 'react';


export default function Hall({ sceneRef }) {
    const [showHall, setShowHall] = useState()
    const [newFlow, setNewFlow] = useState(false)
    const [showHall1, setShowHall1] = useState()
    const [courvs, setCourvs] = useState([])
    let curves = [], Obj = [], disp = 0.0, t = 0.001, curveHandles = [];
    let electronGeometry, electronMaterial;
    let flowCurve = [];
    var flow;
    let direction = true;
    let mrotate = false;
    let change = false;
    let hall;
    const curvRef = useRef();
    const cellRef = useRef();
    const magnetFieldRef = useRef();
    const magnetRef = useRef();
    const hallElectronsRef = useRef();
    const hallRef = useRef();
    const lineRef = useRef();
    const galvNeedleRef = useRef();

    function currentFlow() {
        const boxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const boxMaterial = new THREE.MeshBasicMaterial();

        curves = [[
            { x: 0, y: 0, z: 2 },
            { x: 0.5, y: 0, z: 4 },
            { x: 5, y: 0.5, z: 3.6 },
            { x: 5, y: 0.5, z: -4 },
            { x: 0.5, y: 0, z: -3.6 },
            { x: 0, y: 0, z: -2 },
            { x: disp, y: 0, z: 0 },
        ]].map(function (curvePoints) {
            // console.log(curvePoints)
            const curveVertices = curvePoints.map(function (handlePos) {

                const handle = new THREE.Mesh(boxGeometry, boxMaterial);
                handle.position.copy(handlePos);
                curveHandles.push(handle);
                // scene.add(handle);
                return handle.position;

            });

            const curve = new THREE.CatmullRomCurve3(curveVertices);
            curve.curveType = 'centripetal';
            curve.closed = true


            const points = curve.getPoints(50);
            const line = new THREE.LineLoop(
                new THREE.BufferGeometry().setFromPoints(points),
                new THREE.LineBasicMaterial({
                    color: 0x00ff00
                })
            );

            return {
                curve,
                line
            };

        });

        electronGeometry = new THREE.IcosahedronGeometry(.15, 0);
        electronMaterial = new THREE.MeshBasicMaterial({
            color: 0x00b0ff,
            // transparent: true,
            // opacity: 0.5, 
        });

        const numberOfInstances = 20;
        flow = new InstancedFlow(numberOfInstances, curves.length, electronGeometry, electronMaterial);
        curves.forEach(function ({ curve }, i) {

            flow.updateCurve(i, curve);
            flowCurve.push(<primitive ref={curvRef} object={flow.object3D} />)


        });

        for (let i = 0; i < numberOfInstances; i++) {

            const curveIndex = i % curves.length;
            flow.setCurve(i, curveIndex);
            flow.moveIndividualAlongCurve(i, i * 1 / numberOfInstances);
            flow.object3D.setColorAt(i, new THREE.Color(0x00b0ff));

        }

        //add this in animation loop
        // flow.moveAlongCurve(0.001);
    }
    function animate() {
        requestAnimationFrame(animate);
        TWEEN.update();

        flow.moveAlongCurve(t);

        // hall.moveAlongCurve(0.0005);
    };
    currentFlow()
    animate()


    const changeCurrent = (e) => {
        e.preventDefault();
        direction = !direction
        if (direction) {
            cellRef.current.rotation.y = 0;
            cellRef.current.position.z = 0;
            t = 0.001;

            console.log('+ to -', direction)
        } else {
            cellRef.current.rotation.y = 3.14;
            cellRef.current.position.z = 0.5;
            t = -0.001;
            console.log('- to +', direction)
        }

    }

    const flipMagnet = e => {
        e.preventDefault();
        mrotate = !mrotate;
        console.log(magnetFieldRef.current)
        console.log(magnetRef.current)
        if (mrotate) {
            magnetFieldRef.current.rotation.y = 3.14;
            magnetFieldRef.current.position.z = 0.25;
            magnetRef.current.rotation.x = 3.14;

        } else {
            magnetRef.current.rotation.x = 0;
            magnetFieldRef.current.position.z = 1.8;
            magnetFieldRef.current.rotation.y = 0;
        }
    }

    const moveMagnet = e => {
        e.preventDefault();
        if (!mrotate && direction) {
            positiveHall()

        } else if (mrotate && direction) {
            negativeHall()

        } else if (!mrotate && !direction) {
            negativeHall()

        } else if (mrotate && !direction) {
            positiveHall()

        }
    }

    function positiveHall() {
        setShowHall(false)
        setShowHall1(false)
        setNewFlow(false)


        new TWEEN.Tween(magnetRef.current.position)
            .to({ x: -1 }, 3000)
            .easing(TWEEN.Easing.Cubic.Out)
            .start()
        magnetRef.current.position.z = 0;

        change = 2

        setTimeout(function () {
            pointChange()
            setTimeout(function () {
                hallElectronsRef.current.visible = true;
                hallElectronsRef.current.rotation.y = 0;
                setShowHall(true)
                new TWEEN.Tween(galvNeedleRef.current.rotation)
                    .to({ z: 0.8 }, 1500)
                    .easing(TWEEN.Easing.Cubic.In)
                    .start()


            }, 1500)
        }, 2500);

        // galvNeedle.rotation.z = 0.8;

    }

    function negativeHall() {
        setShowHall(false)
        setShowHall1(false)
        setNewFlow(false)

        new TWEEN.Tween(magnetRef.current.position)
            .to({ x: -1 }, 3000)
            .easing(TWEEN.Easing.Cubic.Out)
            .start()
        magnetRef.current.position.z = 0;
        change = 1

        setTimeout(function () {
            pointChange()
            setTimeout(function () {
                hallElectronsRef.current.visible = true;
                hallElectronsRef.current.rotation.y = 3.14;
                setShowHall1(true)
                new TWEEN.Tween(galvNeedleRef.current.rotation)
                    .to({ z: -0.8 }, 1500)
                    .easing(TWEEN.Easing.Cubic.In)
                    .start()
            }, 1500)
        }, 2500);
    }

    function pointChange() {
        setNewFlow(false)

        if (change === 0) {

            curves[0].curve.points[6] = new THREE.Vector3(0, 0, 0)
            curves.forEach(function ({ curve, line }) {
                // console.log(curves[0].curve.points[5])
                // console.log(curveHandles)
                const points = curve.getPoints(50);
                line.geometry.setFromPoints(points);
                flow.updateCurve(0, curve);
                setCourvs([])
            });

        }


        if (change === 1) {
            setNewFlow(true)
            curves[0].curve.points[6] = new THREE.Vector3(-0.9, 0, 0)
            curves.forEach(function ({ curve, line }) {
                // console.log(curves[0].curve.points[5])
                // console.log(curveHandles)
                const points = curve.getPoints(50);
                line.geometry.setFromPoints(points);
                flow.updateCurve(0, curve);
                setCourvs(c => [...c, { curve, line, flow: <primitive object={flow.object3D} /> }])
            });

        }

        if (change === 2) {
            setNewFlow(true)
            curves[0].curve.points[6] = new THREE.Vector3(0.9, 0, 0)
            curves.forEach(function ({ curve, line }) {
                // console.log(curves[0].curve.points[5])
                // console.log(curveHandles)
                const points = curve.getPoints(50);
                line.geometry.setFromPoints(points);
                flow.updateCurve(0, curve);
                setCourvs(c => [...c, { curve, line, flow: <primitive object={flow.object3D} /> }])

            });

        }


    }

    const resetAll = e => {
        e.preventDefault()

        new TWEEN.Tween(magnetRef.current.position)
            .to({ x: -8 }, 8000)
            .easing(TWEEN.Easing.Cubic.Out)
            .start()
        magnetRef.current.position.z = 0;
        change = 0

        setTimeout(function () {
            pointChange()

            hallElectronsRef.current.visible = false;
            hallRef.current.visible = false;
            new TWEEN.Tween(galvNeedleRef.current.rotation)
                .to({ z: 0 }, 2000)
                .easing(TWEEN.Easing.Cubic.Out)
                .start()
        }, 2500);

    }


    return (
        <div style={{ backgroundColor: 'white' }}>

            <Canvas
                
                id='scene'
                style={{ height: window.innerHeight, width: window.innerWidth }}
                camera={{ fov: 50, zoom: 0.8, near: 0.1, far: 1500, position: [6, 9, 11] }}
            >
                <OrbitControls enablePan={true} enableZoom={true} target={[0, 1, 0]} enableDamping={true} dampingFactor={0.05} rotateSpeed={0.1} />
                <ambientLight intensity={.70} position={[0, 20, 0]} />
                <directionalLight intensity={5.0} position={[-30, 50, -30]} castShadow={true} shadow={[70, -70, -70, 70, 2048, 2048]} />


                <Connector x={4} y={0.8} z={4} col={'#b0b0b0'} loc={[0, 0, 0]} boolean={true} />
                <Connector x={0.6} y={1} z={0.5} col={'#EF5523'} loc={[2, 0, 0]} boolean={false} />
                <Connector x={0.6} y={1} z={0.5} col={'#EF3523'} loc={[-2, 0, 0]} boolean={false} />
                <Connector x={0.5} y={1} z={0.6} col={'#EF3523'} loc={[0, 0, 2]} boolean={false} />
                <Connector x={0.5} y={1} z={0.6} col={'#EF3523'} loc={[0, 0, -2]} boolean={false} />
                <gridHelper args={[10, 10, 'black', '#DEDEDE']} />
                <MeasureSpline />
                <SupplySpline />



                <group ref={cellRef} position={[5.5, 0, 0]} rotation={[0, 0, 0]}>
                    <Connector
                        x={1.5}
                        y={1}
                        z={2.5}
                        col={0xFF3500}
                        loc={new THREE.Vector3(0, 0.5, 1)}
                        boolean={false}
                        children={
                            <group>
                                <Connector x={.1} y={.05} z={0.6} col={0x000000} loc={[0, .5, 0.5]} boolean={false} />
                                <Connector x={0.6} y={.05} z={0.1} col={0x000000} loc={[0, .5, 0.5]} boolean={false} />
                            </group>
                        }
                    />
                    <Connector
                        x={1.5}
                        y={1}
                        z={1.5}
                        col={'black'}
                        loc={new THREE.Vector3(0, 0.5, -1)}
                        boolean={false}
                        children={
                            <Connector x={.1} y={.05} z={0.6} col={0xffffff} loc={[0, 0.5, -0.3]} boolean={false} />
                        }
                    />
                </group>
                <group ref={magnetRef} position={[-8, 0, 0]} rotation={[0, 0, 0]}>
                    <Connector x={3} y={1} z={1.5} col={0xFF0030} loc={[0, -1.5, 1]} boolean={false} />
                    <Connector x={1} y={2.0} z={1.5} col={0xFF0030} loc={[-2, -1.0, 1]} boolean={false} />
                    <Connector x={3} y={1} z={1.5} col={0x3000FF} loc={[0, 1.5, 1]} boolean={false} />
                    <Connector x={1} y={2.0} z={1.5} col={0x3000FF} loc={[-2, 1.0, 1]} boolean={false} />

                    <Connector
                        fref={magnetFieldRef}
                        x={0.06}
                        y={1.8}
                        z={.05}
                        col={0x000000}
                        loc={[0, 0, 1.8]}
                        boolean={false}
                        children={
                            <>
                                <Connector x={.06} y={0.6} z={.05} col={0x000000} loc={[0.15, 0.6, 0]} boolean={false} rotation={[0, 0, 0.5]} />
                                <Connector x={.06} y={0.6} z={.05} col={0x000000} loc={[-0.15, 0.6, 0]} boolean={false} rotation={[0, 0, -0.5]} />
                                <Connector
                                    x={.06}
                                    y={0.6}
                                    z={.05}
                                    col={0x000000}
                                    loc={[-0.15, -1.3, 0]}
                                    boolean={false}
                                    children={
                                        <>
                                            <Connector x={.06} y={0.6} z={.05} col={0x000000} loc={[0.15, 0, 0]} boolean={false} rotation={[0, 0, 0.5]} />
                                            <Connector x={.06} y={0.6} z={.05} col={0x000000} loc={[0.32, 0, 0]} boolean={false} />

                                        </>
                                    }
                                />
                            </>
                        }
                    />

                </group>

                <Connector x={2.5} y={2} z={.5} col={0xEFb035} loc={[0, 4.5, 0]} boolean={false} />
                <Connector fref={galvNeedleRef} x={.06} y={1} z={.05} col={0x000000} loc={[0, 4, 0.26]} boolean={false} translatee={[0, .5, 0]} rotation={[0, 0, 0]} />
                <SpriteMaterial />

                <group ref={hallElectronsRef} visible={false}>
                    <Connector
                        x={.5}
                        y={0.9}
                        z={4.1}
                        col={0x00b0ff}
                        loc={new THREE.Vector3(1.8, 0, 0)}
                        boolean={true} visible={false} />
                    <Connector x={.5} y={0.9} z={4.1} col={0xff020b} loc={new THREE.Vector3(-1.8, 0, 0)} boolean={true} />
                </group>
                {showHall &&
                    <group ref={hallRef}>
                        <SquareFromPoints points={[3.5, .4, -.6, 3.5, .4, .6, 2.5, .2, 0]} />
                        <SquareFromPoints points={[-3.5, .6, 0, -2.5, .2, -.6, -2.5, .2, .6]} />
                        <SquareFromPoints points={[-1.5, 3.6, 0, -2.5, 3.5, -.6, -2.5, 3.5, .6]} />
                        <SquareFromPoints points={[1.5, 3.6, -.6, 1.5, 3.6, .6, 2.5, 3.5, 0]} />

                    </group>
                }
                {showHall1 &&
                    <group ref={hallRef}>
                        <SquareFromPoints points={[2.5, .2, -.6, 2.5, .2, .6, 3.5, .5, 0]} />
                        <SquareFromPoints points={[-2.5, .2, 0, -3.5, .5, -.2, -3.5, .5, .6]} />
                        <SquareFromPoints points={[-2.5, 3.5, 0, -1.5, 3.6, -.6, -1.5, 3.6, .6]} />
                        <SquareFromPoints points={[2.5, 3.5, -.6, 2.5, 3.5, .6, 1.5, 3.6, 0]} />

                    </group>
                }


                {/* {curves.map(c => <primitive object={c.line} />)} */}
                {newFlow && courvs.map(c =>
                    <>
                        <primitive object={c.line} />
                        {c.flow}
                    </>
                )}
                {!newFlow && flowCurve.map(f => f)}



                <Html position={[-9.5, -3, 9.5]}>
                    <div class="btn-group" role="group" aria-label="Basic example" style={{ width: 550 }}>
                        <button type="button" class="btn btn-primary" onClick={changeCurrent}>Current Change</button>
                        <button type="button" class="btn btn-primary" onClick={flipMagnet}>Field Flip</button>
                        <button type="button" class="btn btn-primary" onClick={moveMagnet}>Move Magnet</button>
                        <button type="button" class="btn btn-primary" onClick={resetAll}>Reset</button>
                    </div>
                </Html>



            </Canvas>
        </div>
    )
}
