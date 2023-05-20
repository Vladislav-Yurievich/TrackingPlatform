import React from 'react';

import './rating.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip } from 'chart.js';
Chart.register(ArcElement, Tooltip);


const Profile = () => {
  const data = {
    labels: ['Пропущено за месяц', 'Посещено за месяц', 'Пропущено по уважительным причинам'],
    datasets: [
      {
        data: [80, 20, 20],
        backgroundColor: ['#FF6384', '#00FF00', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Скрыть легенду
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = data.labels[context.dataIndex];
            const value = data.datasets[context.datasetIndex].data[context.dataIndex];
            return `${label}: ${value} %`;
          },
        },
      },
    },
    width: 200, // Задать ширину диаграммы
    height: 200, // Задать высоту диаграммы
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  };

  return (
    <>
      <div className='container container-rating'>
        <div className="rating__block">
          <Doughnut data={data} options={options} />
        </div>


      </div>
    </>
  );
};

export default Profile;
