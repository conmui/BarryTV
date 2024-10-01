import React from "react";
import "/src/components/CharacterItem.css";

function CharacterItem({ name, imgSrc, onClick }) {
  return (
    <li className="CharacterItem">
      <button className="CharacterItem__btn" onClick={onClick}>
        <img
          className="CharacterItem__btn-image"
          src={`/characters/${imgSrc}`}
          alt={`Screenshot of ${name}`}
        />
        <span className="CharacterItem__btn-name">{name}</span>
      </button>
    </li>
  );
}

export default CharacterItem;
