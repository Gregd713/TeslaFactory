import './App.css';
import {Canvas} from 'react-three-fiber';
import {Suspense} from 'react';
import Orbit from './components/Orbit';
import Background from './components/Background';
import Plane from './components/Floor';
import Bulb from './components/Bulb';
import ColorPicker from './components/ColorPicker';
import {Physics} from '@react-three/cannon';
import Cars from './components/Cars';
import CameraControls from './components/CameraControls';
import CameraButtons from './components/CameraButtons';

function App() {

  return (
  <div style ={{height:'100vh', width:'100vw'}}>
    <ColorPicker/>
    <CameraButtons/>
    <Canvas shadows  style={{background: 'black'}} camera ={{position:[7,7,7]}}>
     <Orbit />
     <axesHelper args={[5]}/>
     <CameraControls/>
     <Physics>
     <Suspense fallback={null}>
     <Bulb position={[0,3,0]}/>
     <Cars/>
     <ambientLight intensity={0.2}/>
    </Suspense>
    <Plane position = {[0,-0.5,0]} />
    </Physics>
    <Suspense>
    <Background/>
    </Suspense>
    </Canvas>
    </div>
  );
}

export default App;
