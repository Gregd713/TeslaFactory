import './App.css';
import {Canvas, useFrame, useThree, extend} from 'react-three-fiber';
import {useRef} from 'react';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { isClickableInput } from '@testing-library/user-event/dist/utils';
import * as THREE from 'three';
import { Scene } from 'three';
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
    ref.current.rotation.x +=0.01;
    ref.current.rotation.y +=0.01;
  })
  return(
    <mesh ref ={ref}{...props}>
    <boxBufferGeometry/>
    <meshPhysicalMaterial color='blue'/>
  </mesh>
  )
}


const Floor =props =>{
  return(
    <mesh  {...props}>
      <boxBufferGeometry     args={[
      10,1,10
    ]}/>
      <meshPhysicalMaterial/>
    </mesh>
  )
}


function App() {

  return (
  <div style ={{height:'100vh', width:'100vw'}}>
    <Canvas style={{background: 'black'}} camera ={{position:[3,3,3]}}>
     <Orbit/>
     <ambientLight intensity={0.5}/>
    <Box position={[1,1,0]}/>
    <axesHelper args={[5]}/>
    <Floor/>
    </Canvas>
    </div>
  );
}

export default App;
