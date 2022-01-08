import React from 'react'
import { Doughnut, defaults } from 'react-chartjs-2'

const LineChart = (x) => {
  const labelName = x.data.labels;
  const iData = x.data.iData;
  const dataColor = x.data.color;
  return (
    <div>
      <Doughnut
        data={{
          labels: labelName,
          datasets: [{
            label: 'Ticket By Type',
            data: iData,
            backgroundColor: dataColor,
            hoverOffset: 4
          }]
        }}
      />
    </div>
  )
}

export default LineChart