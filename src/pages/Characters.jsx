import React from "react";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Logo from "../components/Logo";
import characters from "/src/data/characters.json";
import CharacterItem from "../components/CharacterItem";

function Characters({ title }) {
  return (
    <main>
      <section>
        <Title title={"Characters"} />
        <Quote
          quote={"Characters quote"}
          spokenBy={"Characters spokenBy"}
          inEp={"Characters inEp"}
        />
      </section>

      <section>
        <ul>
          {characters.map((item) => (
            <CharacterItem
              key={item.id}
              name={item.name}
              imgSrc={item.imgSrc}
            />
          ))}
        </ul>
        <Logo />
      </section>
    </main>
  );
}

export default Characters;
