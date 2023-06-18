import { grassImg, dirtImg, logImg, glassImg, woodImg, stoneImg, goldImg } from "./images.js";

import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);
const stoneTexture = new TextureLoader().load(stoneImg);
const goldTexture = new TextureLoader().load(goldImg);
//Para que la imagen se repita
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
//Para que la imagen no se vea borrosa por el algoritmo de CSS
dirtTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
groundTexture.magFilter = NearestFilter
stoneTexture.magFilter = NearestFilter
goldTexture.magFilter = NearestFilter

export { groundTexture, dirtTexture, logTexture, glassTexture, woodTexture, stoneTexture, goldTexture }