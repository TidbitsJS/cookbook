"use client";

import { useState, useEffect } from "react";

function RootTemplate({ children }) {
  const [transitionStage, setTransitionStage] = useState("slideOut");

  useEffect(() => setTransitionStage("slideIn"), []);

  return (
    <section className='overflow-hidden'>
      <div
        className={`h-full transition-all duration-700 ease-in-out ${
          transitionStage === "slideIn" ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

export default RootTemplate;
