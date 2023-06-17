import { useBox } from "@react-three/cannon";
import * as textures from "../../assets/images/textures";
import { useState } from "react";
import { useStore } from "../../hooks/useStore";

function Cube({ id, pos, texture }) {
  const [isHovered, setIsHovered] = useState(false);
  const [ref] = useBox(() => ({
    position: pos,
    type: "Static",
  }));
  const [removeCube] = useStore((state) => [state.removeCube]);
  const textureToUse = textures[texture + "Texture"];
  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        if (e.altKey) {
          removeCube(id);
        }
      }}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        color={isHovered ? "grey" : "white"}
        map={textureToUse}
        attach="material"
      />
    </mesh>
  );
}

export default Cube;
