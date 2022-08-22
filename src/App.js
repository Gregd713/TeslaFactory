import './App.css';
import {Canvas, useFrame, useThree, extend,useLoader} from 'react-three-fiber';
import {Suspense, useRef} from 'react';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { isClickableInput } from '@testing-library/user-event/dist/utils';
import * as THREE from 'three';
import { PointLight, Scene } from 'three';
extend({OrbitControls});

const Orbit=()=>{
  const{camera,gl}=useThree();
  return(
    <orbitControls args={[camera, gl.domElement]}/>
  )
}


const Box = props =>{
  const ref = useRef();
  const texture=useLoader(THREE.TextureLoader,'/squares.jpg');
  const handlePointerDown= e =>{
    console.log(e)
    e.object.active=true;
    if(window.activeMesh)
    window.activeMesh=e.object
  }
  const handlePointerEnter=e=>{
    e.object.scale.x=1.5
    e.object.scale.y=1.5
    e.object.scale.z=1.5
  }

  const handlePointerLeave=e=>{
    if(!e.object.active){
      e.object.scale.x=1
      e.object.scale.y=1
      e.object.scale.z=1
    }

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

const Background=props=>{
  const texture=useLoader(THREE.TextureLoader,'autoshop.jpg');

  const {gl}=useThree();

const formatted= new THREE.WebGLCubeRenderTarget(
  texture.image.height
  ).fromEquirectangularTexture(gl, texture)

  return(
    <primitive attach= 'background' object={formatted.texture}/>
  )
}


const Floor =props =>{
  return(
    <mesh  {...props}receiveShadow castShadow>
      <boxBufferGeometry     args={[
      20,1,10
    ]}/>
      <meshPhysicalMaterial/>
    </mesh>
  )
}
const Bulb=props=>{
  return(
    <mesh{...props} receiveShadow castShadow>
      <pointLight />
      <sphereBufferGeometry args={[0.2,20,20]}/>
      <meshPhongMaterial emissive='yellow'/>
    </mesh>
  )
}

function App() {

  return (
  <div style ={{height:'100vh', width:'100vw'}}>
    <Canvas shadows  style={{background: 'black'}} camera ={{position:[7,7,7]}}>
     <Orbit/>
     <Suspense fallback={null}>
     {/* <fog attach = 'fog' args={['white',1,10]}/> */}
     <Bulb position={[0,3,0]}/>
     <ambientLight intensity={0.2}/>
    <Box position={[4,1,0]} />
    <Box position={[-4,1,0]} />
    <Background/>
    </Suspense>
    <axesHelper args={[5]}/>
    <Floor position = {[0,-0.5,0]} />
    </Canvas>
    </div>
  );
}

export default App;
