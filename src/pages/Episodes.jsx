import React from "react";
import Title from "../components/Title";
import Quote from "../components/Quote";

function Episodes({ title }) {
  return (
    <main>
      <Title title={"Episodes"} />
      <Quote
        quote={"Episodes quote"}
        spokenBy={"Episodes spokenBy"}
        inEp={"Episodes inEp"}
      />
    </main>
  );
}

export default Episodes;
