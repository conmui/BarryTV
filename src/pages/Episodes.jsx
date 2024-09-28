import React from "react";
import { useState, useEffect } from "react";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Logo from "../components/Logo";
import episodes from "/src/data/episodes.json";
import EpisodeItem from "../components/EpisodeItem";

function Episodes({ title }) {
  const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);

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
        <h2>"{selectedEpisode.title}"</h2>

        <ul>
          <li>
            <span>Season</span> {selectedEpisode.season}
          </li>
          <li>
            <span>Episode</span> {selectedEpisode.episode}
          </li>
          <li>
            <span>Directed by</span> {selectedEpisode.directedBy}
          </li>
          <li>
            <span>Written by</span> {selectedEpisode.writtenBy}
          </li>
          <li>
            <span>Original air date</span> {selectedEpisode.airDate}
          </li>
        </ul>
        <p>{selectedEpisode.summary}</p>
        <img
          src={`/episodes/s${selectedEpisode.season}-e${selectedEpisode.episode}.png`}
          alt=""
        />

        <ul>
          {episodes.map((item) => (
            <EpisodeItem
              key={item.id}
              data={item}
              onClick={() => setSelectedEpisode(item)}
            />
          ))}
        </ul>
        <Logo />
      </section>
    </main>
  );
}

export default Episodes;
