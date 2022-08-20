import './App.css';
import {Canvas, useFrame, useThree, extend} from 'react-three-fiber';
import {useRef} from 'react';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
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
    <meshBasicMaterial color='blue'/>
  </mesh>
  )
}

function App() {

  return (
  <div style ={{height:'100vh', width:'100vw'}}>
    <Canvas style={{background: 'black'}} camera ={{position:[3,3,3]}}>
      <Orbit/>
    <Box position={[1,1,0]}/>
    <axesHelper args={[5]}/>
    <points>
      {/* <geometry>
        <vector3 attachArray = 'vertices'/>
      </geometry> */}
    </points>
    </Canvas>
    </div>
  );
}

export default App;
