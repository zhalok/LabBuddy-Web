import React from 'react'
import * as THREE from "three";

export default function Weight({radius,width,rx,px,py,pz}) {
    let tubeGeometry = new THREE.CylinderGeometry(radius, radius, width, 16);
  return (
    <mesh
    position={[px,py,pz]}
    rotation={[rx,0,0]}
    geometry={tubeGeometry}
    material={new THREE.MeshBasicMaterial({ color: new THREE.Color('hotpink'), transparent: true })}
  />
  )
}