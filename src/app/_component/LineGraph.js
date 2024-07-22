'use client'
import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ dataParams }) => {
  const chartRef = useRef(null);

  const calculateIntensity = (distance, power, diameter, divergence) => {
    const beamRadius = diameter / 2 + 2 * distance * Math.tan(Math.PI * divergence / 360 / 2);
    return (4 * power) / (Math.PI * Math.pow(beamRadius, 2));
  };

  const distances = Array.from({ length: 101 }, (_, i) => i); // Distances from 0 to 100

  const datasets = dataParams.map((product, index) => {
    const intensities = distances.map(distance => calculateIntensity(distance, product.visible_power, product.beam_diametre, product.beam_divergence));
    return {
      label: product.product,
      data: intensities,
      borderColor: product.color || `#${Math.floor(Math.random()*16777215).toString(16)}`, // Use custom color if provided
      fill: false,
      pointRadius: 0, // Remove point circles
      backgroundColor: product.color || `#${Math.floor(Math.random()*16777215).toString(16)}`, // Use the same color for legend box
    };
  });

  const data = {
    labels: distances,
    datasets: datasets
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Distance (ft)'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Intensity (mW/mm²)'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };

  return <Line ref={chartRef} data={data} options={options} />;
};

export default ChartComponent;
