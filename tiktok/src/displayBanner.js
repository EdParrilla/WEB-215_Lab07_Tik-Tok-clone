import React from "react";
import Ticker from "react-ticker";
//import "./styles.css";

function Slider({song}) {
  return (
    <Ticker>
      {({ index }) => (
        <>
          <p >
            {song}
          </p>
        </>
      )}
    </Ticker>
  );
}

export default Slider;