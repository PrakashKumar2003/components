"use client";
import { useState } from "react";

export default function AngleDistanceSizeCalculator() {
  const [inputs, setInputs] = useState({
    angle: "",
    distance: "",
    size: "",
  });

  const [data, setData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filledInputs = Object.keys(inputs).filter(
      (key) => inputs[key] !== ""
    );
    if (filledInputs.length !== 2) {
      alert("Please fill exactly two fields.");
      return;
    }
    const queryString = new URLSearchParams(inputs).toString();
    const url = `/api/angle?${queryString}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div>
      <h1>Angle Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Angle:
          <input
            type="number"
            name="angle"
            value={inputs.angle}
            onChange={handleChange}
          />
        </label>
        <label>
          Distance:
          <input
            type="number"
            name="distance"
            value={inputs.distance}
            onChange={handleChange}
          />
        </label>
        <label>
          Size:
          <input
            type="number"
            name="size"
            value={inputs.size}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
      {data && (
        <div>
          <h2>Results</h2>
          <p>
             {data}
          </p>
        </div>
      )}
    </div>
  );
}
