import './App.css';
import {Canvas} from 'react-three-fiber';
import {Suspense} from 'react';
import Orbit from './components/Orbit';
import Box from './components/Box';
import Background from './components/Background';
import Plane from './components/Floor';
import Bulb from './components/Bulb';
import ColorPicker from './components/ColorPicker';
import Dragable from './components/Dragable';
import {Physics} from '@react-three/cannon';
import Model from './components/Model';
import BoundingBox from './components/BoundinBox';
function App() {

  return (
  <div style ={{height:'100vh', width:'100vw'}}>
    <ColorPicker/>
    <Canvas shadows  style={{background: 'black'}} camera ={{position:[7,7,7]}}>
     <Orbit />
     <axesHelper args={[5]}/>
     <Physics>
      
     <Dragable transformGroup>
     <BoundingBox 
     position={[4,4,0]}
     dims={[3,2,6]}
    offset={[0,-.4,0.8]}
     >
      <Suspense>
        <Model 
        path='/tesla_model_3/scene.gltf'
        scale ={new Array(3).fill(0.01)}
        />
      </Suspense>
      </BoundingBox>
      </Dragable>
      <Dragable transformGroup>
      <BoundingBox 
      position={[-4,4,0]}
      dims={[3,2,6]}
      offset={[0,-.8,0.2]}
      >
      <Suspense>
        <Model 
        path='/tesla_model_s/scene.gltf'
        scale ={new Array(3).fill(0.7)}
        />
      </Suspense>
      </BoundingBox>
      </Dragable>
     <Suspense fallback={null}>
     <Bulb position={[0,3,0]}/>

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
