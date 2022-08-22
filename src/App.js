import './App.css';
import {Canvas, useFrame, useThree, extend} from 'react-three-fiber';
import {useRef} from 'react';
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
  useFrame(state=>{
    // ref.current.rotation.x +=0.01;
    ref.current.rotation.y +=0.01;
  })
  return(
    <mesh ref ={ref}{...props} receiveShadow castShadow>
    <boxBufferGeometry/>
    <meshPhysicalMaterial 
    color='white'

    transparent
    // metalness={1}
    roughness={0}
    clearcoat={1}
    transmission={1}
    reflectivity={1}
    side={THREE.DoubleSide}
    />
  </mesh>
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
    <Canvas shadows colorManagement style={{background: 'black'}} camera ={{position:[1,5,1]}}>
     <Orbit/>
     {/* <fog attach = 'fog' args={['white',1,10]}/> */}
     <Bulb position={[0,3,0]}/>
     <ambientLight intensity={0.2}/>
    <Box position={[0,1,0]} />
    <axesHelper args={[5]}/>
    <Floor position = {[0,-0.5,0]} />
    </Canvas>
    </div>
  );
}

export default App;
