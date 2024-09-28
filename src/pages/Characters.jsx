import React from "react";
import { useState } from "react";
import Title from "../components/Title";
import Quote from "../components/Quote";
import Logo from "../components/Logo";
import characters from "/src/data/characters.json";
import CharacterItem from "../components/CharacterItem";
import "/src/pages/Characters.css";

function Characters({ title }) {
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [open, setOpen] = useState(false);

  const handleCharacter = (character) => {
    setSelectedCharacter(character);
    setOpen(true);
  };

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
              onClick={() => handleCharacter(item)}
            />
          ))}
        </ul>
        <Logo />
      </section>

      <section className={`Characters__details ${open ? "open" : ""}`}>
        <button onClick={() => setOpen(false)}>
          <i className="ri-close-large-fill"></i>
        </button>
        <h2>{selectedCharacter.name}</h2>
        <p>{selectedCharacter.description}</p>
        <img src={`/characters/${selectedCharacter.imgSrc}`} alt="" />
      </section>
    </main>
  );
}

export default Characters;
