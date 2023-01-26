import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from "three";

export default function Wall() {
    let boxGeometry = new THREE.BoxGeometry(15, 15, 1);
  return (
    <mesh
    visible
    userData={{ hello: 'world' }}
    position={new THREE.Vector3(0, 0, -2.5)}
    geometry={boxGeometry}
    material={new THREE.MeshStandardMaterial({
        color: 0x0E6655
      })}
  />
  )
}
