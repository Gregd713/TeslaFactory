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
import Model from './components/Model'
function App() {

  return (
  <div style ={{height:'100vh', width:'100vw'}}>
    <ColorPicker/>
    <Canvas shadows  style={{background: 'black'}} camera ={{position:[7,7,7]}}>
     <Orbit />
     <axesHelper args={[5]}/>
     <Physics>
     <Dragable>
      <Suspense>
        <Model 
        path='/tesla_model_3/scene.gltf'
        scale ={new Array(3).fill(0.01)}
        position={[4,0.1,0]}
        />
      </Suspense>
      <Suspense>
        <Model 
        path='/tesla_model_s/scene.gltf'
        scale ={new Array(3).fill(0.7)}
        position={[-4,-.3,0]}
        />
      </Suspense>
     <Suspense fallback={null}>
     {/* <fog attach = 'fog' args={['white',1,10]}/> */}
     <Bulb position={[0,3,0]}/>
     <ambientLight intensity={0.2}/>
    {/* <Box position={[4,1,0]} />
    <Box position={[-4,1,0]} /> */}
    </Suspense>

    </Dragable>
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
