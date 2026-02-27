import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

const HeroSection = () => {
  const heroRef = useRef(null);
  const carImageRef = useRef(null);
  const statCardsRef = useRef([]);

  const statsData = [
    { value: "98%", label: "Success Rate" },
    { value: "5000+", label: "Happy Clients" },
    { value: "500", label: "Projects Done" },
    { value: "5+", label: "Years Experience" },
    { value: "15", label: "Awards Won" }
  ];

  useEffect(() => {
    if (!heroRef.current) {
      console.warn("heroRef not available");
      return;
    }

    try {
      gsap.registerPlugin(ScrollTrigger);
      console.log("GSAP registered");

      const context = gsap.context(() => {
        if (carImageRef.current) gsap.set(carImageRef.current, { x: 400 });
        if (statCardsRef.current.length > 0) gsap.set(statCardsRef.current, { y: 100, opacity: 0 });

        const animationTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=850",
            scrub: true,
            pin: true
          }
        });

        if (carImageRef.current) {
          animationTimeline.to(carImageRef.current, {
            x: 1900,
            ease: "none",
            duration: 1
          }, 0);
        }

        if (statCardsRef.current.length > 0) {
          animationTimeline.to(statCardsRef.current, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.3
          }, 0.2);
        }

      }, heroRef);

      console.log("Animations setup complete");
      return () => context.revert();
    } catch (error) {
      console.error("Animation error:", error);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-section d-flex flex-column justify-content-center align-items-center text-center"
    >
      <h1 className="hero-heading mb-5">
        W E L C O M E &nbsp; T O &nbsp; I T Z F I Z Z
      </h1>

      <div className="row justify-content-center">
        {statsData.map((stat, index) => (
          <div key={index} className="col-md col-10 mb-3">
            <div
              className="stat-card"
              ref={el => (statCardsRef.current[index] = el)}
            >
              <h2 className="stat-value">{stat.value}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="road-strip">
        <img
          ref={carImageRef}
          src={`${import.meta.env.BASE_URL}car-cyan-img.png`}
          className="car-image"
          alt="car"
        />
      </div>
    </section>
  );
};

export default HeroSection;
