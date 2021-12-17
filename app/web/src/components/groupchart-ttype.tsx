import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']; 
  
const BarChart = () => {
  return (
    <div>
      <Bar
        options={{
            plugins: {
                title: {
                  display: true,
                  text: 'Chart Information',
                },
              },
              responsive: true,
              interaction: {
                mode: 'index' as const,
                intersect: false,
              },
              scales: {
                x: {
                  stacked: true,
                },
                y: {
                  stacked: true,
                },
              },
        }}
        data={{
          labels,
          datasets: [
            {
              label: 'Technical Support',
              data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
              backgroundColor: 'rgb(255, 99, 132)',
              stack: 'Stack 0',
            },
            {
              label: 'Administration Request',
              data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
              backgroundColor: 'rgb(75, 192, 192)',
              stack: 'Stack 0',
            },
          ],
        }}
      />
    </div>
  )
}

export default BarChart