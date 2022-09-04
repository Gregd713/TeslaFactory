import { Suspense } from "react";
import BoundingBox from "./BoundinBox";
import Model from "./Model";
import Dragable from './Dragable';


const Cars=({})=>{
    return(
        <Dragable transformGroup>
        <BoundingBox 
        position={[4,4,0]}
        dims={[3,2,6]}
       offset={[0,-.4,0.8]}
        >
           <Model 
           path='/tesla_model_3/scene.gltf'
           scale ={new Array(3).fill(0.01)}
           />
         </BoundingBox>
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
         
    )
}

export default Cars;