import React from 'react'
import { Bar, defaults } from 'react-chartjs-2'

const BarChart = () => {
  return (
    <div>
      <Bar
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
        data={{
          labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
          datasets: [
            {
                label: 'Moza',
              data: [12, 19, 13, 15, 12, 13, 11, 23, 25, 50, 71, 92],
              backgroundColor:'#003049',
              borderRadius:5
            },
            {
                label: 'Nadya',
              data: [12, 19, 13, 15, 12, 13, 11, 23, 25, 50, 71, 92],
              backgroundColor:'#f77f00',
              borderRadius:5
            },
            {
                label: 'Imam',
              data: [12, 19, 13, 15, 12, 13, 11, 23, 25, 50, 71, 92],
              backgroundColor:'#d62828',
              borderRadius:5
            },
          ],
        }}
      />
    </div>
  )
}

export default BarChart