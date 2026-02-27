import React, { useEffect } from "react";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timeout = setTimeout(() => onFinish(), 5000);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#000",
      color: "#fff"
    }}>
      <h1>I T Z F I Z Z</h1>
    </div>
  );
};

export default SplashScreen;
