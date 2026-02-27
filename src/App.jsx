import React, { useState} from "react";
import { HeroSection } from "./components/HeroSection";
import { SplashScreen } from "./components/SplashScreen";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <HeroSection />
      )}
    </>
  );
}

export default App;
