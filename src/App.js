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
    }, 2000);
  }, []);

  return (
    <AnimatePresence>
      {/* Comment loader to see left right slide animation */}

      {loading && (
        <motion.div
          className="z-50 bg-white w-screen h-screen fixed "
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Loader
            key="loading"
            className="z-50 bg-white w-screen h-screen fixed "
          />
        </motion.div>
      )}

      <><AnimationRevealPage key="group">
        <Landing />
        <Flipcard />
        <Slider />
        <Events />
        <SwipeToSlide />
        <Partners />
        
      </AnimationRevealPage><Footer /></>
    </AnimatePresence>
    //Commit this
  );
}

export default App;
