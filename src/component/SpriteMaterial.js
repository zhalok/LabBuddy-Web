import React from 'react'
import * as THREE from 'three'
import image from '../assets/galvReading.png'

export default function SpriteMaterial() {
    let texture = new THREE.TextureLoader().load(image);
    texture.needsUpdate = false;
    
  return (
    <mesh scale={[5, 2.5, 1.0]} position={new THREE.Vector3(0, 4.6, 0.26)}>
        {/* <spriteMaterial map={texture} /> */}
        <planeGeometry args={[0.45,0.5]} />
        <meshBasicMaterial side={THREE.DoubleSide} map={texture} transparent={true} />

    </mesh>
  )
}