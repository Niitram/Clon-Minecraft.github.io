import { grassImg, dirtImg, logImg, glassImg, woodImg } from "./images.js";

import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);
//Para que la imagen se repita
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
//Para que la imagen no se vea borrosa por el algoritmo de CSS
dirtTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
groundTexture.magFilter = NearestFilter

export { groundTexture, dirtTexture, logTexture, glassTexture, woodTexture }