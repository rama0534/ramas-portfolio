import React from "react";
import Typewriter from "typewriter-effect";

function PreIntro() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Java Full Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default PreIntro;
