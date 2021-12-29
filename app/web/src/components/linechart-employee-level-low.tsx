import React from 'react'
import { Line, defaults } from 'react-chartjs-2'

const LineChart = () => {
  return (
    <div>
      <Line
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
        data={{
          labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
          datasets: [
            {
              label: 'Moza',
              data: [12, 19, 3, 5, 2, 3, 13, 12, 9, 10, 11, 12],
              borderColor : '#5C2751',
              // backgroundColor: '#312e8115',
              pointBackgroundColor:'#ffffff',
              pointRadius:5,
              pointHoverRadius:7,
              borderWidth:2,
              // tension:0.2
            },
            {
              label: 'Nadya',
              data: [1, 23, 5, 1, 1, 20, 21, 21, 11, 30, 20, 11],
              borderColor : '#6457A6',
              // backgroundColor: '#ff660015',
              pointBackgroundColor:'#ffffff',
              pointRadius:5,
              pointHoverRadius:7,
              borderWidth:2,
              // tension:0.2
            },
            {
              label: 'Imam',
              data: [12, 19, 3, 20, 21, 22, 32, 44, 34, 23, 55, 40],
              borderColor : '#9DACFF',
              // backgroundColor: '#ff660015',
              pointBackgroundColor:'#ffffff',
              pointRadius:5,
              pointHoverRadius:7,
              borderWidth:2,
              // tension:0.2
            },
            {
              label: 'Fawwaz',
              data: [1, 1, 3, 4, 7, 11, 15, 21, 31, 44, 1, 1],
              borderColor : '#76E5FC',
              // backgroundColor: '#ff660015',
              pointBackgroundColor:'#ffffff',
              pointRadius:5,
              pointHoverRadius:7,
              borderWidth:2,
              // tension:0.2
            },
            {
              label: 'Adi',
              data: [5, 8, 9, 10, 14, 22, 32, 44, 54, 63, 75, 80],
              borderColor : '#9DACFF',
              // backgroundColor: '#ff660015',
              pointBackgroundColor:'#ffffff',
              pointRadius:5,
              pointHoverRadius:7,
              borderWidth:2,
              // tension:0.2
            },
          ],
        }}
      />
    </div>
  )
}

export default LineChart