import React from 'react'
import { Doughnut, defaults } from 'react-chartjs-2'

const LineChart = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: [
            '5 Stars',
            '4 Stars',
            '3 Stars',
            '2 Stars',
            '1 Stars',
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [120, 200, 50, 20, 10],
            backgroundColor: [
              '#5F0F40',
              '#9A031E',
              '#FB8B24',
              '#E36414',
              '#0F4C5C'
            ],
            hoverOffset: 4
          }]
        }}
      />
    </div>
  )
}

export default LineChart