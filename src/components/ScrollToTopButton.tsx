"use client";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 bg-plomo-medio text-white p-3 rounded-full shadow-lg hover:bg-plomo-oscuro transition-opacity ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Subir al inicio"
    >
      ↑
    </button>
  );
}
