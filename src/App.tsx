import './App.css'
import { Canvas } from '@react-three/fiber'
import Campsite from './components/models/Campsite'

const App = () => {
  return (
    <>
     <Canvas>
      <ambientLight />
      <Campsite/>
     </Canvas>
    </>
  )
}

export default App;
