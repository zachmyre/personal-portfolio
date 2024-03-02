import './App.css'
import { Canvas } from '@react-three/fiber'
import Campsite from './components/models/Campsite'

const App = () => {
  return (
    <>
     <Canvas style={{height: "100vh", width: "100vw"}}>
      <ambientLight />
      <Campsite/>
     </Canvas>
    </>
  )
}

export default App;
