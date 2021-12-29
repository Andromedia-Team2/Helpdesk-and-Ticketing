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
            'Low',
          ],
          datasets: [{
            label: 'Ticket By Level',
            data: [120, 200, 10],
            backgroundColor: [
              '#ef4444',
              '#eab308',
              '#3b82f6'
            ],
            hoverOffset: 4
          }]
        }}
      />
    </div>
  )
}

export default LineChart