import React from "react";
import Intro from "./Intro";
import Overview from "./Overview";
import Efficiency from "./Efficiency";
import CustomerPhilosophy from "./CustomerPhilosophy";
import Experience from "./Experience";

function Container() {
  return (
    <div className="space-y-12 mb-12">
      <Intro />
      <Overview />
      <Efficiency />
      <Experience />
      {/* <CustomerPhilosophy /> */}
    </div>
  );
}

export default Container;
