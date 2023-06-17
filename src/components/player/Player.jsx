import { useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useThree } from "react-three-fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { useKeyboard } from "../../hooks/useKeyboard";

const CHARACTER_SPEED = 5;
const CHARACTER_JUMP_FORCE = 3;

function Player() {
  const { moveBackward, moveForward, moveLeft, moveRight, jump } =
    useKeyboard();
  const { camera } = useThree();
  //creamos una esfera para el personaje
  const [ref, api] = useSphere(() => ({
    mass: 5,
    type: "Dynamic",
    position: [0, 2, 0],
  }));
  //nos subscribimos al evento de posicion del personaje
  const position = useRef([0, 0, 0]);
  useEffect(() => {
    api.position.subscribe((pos) => {
      position.current = pos;
    });
  }, [api.position]);

  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((vel) => {
      velocity.current = vel;
    });
  }, [api.velocity]);

  //cada vez que pase un frame, actualizamos la posicion del personaje
  useFrame(() => {
    camera.position.copy(
      new Vector3(
        position.current[0], //posicion en x
        position.current[1], //posicion en y
        position.current[2] //posicion en z
      )
    );
    const direction = new Vector3();
    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    );
    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0
    );
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(CHARACTER_SPEED) //multiplicamos por 5 para que sea mas rapido y si queremos una velocidad mas baja con un boton le ponemos un numero mas bajo
      .applyEuler(camera.rotation); // hace que se mueva hacia adelante segun la posicion de la camara

    api.velocity.set(direction.x, velocity.current[1], direction.z);
    if (jump && Math.abs(velocity.current[1]) < 0.05) {
      api.velocity.set(
        velocity.current[0],
        CHARACTER_JUMP_FORCE,
        velocity.current[2]
      );
    }
  });

  return <mesh ref={ref} />;
}

export default Player;
