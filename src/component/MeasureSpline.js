import { Tube } from '@react-three/drei';
import React from 'react'
import * as THREE from 'three'

export default function MeasureSpline() {
    const measureSpline = new THREE.CatmullRomCurve3([
        new THREE.Vector3(2, 0, 0),
        new THREE.Vector3(4, 1, 0),
        new THREE.Vector3(4, 3, 0),
        new THREE.Vector3(-4, 3, 0),
        new THREE.Vector3(-4, 1, 0),
        new THREE.Vector3(-2, 0, 0)
    ]);
  return (
    <mesh>
        <Tube args={[measureSpline,60, .1, 4, false]} material={new THREE.MeshLambertMaterial({ color: 0xb00000, wireframe: false })} />

    </mesh>
  )
}
