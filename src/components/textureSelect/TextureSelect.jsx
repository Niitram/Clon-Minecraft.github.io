import { useEffect } from "react";
import * as images from "../../assets/images/images";
import { useStore } from "../../hooks/useStore";
import { useKeyboard } from "../../hooks/useKeyboard";

function TextureSelect() {
  const [texture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);

  const { dirt, grass, glass, wood, log } = useKeyboard();

  useEffect(() => {
    const options = {
      grass,
      glass,
      dirt,
      log,
      wood,
    };

    const selectedTexture = Object.entries(options).find(
      ([texture, isEnabled]) => isEnabled
    );
    if (selectedTexture) {
      const [textureName] = selectedTexture;

      setTexture(textureName);
    }
  }, [dirt, grass, glass, wood, log]);

  return (
    <div className="texture-select">
      {Object.entries(images).map(([imgKey, img]) => {
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
