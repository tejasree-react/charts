import React from 'react';
import {Bar} from 'react-chartjs-2'
//import {Chart,LinearScale,CategoryScale,BarElement, Legend, Title, Tooltip} from 'chart.js'
import './App.css'
import chart from 'chart.js/auto';

//Chart.register(
  //LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip
//)

const labels=[
  'Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'
]

const options={
  plugins:{
  
      legend:{
        position:'top'

      },
      title:{
        display:true,
      text:'Expense Tracker',
    }
  }
}

const data={
  labels,
  datasets:[
    {
      label:'2022 Expense',
      data:[12000,2500,18000,15000,12500,11000,9500,8000,8500,10000,13000,14000],
      backgroundColor:'yellow',
    },
    {
      label:'2023 Expense',
      data:[8000,25500,9500,8000,12000,13000,12500,14000,11500,8900,6500,7800],
      backgroundColor:'green'
    }
  ]
}
function Barchart() {
  return (
    <div style={{height:'400px',width:'800px',margin:'auto'}}>
      <Bar options={options} data={data}/>
    </div>
  );
}

export default Barchart;