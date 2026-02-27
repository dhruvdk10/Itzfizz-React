import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <SplashScreen onFinish={() => setLoading(false)} />
  ) : (
    <HeroSection />
  );
}

export default App;
