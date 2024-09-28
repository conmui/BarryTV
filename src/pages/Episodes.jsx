import React from "react";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Logo from "../components/Logo";
import episodes from "/src/data/episodes.json";
import EpisodeItem from "../components/EpisodeItem";

function Episodes({ title }) {
  return (
    <main>
      <section>
        <Title title={"Episodes"} />
        <Quote
          quote={"Episodes quote"}
          spokenBy={"Episodes spokenBy"}
          inEp={"Episodes inEp"}
        />
      </section>

      <section>
        <ul>
          {episodes.map((item) => (
            <EpisodeItem key={item.id} data={item} />
          ))}
        </ul>
        <Logo />
      </section>
    </main>
  );
}

export default Episodes;
