

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

  export default Floor;