import React from "react";
import CallToAction from "../components/CallToAction";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import Description from "../components/Description";
import Page from "./Page";

function HomePage() {
  return (
    <>
    
        <CallToAction />
        <Specials />
        <Testimonials />
        <Description />
    
    </>
  );
}

export default HomePage;
