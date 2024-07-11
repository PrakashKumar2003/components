"use client";
import { useState } from "react";

export default function Home() {
  const [inputs, setInputs] = useState({
    distance: 0,
    power_1: 0,
    power_2: "",
    divergence_1: 0,
    divergence_2: "",
    diametre_1: 0,
    diametre_2: 0,
  });

  const [data, setData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const queryString = new URLSearchParams(inputs).toString();
    const url = `/api/divergence?${queryString}`;

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
      <h1>Divergence Calculator</h1>
      <form onSubmit={handleSubmit}>
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
          Power 1:
          <input
            type="number"
            name="power_1"
            value={inputs.power_1}
            onChange={handleChange}
          />
        </label>
        <label>
          Power 2:
          <input
            type="text"
            name="power_2"
            value={inputs.power_2}
            onChange={handleChange}
          />
        </label>
        <label>
          Divergence 1:
          <input
            type="number"
            name="divergence_1"
            value={inputs.divergence_1}
            onChange={handleChange}
          />
        </label>
        <label>
          Divergence 2:
          <input
            type="text"
            name="divergence_2"
            value={inputs.divergence_2}
            onChange={handleChange}
          />
        </label>
        <label>
          Diametre 1:
          <input
            type="number"
            name="diametre_1"
            value={inputs.diametre_1}
            onChange={handleChange}
          />
        </label>
        <label>
          Diametre 2:
          <input
            type="number"
            name="diametre_2"
            value={inputs.diametre_2}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
      {data && (
        <div>
          <h2>Results</h2>
          <p>Diametre After 1: {data.diametre_after1}</p>
          <p>Diametre After 2: {data.diametre_after2}</p>
          <p>
            Area 1: <span dangerouslySetInnerHTML={{ __html: data.area1 }} />
          </p>
          <p>
            Intensity 1:{" "}
            <span dangerouslySetInnerHTML={{ __html: data.intensity1 }} />
          </p>
          <p>
            Area 2: <span dangerouslySetInnerHTML={{ __html: data.area2 }} />
          </p>
          <p>
            Intensity 2:{" "}
            <span dangerouslySetInnerHTML={{ __html: data.intensity2 }} />
          </p>
          <p>Distance: {data.distance}</p>
        </div>
      )}
    </div>
  );
}
