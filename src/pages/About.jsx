import React from "react";
import Title from "../components/Title";
import Quote from "../components/Quote";

function About() {
  return (
    <main>
      <Title title={"About"} />
      <Quote
        quote={"About quote"}
        spokenBy={"About spokenBy"}
        inEp={"About inEp"}
      />
    </main>
  );
}

export default About;
