import React from "react";
import "/src/components/Quote.css";

function Quote({ quote, spokenBy, inEp }) {
  return (
    <div className="Quote">
      <p className="Quote__text">{quote}</p>
      <p className="Quote__reference">
        — {spokenBy}, Barry {inEp}
      </p>
    </div>
  );
}

export default Quote;
