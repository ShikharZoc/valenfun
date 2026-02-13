import { useState, useEffect } from "react";
import "./final.css";
import us from "../assets/us.jpeg";

function Final() {
  const images = [
    "https://c.tenor.com/ipneOqdxv6MAAAAd/tenor.gif",
    "https://c.tenor.com/kWWWa4ygjj8AAAAC/tenor.gif",
    "https://c.tenor.com/V7-gVNsD2EAAAAAC/tenor.gif",
    us // final static image
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (currentIndex >= images.length - 1) return; // 🚨 STOP at last image

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setFade(true);
      }, 400);

    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="final-wrapper">
      <img
        src={images[currentIndex]}
        alt="Final"
        className={`final-gif ${fade ? "fade-in" : "fade-out"}`}
      />
    </div>
  );
}

export default Final;