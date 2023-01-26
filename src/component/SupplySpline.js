import { Tube } from '@react-three/drei';
import React from 'react'
import * as THREE from 'three'

export default function SupplySpline() {
    const supplySpline = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 2),
        new THREE.Vector3(.5, 0, 4),
        new THREE.Vector3(5, 0.5, 3.6),
        new THREE.Vector3(5, 0.5, -4),
        new THREE.Vector3(.5, 0, -3.6),
        new THREE.Vector3(0, 0, -2)
    ]);
  return (
    <mesh>
        <Tube args={[supplySpline,60, .1, 4, false]} material={new THREE.MeshLambertMaterial({ color: 'yellow', wireframe: false })} />

    </mesh>
  )
}
