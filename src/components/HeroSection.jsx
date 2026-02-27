import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'bootstrap/dist/css/bootstrap.min.css';

gsap.registerPlugin(ScrollTrigger);

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
    const ctx = gsap.context(() => {
      if (carImageRef.current) gsap.set(carImageRef.current, { x: 400 });
      if (statCardsRef.current.length > 0) gsap.set(statCardsRef.current, { y: 100, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=850",
          scrub: true,
          pin: true
        }
      });

      if (carImageRef.current) {
        tl.to(carImageRef.current, { x: 1900, ease: "none", duration: 1 }, 0);
      }

      if (statCardsRef.current.length > 0) {
        tl.to(statCardsRef.current, { y: 0, opacity: 1, stagger: 0.2, duration: 0.3 }, 0.2);
      }

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-section d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "100vh", background: "#111", color: "#fff" }}
    >
      <h1 className="hero-heading mb-5">W E L C O M E &nbsp; T O &nbsp; I T Z F I Z Z</h1>

      <div className="row justify-content-center mb-5">
        {statsData.map((stat, index) => (
          <div key={index} className="col-md col-10 mb-3">
            <div
              className="stat-card p-3 rounded"
              style={{ background: "#222" }}
              ref={el => (statCardsRef.current[index] = el)}
            >
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="road-strip" style={{ width: "100%", overflow: "hidden" }}>
        <img
          ref={carImageRef}
          src={`${import.meta.env.BASE_URL}car-cyan-img.png`}
          alt="car"
          style={{ width: "200px" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;

