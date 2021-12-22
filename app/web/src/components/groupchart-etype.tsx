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
              data: [1, 12, 19, 3, 4, 8, 12, 23, 25, 32, 44, 45],
              borderColor : '#003049',
              // backgroundColor: '#312e8115',
              pointBackgroundColor:'#66717E',
              pointRadius:5,
              pointHoverRadius:7,
              borderWidth:2,
              // tension:0.2
            },{
              label: 'Nadya',
              data: [11, 18, 2, 4, 8, 3, 12, 20, 21, 23, 25, 27],
              borderColor : '#d62828',
              // backgroundColor: '#ff660015',
              pointBackgroundColor:'#ffffff',
              pointRadius:5,
              pointHoverRadius:7,
              borderWidth:2,
              // tension:0.2
            }
          ],
        }}
      />
    </div>
  )
}

export default LineChart