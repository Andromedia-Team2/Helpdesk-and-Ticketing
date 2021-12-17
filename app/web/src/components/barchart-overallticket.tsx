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
                label: 'Overall Tikets',
              data: [12, 19, 13, 15, 12, 13, 11, 23, 25, 50, 71, 92],
              backgroundColor:'#ED5564',
              borderRadius:5
            },
          ],
        }}
      />
    </div>
  )
}

export default BarChart