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
              data: [1, 5, 10, 25, 60, 90, 120, 150, 180, 210, 240, 280],
              borderColor : '#03045e',
              // backgroundColor: '#312e8115',
              pointBackgroundColor:'#66717E',
              pointRadius:5,
              pointHoverRadius:7,
              borderWidth:2,
              // tension:0.2
            },{
              label: 'Nadya',
              data: [1, 5, 10, 25, 40, 90, 120, 150, 160, 210, 200, 180],
              borderColor : '#023e8a',
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