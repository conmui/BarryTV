import React from "react";

function EpisodeItem({ data }) {
  return (
    <li>
      <button>
        <span>
          {data.season} {data.episode}
        </span>
        <span>{data.title}</span>
        <img src={`/episodes/s${data.season}-e${data.episode}.png`} alt="" />
      </button>
    </li>
  );
}

export default EpisodeItem;
