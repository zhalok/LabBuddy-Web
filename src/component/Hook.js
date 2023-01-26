import React from 'react'
import * as THREE from "three";

export default function Hook({radius,width,rx,px,py,pz,sx=0,sy=0,sz=0,children,col,rf}) {
    let tubeGeometry = new THREE.CylinderGeometry(radius, radius, width, 16);

  return (
    <mesh
    ref={rf}
    position={[px,py,pz]}
    rotation={[rx,0,0]}
    geometry={tubeGeometry}
    material={new THREE.MeshBasicMaterial({ color: col })}
  >
    {children}
    </mesh>
  )
}
