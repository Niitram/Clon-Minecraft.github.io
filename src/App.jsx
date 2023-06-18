import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Ground from "./components/ground/Ground";
import FPV from "./components/fvp/FVP";
import Player from "./components/player/Player";
import { Cubes } from "./components/cubes/Cubes";
import TextureSelect from "./components/textureSelect/TextureSelect";
import Info from "./components/info/Info";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 100]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <TextureSelect />
      <Info />
      <div className="pointer">+</div>
    </>
  );
}

export default App;
