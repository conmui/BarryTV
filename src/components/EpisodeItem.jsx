import React from "react";

function EpisodeItem({ data, onClick }) {
  return (
    <li>
      <button onClick={onClick}>
        <span>
          Season {data.season} Episode {data.episode}
        </span>
        <span>"{data.title}"</span>
      </button>
    </li>
  );
}

export default EpisodeItem;
