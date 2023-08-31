import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

/* Hooks */
import { useLottie } from "./hooks";

/* Wave */
import wave from "./animation/wave.json";

export const HeroWave: React.FC = () => {
  const { playerRef, setLottie } = useLottie();

  return (
    <Player
      className="flex items-end z-1 lottie-color-fix"
      onEvent={(e) => e === "load" && setLottie(true)}
      ref={(e) => playerRef.current?.push(e)}
      src={wave}
      loop
      autoplay
    />
  );
};
