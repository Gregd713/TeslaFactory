import './App.css';
import {Canvas,  } from 'react-three-fiber';
import {Suspense, } from 'react';
import Orbit from './components/Orbit';
import Box from './components/Box';
import Background from './components/Background';
import Floor from './components/Floor';
import Bulb from './components/Bulb'
import * as THREE from 'three';
import { PointLight, Scene } from 'three';












function App() {
  const handleClick =e=>{
    if(!window.activeMesh) return;
    window.activeMesh.material.color= new THREE.Color(e.target.style.background)
  }
  return (
  <div style ={{height:'100vh', width:'100vw'}}>
    <div style={{position:'absolute',zIndex:1}}>
      <div onClick={handleClick}
      style={{
        background:'blue',
        height:50,
        width:50}}
      ></div>
            <div onClick={handleClick}
      style={{
        background:'yellow',
        height:50,
        width:50}}
      ></div>
            <div onClick={handleClick}
      style={{
        background:'white',
        height:50,
        width:50}}
      ></div>
    </div>
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
