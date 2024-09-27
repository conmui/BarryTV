import React from "react";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Logo from "../components/Logo";

function Episodes({ title }) {
  return (
    <main>
      <Title title={"Episodes"} />
      <Quote
        quote={"Episodes quote"}
        spokenBy={"Episodes spokenBy"}
        inEp={"Episodes inEp"}
      />
      <Logo />
    </main>
  );
}

export default Episodes;
