import React, { useEffect } from "react";
import lottie from "lottie-web";
import animationRain from "../assets/animated/AnimatedRain.json";
import animationSun from "../assets/animated/AnimatedSun.json";
import animationCloud from "../assets/animated/AnimatedClouds.json";
import animationSnow from "../assets/animated/AnimatedSnow.json";
import animationWind from "../assets/animated/AnimatedWind.json";

const AnimatedSVG = ({ statoTempo }) => {
  useEffect(() => {
    let animationData;

    if (statoTempo.includes("rain")) {
      animationData = animationRain;
    } else if (statoTempo.includes("sun")) {
      animationData = animationSun;
    } else if (statoTempo.includes("wind")) {
      animationData = animationWind;
    } else if (statoTempo.includes("cloud")) {
      animationData = animationCloud;
    } else if (statoTempo.includes("snow") || statoTempo.includes("sand")) {
      animationData = animationSnow;
    } else {
      animationData = animationSun;
    }

    const animation = lottie.loadAnimation({
      container: document.getElementById("lottie-container"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      animation.destroy();
    };
  }, [statoTempo]);

  return (
    <div className="contenitore-svg">
      <div
        id="lottie-container"
        style={{
          width: "100%",
          maxWidth: "300px",
          height: "auto",
        }}
      ></div>
    </div>
  );
};

export default AnimatedSVG;
