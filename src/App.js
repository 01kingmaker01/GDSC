import "./App.css";
import Slider from "./components/teamslider/Slider";
import Flipcard from "./components/flipcard/FlipCard";
import Landing from "./components/landing/Landing";
import Partners from "./components/partners/Partners";
import Events from "./components/events/EventSlider";
import Footer from "./components/footer/FooterGrid";
import SwipeToSlide from "./components/opportunities/Opportunities";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Loader from "./components/loader/loader";
import AnimationRevealPage from "assets/helper/AnimationRevealPage";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="z-50 flex object-center bg-white w-screen h-screen absolute "
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Loader key="loading" />
        </motion.div>
      )}
      <AnimationRevealPage key="group">
        <Landing />
        <Flipcard />
        <Slider />
        <Events />
        <SwipeToSlide />
        <Partners />
        <Footer />
      </AnimationRevealPage>
    </AnimatePresence>
  );
}

export default App;
