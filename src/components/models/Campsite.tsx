import { PerspectiveCamera, useGLTF } from "@react-three/drei";


const Campsite = ({props}: any) => {
    const { nodes, scene }: any = useGLTF('./models/campsite.glb')
    console.log(nodes);  
    return (
    <group {...props} dispose={null}>
      {/* <PerspectiveCamera name="camera" fov={40} near={10} far={1000} position={[10, 0, 50]} />       */}
      <ambientLight />
      <primitive rotation={[1, 0, 0]} position={[0, 0, -30]} object={scene} />
    </group>
  )
}

useGLTF.preload('./models/campsite.glb')

export default Campsite;
