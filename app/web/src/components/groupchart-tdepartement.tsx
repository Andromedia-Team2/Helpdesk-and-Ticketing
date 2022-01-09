import React from 'react'
import { Line, defaults } from 'react-chartjs-2'

const LineChart = (x) => {
  var dataDep = x.data;
  var dataset = Array();
  var mData = {};
  for (let i = 0; i < dataDep.length; i++) {
    mData = {
      label: dataDep[i].labels,
      data: dataDep[i].iData,
      borderColor: dataDep[i].color,
      pointBackgroundColor: '#66717E',
      pointRadius: 5,
      pointHoverRadius: 7,
      borderWidth: 2,
    };
    dataset.push(mData);
  };
  return (
    <div>
      <Line
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
        data={{
          labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
          datasets: dataset,
        }}
      />
    </div>
  )
}

export default LineChart