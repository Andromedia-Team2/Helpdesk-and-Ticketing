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
              label: 'Moza',
              data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
              backgroundColor: '#5C2751',
              stack: 'Stack 0',
            },
            {
              label: 'Nadya',
              data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
              backgroundColor: '#6457A6',
              stack: 'Stack 0',
            },
            {
              label: 'Imam',
              data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
              backgroundColor: '#9DACFF',
              stack: 'Stack 0',
            },
            {
              label: 'Fawwaz',
              data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
              backgroundColor: '#76E5FC',
              stack: 'Stack 0',
            },
            {
              label: 'Adi',
              data: labels.map(() => faker.datatype.number({ min: 1, max: 1000 })),
              backgroundColor: '#4BC0D9',
              stack: 'Stack 0',
            },
          ],
        }}
      />
    </div>
  )
}

export default BarChart