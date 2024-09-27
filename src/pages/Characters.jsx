import React from "react";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Logo from "../components/Logo";

function Characters({ title }) {
  return (
    <main>
      <Title title={"Characters"} />
      <Quote
        quote={"Characters quote"}
        spokenBy={"Characters spokenBy"}
        inEp={"Characters inEp"}
      />
      <Logo />
    </main>
  );
}

export default Characters;
