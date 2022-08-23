import './App.css';
import {Canvas} from 'react-three-fiber';
import {Suspense} from 'react';
import Orbit from './components/Orbit';
import Box from './components/Box';
import Background from './components/Background';
import Floor from './components/Floor';
import Bulb from './components/Bulb';
import ColorPicker from './components/ColorPicker';
import Dragable from './components/Dragable';

function App() {

  return (
  <div style ={{height:'100vh', width:'100vw'}}>
    <ColorPicker/>
    <Canvas shadows  style={{background: 'black'}} camera ={{position:[7,7,7]}}>
     <Orbit />
     <axesHelper args={[5]}/>
     <Dragable>
     <Suspense fallback={null}>
     {/* <fog attach = 'fog' args={['white',1,10]}/> */}
     <Bulb position={[0,3,0]}/>
     <ambientLight intensity={0.2}/>
    <Box position={[4,1,0]} />
    <Box position={[-4,1,0]} />
    </Suspense>
    </Dragable>
    <Suspense>
    <Background/>
    </Suspense>

    <Floor position = {[0,-0.5,0]} />
    </Canvas>
    </div>
  );
}

export default App;
