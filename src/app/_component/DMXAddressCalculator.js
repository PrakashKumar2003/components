"use client";
import React, { useState } from "react";

const DMXBinaryConverter = () => {
  const [dmxValue, setDMXValue] = useState("");
  const [binaryRepresentation, setBinaryRepresentation] = useState("");
  const [switchGIFs, setSwitchGIFs] = useState("");
  const [showResult, setShowResult] = useState(false);

  // Function to convert DMX address to binary and display GIFs
  const convertDMXToBinary = (dmxAddress) => {
    let binaryString = "";
    let gifsHTML = "";

    // Convert the DMX address to binary representation (9-bit)
    let binary = Number(dmxAddress).toString(2).padStart(9, "0");
    binaryString = binary.split("").reverse().join(""); // Reverse the binary string

    // Generate the GIFs based on the binary representation
    for (let i = 0; i < binaryString.length; i++) {
      if (binaryString.charAt(i) === "1") {
        gifsHTML += `<img src="/mnt/data/off3.gif" alt="1" style="transform: rotate(180deg);" />`;
      } else {
        gifsHTML += `<img src="/mnt/data/off3.gif" alt="0" />`;
      }
    }

    // Update state with binary string and switch GIFs
    setBinaryRepresentation(binaryString);
    setSwitchGIFs(gifsHTML);
    setShowResult(true);
  };

  // Handle button click to convert DMX value
  const handleConvertClick = () => {
    if (dmxValue.trim() !== "") {
      const intValue = parseInt(dmxValue, 10);

      if (!isNaN(intValue) && intValue >= 0 && intValue <= 511) {
        convertDMXToBinary(intValue);
      } else {
        alert("Please enter a valid DMX value between 0 and 511.");
      }
    } else {
      alert("Please enter a DMX value.");
    }
  };

  // Handle input change
  const handleInputChange = (event) => {
    const { value } = event.target;
    setDMXValue(value);
    setShowResult(false);
  };

  return (
    <div>
      <h2>DMX Binary Converter</h2>
      <label>
        Enter DMX Value (0 - 511):
        <input
          type="number"
          value={dmxValue}
          onChange={handleInputChange}
          min="0"
          max="511"
        />
      </label>
      <button onClick={handleConvertClick}>Convert</button>

      {showResult && (
        <div>
          <p>Binary Representation: {binaryRepresentation}</p>
          <div dangerouslySetInnerHTML={{ __html: switchGIFs }} />
        </div>
      )}
    </div>
  );
};

export default DMXBinaryConverter;
