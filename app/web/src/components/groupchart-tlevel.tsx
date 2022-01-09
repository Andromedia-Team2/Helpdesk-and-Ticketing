import React from 'react'
import { Line, defaults } from 'react-chartjs-2'

const LineChart = (x) => {
  var high = x.data.high;
  var medium = x.data.medium;
  var low = x.data.low;
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
              label: 'Low',
              data: low,
              borderColor: '#D6D4A0',
              // backgroundColor: '#312e8115',
              pointBackgroundColor: '#66717E',
              pointRadius: 5,
              pointHoverRadius: 7,
              borderWidth: 2,
              // tension:0.2
            }, {
              label: 'Medium',
              data: medium,
              borderColor: '#DB995A',
              // backgroundColor: '#ff660015',
              pointBackgroundColor: '#ffffff',
              pointRadius: 5,
              pointHoverRadius: 7,
              borderWidth: 2,
              // tension:0.2
            }, {
              label: 'High',
              data: high,
              borderColor: '#E24E1B',
              // backgroundColor: '#ff660015',
              pointBackgroundColor: '#ffffff',
              pointRadius: 5,
              pointHoverRadius: 7,
              borderWidth: 2,
              // tension:0.2
            },
          ],
        }}
      />
    </div>
  )
}

export default LineChart