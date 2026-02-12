import { useState, useEffect } from "react";
import "./final.css";

function Final() {
  const gifs = [
    "https://c.tenor.com/ipneOqdxv6MAAAAd/tenor.gif",
    "https://c.tenor.com/kWWWa4ygjj8AAAAC/tenor.gif",
    "https://c.tenor.com/V7-gVNsD2EAAAAAC/tenor.gif"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % gifs.length);
        setFade(true);
      }, 400); // fade duration

    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, [gifs.length]);

  return (
    <div className="final-wrapper">
      <img
        src={gifs[currentIndex]}
        alt="Final GIF"
        className={`final-gif ${fade ? "fade-in" : "fade-out"}`}
      />
    </div>
  );
}

export default Final;