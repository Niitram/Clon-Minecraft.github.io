import { useEffect } from "react";
import * as images from "../../assets/images/images";
import { useStore } from "../../hooks/useStore";
import { useKeyboard } from "../../hooks/useKeyboard";

function TextureSelect() {
  const [texture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);

  const { dirt, grass, glass, wood, log, stone, gold } = useKeyboard();

  useEffect(() => {
    const options = {
      grass,
      glass,
      dirt,
      log,
      wood,
      stone,
      gold,
    };

    const selectedTexture = Object.entries(options).find(
      ([texture, isEnabled]) => isEnabled
    );
    if (selectedTexture) {
      const [textureName] = selectedTexture;
      setTexture(textureName);
    }
  }, [dirt, grass, glass, wood, log, stone, gold]);
  return (
    <div className="texture-select">
      {Object.entries(images).map(([imgKey, img]) => {
        console.log(imgKey.replace("Img", ""));
        return (
          <img
            key={imgKey}
            src={img}
            alt={imgKey}
            className={texture === imgKey.replace("Img", "") ? "selected" : ""}
          />
        );
      })}
    </div>
  );
}

export default TextureSelect;
