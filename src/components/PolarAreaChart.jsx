import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaChart = () => {
  const data = {
    labels: [
      'HTML5', 'CSS', 'JavaScript', 'Bootstrap', 'TailwindCSS', 'ReactJS',
      'PHP', 'Laravel', 'MySQL', 'Adobe Lightroom', 'Adobe Photoshop',
    ],
    datasets: [
      {
        label: 'Confidence (%)',
        data: [90, 85, 60, 75, 80, 65, 60, 55, 50, 60, 50],
        backgroundColor: [
          'rgba(240, 104, 48, 0.7)',
          'rgba(21, 114, 182, 0.7)',
          'rgba(240, 219, 79, 0.7)',
          'rgba(112, 16, 244, 0.7)',
          'rgba(53, 190, 248, 0.7)',
          'rgba(97, 219, 251, 0.7)',
          'rgba(79, 91, 147, 0.7)',
          'rgba(245, 48, 3, 0.7)',
          'rgba(19, 100, 148, 0.7)',
          'rgba(45, 170, 255, 0.7)',
          'rgba(46, 150, 201, 1)',
        ],
        borderWidth: 1,
        borderColor: '#ffffff44',
      },
    ],
  };


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        pointLabels: {
          display: true,
          centerPointLabels: true,
          color: '#fff',
          font: {
            size: 12,
          },
        },
        grid: {
          circular: true,
          color: '#ffffff44',
        },
        angleLines: {
          color: '#ffffff44',
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <section
      className="w-full max-w-4xl md:mx-auto xs:my-3 md:my-10 md:p-5 rounded-lg"
      style={{ height: 'auto' }}
    >
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px]">
        <PolarArea data={data} options={options} />
      </div>
    </section>

  );
};

export default PolarAreaChart;
