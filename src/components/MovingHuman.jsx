import React, { useEffect } from "react";

const MovingHuman = ({ position, setPosition, speed }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      // const step = { speed }; // Movement step size
      const step = 2; // Movement step size
      const [x, y, z] = position;
      switch (event.key) {
        case "ArrowUp":
          setPosition([x, y, z - step]);
          break;
        case "ArrowDown":
          setPosition([x, y, z + step]);
          break;
        case "ArrowLeft":
          setPosition([x - step, y, z]);
          break;
        case "ArrowRight":
          setPosition([x + step, y, z]);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position, setPosition]);

  return null;
};

export default MovingHuman;
