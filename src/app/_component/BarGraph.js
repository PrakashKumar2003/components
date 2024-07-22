'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
export default function BarGraph({ chartData })  {
  const isSingleProduct = !chartData.products;
  
  const data = isSingleProduct ? getSingleProductData(chartData) : getMultiProductData(chartData);

  const options = {
    scales: {

      y: {
        beginAtZero: true,
        grid: {
          color: '#222',
          lineWidth: 1,
        },
        border: {
            color: '#222', // Set the border color of the y-axis
            width: 2 // Set the border width of the y-axis
          }
      },
      x: {
        grid: {
          display: false,
        },
        border: {
            color: '#222', 
            width: 2 
          },                                                                                                                                                                                                                                                                                                                                                                                                    
      },
    },
   
    plugins: {
      legend: {
        display:!isSingleProduct,
        position: 'top',
        labels: {
            boxWidth: 16,
          color: '#fff',
          font: {
            size: 14,
            family: "'Roboto', sans-serif",
            weight: 'bold',
          },
        },
      },
    },
    responsive: true,
    barPercentage: isSingleProduct ? 0.2 : 0.8, // Adjust bar width for single product
    // categoryPercentage: 1.0 ,// Ensure bars take up full width of category
    
  };

  return (
    <div style={{  padding: '20px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

const getMultiProductData = (chartData) => {
  const { products, modules } = chartData;
  const wavelengths = Object.keys(modules);

  const powers = {};
  const colors = {};
  const values ={}

  wavelengths.forEach(wavelength => {
values[wavelength] = modules[wavelength].wavelength
    powers[wavelength] = modules[wavelength].powers.map(powerEntry => parseFloat(powerEntry[1]) || 0);
    colors[wavelength] = modules[wavelength].color;
  });

  return {
    labels: products,
    datasets: wavelengths.map((wavelength) => ({
      label: values[wavelength],
      data: powers[wavelength],
      backgroundColor: colors[wavelength],
    })),
  };
};

const getSingleProductData = (chartData) => {
  const keys = Object.keys(chartData).filter(key => key !== 'chartID');
  const labels = keys.map(key => chartData[key].key);
  const data = keys.map(key => parseFloat(chartData[key].power));
  const colors = keys.map(key => chartData[key].color);

  return {
    labels,
    datasets: [{
      label: 'Power',
      data,
      backgroundColor: colors,
    }],
  };
};

