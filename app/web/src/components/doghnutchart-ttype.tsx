import React from 'react'
import { Doughnut, defaults } from 'react-chartjs-2'

const LineChart = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: [
            'Technical Support',
            'Administration Request',
          ],
          datasets: [{
            label: 'Ticket By Type',
            data: [15, 9],
            backgroundColor: [
              'rgb(239, 68, 68)',
              'rgb(234, 179, 8)',
            ],
            hoverOffset: 4
          }]
        }}
      />
    </div>
  )
}

export default LineChart