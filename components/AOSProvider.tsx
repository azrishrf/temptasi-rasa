"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);
  return null;
}
