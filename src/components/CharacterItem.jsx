import React from "react";

function CharacterItem({ name, imgSrc }) {
  return (
    <div>
      <button>
        <img src={`/characters/${imgSrc}`} alt={`still photo of ${name}`} />
      </button>
      <span>{name}</span>
    </div>
  );
}

export default CharacterItem;
