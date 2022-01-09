import React from 'react'
import { Bar, defaults } from 'react-chartjs-2'

const BarChart = (x) => {
  var total = x.data;
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
              data: total,
              backgroundColor: '#76c893',
              borderRadius: 5
            },
          ],
        }}
      />
    </div>
  )
}

export default BarChart