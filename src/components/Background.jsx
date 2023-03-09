import React from "react";

import bgImage from "../video/smoke.mp4";
import Timer from "./Timer";

export default function Background() {
  return (
    <>
      <section className="sction">
        <h2 className="hh2 text-5xl md:text-[6rem]">
          Xception 4.0 {<Timer />}
        </h2>

        <video autoPlay loop muted className="vdeo">
          <source src={bgImage} type="video/mp4" />
        </video>
      </section>
    </>
  );
}
