import React from 'react'
import * as THREE from  'three'

export default function Connector({fref,x, y, z, col, loc, boolean,children,rotation=[0,0,0],translatee=[0,0,0],visible=true}) {
    
    
  return (
    <mesh ref={fref} visible={visible} position={loc} rotation={rotation} >
        <boxGeometry attach="geometry" args={[x,y,z]}  translate={translatee} />
        
        <meshPhongMaterial color={col} side={THREE.DoubleSide} transparent={boolean} opacity={0.45} />
        {children}
    </mesh>
  )
}
