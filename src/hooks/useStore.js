import { nanoid } from "nanoid";
import create from "zustand";

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [{
    id: nanoid(),
    pos: [1, 0, -11],
    texture: "wood"
  }, {
    id: nanoid(),
    pos: [3, 0, -11],
    texture: "wood"
  }, {
    id: nanoid(),
    pos: [1, 1, -11],
    texture: "wood"
  }, {
    id: nanoid(),
    pos: [2, 2, -11],
    texture: "wood"
  }, {
    id: nanoid(),
    pos: [3, 1, -11],
    texture: "wood"
  }, {
    id: nanoid(),
    pos: [3, 2, -11],
    texture: "wood"
  }, {
    id: nanoid(),
    pos: [1, 2, -11],
    texture: "wood"
  },],
  addCube: (x, y, z) => {
    set((state) => ({
      cubes: [...state.cubes, {
        id: nanoid(),
        pos: [x, y, z],
        texture: state.texture
      }]
    }))
  },
  removeCube: (id) => {
    set((state) => ({
      cubes: state.cubes.filter(cube => cube.id !== id)
    }))
  },
  setTexture: (texture) => {
    set(() => ({ texture }))
  },
  saveWorld: () => { },
  resetWorld: () => { },
}));