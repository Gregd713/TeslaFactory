import {useFrame, useLoader} from 'react-three-fiber';
import{useRef} from 'react';
import  * as THREE from'three'

const Box = props =>{
    const ref = useRef();
    const texture=useLoader(THREE.TextureLoader,'/squares.jpg');
    const handlePointerDown= e =>{
  
      e.object.active=true;
      if(window.activeMesh) {
        scaleDown(window.activeMesh)
        window.activeMesh.active=false;
      }
      window.activeMesh=e.object
    }
    const handlePointerEnter=e=>{
      e.object.scale.x=1.5
      e.object.scale.y=1.5
      e.object.scale.z=1.5
    }
  
    const handlePointerLeave=e=>{
      if(!e.object.active){
        scaleDown(e.object)
      }
    }
  
    const scaleDown=object=>{
      object.scale.x=1
      object.scale.y=1
      object.scale.z=1
    }
  
    useFrame(state=>{
      ref.current.rotation.x +=0.01;
      ref.current.rotation.y +=0.01;
    })
    return(
      <mesh ref ={ref}{...props} 
      receiveShadow 
      castShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      >
      <boxBufferGeometry/>
      <meshPhysicalMaterial 
      map={texture}
      // color='white'
      // transparent
      // metalness={1}
      // roughness={0}
      // clearcoat={1}
      // transmission={1}
      // reflectivity={1}
      // side={THREE.DoubleSide}
      />
    </mesh>
    )
  }
  
  export default Box;