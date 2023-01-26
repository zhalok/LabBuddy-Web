
import { Tube } from '@react-three/drei';
import React, { useRef, useState } from 'react'
import * as THREE from "three";

export default function Box({params,curve}) {
    

    
    return (
        <mesh
        visible
        >
          <Tube args={[curve, params.points, params.extrude, 8, false]} material={new THREE.MeshPhongMaterial({
            color: 0xff3333,
            flatShading: false,
            side: THREE.DoubleSide
          })} />

          </mesh>
    )
}
