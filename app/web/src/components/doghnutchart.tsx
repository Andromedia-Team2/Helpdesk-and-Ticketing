import React from 'react'
import { Doughnut, defaults } from 'react-chartjs-2'

export default (x) => {
  const idata = x.data;
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
            data: idata,
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

