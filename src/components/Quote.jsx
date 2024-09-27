import React from "react";

function Quote({ quote, spokenBy, inEp }) {
  return (
    <div>
      {quote} {spokenBy} {inEp}
    </div>
  );
}

export default Quote;
