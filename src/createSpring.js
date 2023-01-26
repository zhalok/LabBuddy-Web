import * as THREE from 'three';

export function createSpring(params){
    const curvePoints = [];
        function helixPoint(a, b, t) {

            return new THREE.Vector3(a * Math.cos(t), a * Math.sin(t), b * t);
      
          }

      for (let t = 0; t < params.t; t += 0.1) {

        curvePoints.push(helixPoint(params.r, params.b,t));

      }
      
    const curve=new THREE.CatmullRomCurve3(curvePoints);
    let tubeGeometry = new THREE.TubeGeometry(curve, params.points, params.extrude, 8, false);

    return tubeGeometry

}