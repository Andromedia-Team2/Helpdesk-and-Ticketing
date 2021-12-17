import React from 'react'
import { Doughnut, defaults } from 'react-chartjs-2'

const LineChart = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: [
            'High',
            'Medium',
            'Low'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(239, 68, 68)',
              'rgb(234, 179, 8)',
              'rgb(59, 130, 246)'
            ],
            hoverOffset: 4
          }]
        }}
      />
    </div>
  )
}

export default LineChart