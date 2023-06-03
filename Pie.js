import React from 'react';
import {Pie} from 'react-chartjs-2'
import './App.css'
import chart from 'chart.js/auto';

const labels=[
    'Mon','Tue','Wed','Thu','Fri','Sat','Sun'
  ]
  
  const options={
    plugins:{
    
        legend:{
          position:'top'
  
        },
        title:{
          display:true,
        text:'sales',
      }
    }
  }
  
  const data={
    labels,
    datasets:[
      {
        label:'sales',
        data:[10,25,35,20,5,5,2],
        backgroundColor: [
            'blue','green','yellow','orange','grey','black','white'
          ],
          borderColor: [
        'black'        
      ],
          borderWidth: 1,
        
      }
    ]
  }
  
function Pie1() {
    return (
        <div style={{height:'400px',width:'800px',margin:'auto'}}> 
            <Pie options={options} data={data}/>
        </div>
    );
}

export default Pie1;