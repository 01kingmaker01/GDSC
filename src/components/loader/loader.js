import React, { createRef, useEffect } from "react";
import lottie from "lottie-web";
import animation from "../../assets/animation/loader.json";

const Loader = () => {
  let animationContainer = createRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
    });
  }, [animationContainer]);

  return (
    <div
      className="fixed top-0 left-0 right-0 loader z-50 bg-white h-screen w-screen"
      ref={animationContainer}
      key="loaderJSON"
    />
  );
};

export default Loader;
