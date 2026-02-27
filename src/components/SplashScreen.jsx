import React, { useEffect } from "react";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timeout = setTimeout(() => onFinish(), 5000);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div className="splash">
      <h1 className="splash-text">I T Z F I Z Z</h1>
    </div>
  );
};

export default SplashScreen;
