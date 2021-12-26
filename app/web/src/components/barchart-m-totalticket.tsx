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
              label: 'Status Ticket',
              data: [1, 4, 2, 3, 1, 2, 2, 1, 3, 4, 1, 2],
              backgroundColor:'#003049',
              borderRadius:5
            },
          ],
        }}
      />
    </div>
  )
}

export default BarChart