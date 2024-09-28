import React from "react";

function CharacterItem({ name, imgSrc, onClick }) {
  return (
    <div>
      <button onClick={onClick}>
        <img src={`/characters/${imgSrc}`} alt={`still photo of ${name}`} />
      </button>
      <span>{name}</span>
    </div>
  );
}

export default CharacterItem;
