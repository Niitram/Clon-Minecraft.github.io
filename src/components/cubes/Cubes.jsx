import { useStore } from "../../hooks/useStore";
import Cube from "../cube/Cube";

export const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes]);

  return cubes.map(({ id, pos, texture }) => {
    return <Cube key={id} id={id} pos={pos} texture={texture} />;
  });
};
