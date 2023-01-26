import React from 'react'
import * as THREE from 'three';

export default function SquareFromPoints({points}) {
    let squareGeometry = new THREE.BufferGeometry()
			const vertices = new Float32Array(points);
			squareGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
			let squareMaterial = new THREE.MeshBasicMaterial({ color:0x111111,
				transparent: true,
				opacity: 0.9, 
				side: THREE.DoubleSide });
  return (
    <mesh geometry={squareGeometry} material={squareMaterial} />
  )
}
