import React, {useState} from 'react'

import { Bar } from 'react-chartjs-2';
import "./CumulativeScore.css"

const monthYears = [];
var scoreData = {}
var users = [];
var finalValues = [0,0,0,0,0,0,0,0,0,0,0,0]

class CumulativeScore extends React.Component {
    async componentDidMount() {
        const todaysDate = new Date();
        const todaysMonth = todaysDate.getMonth() + 1;
        const todaysYear = todaysDate.getFullYear()
        var month = todaysMonth;
        var year = todaysYear;
        var x;
        var y;
        for(x = 11; x >= 0; x--) {
            monthYears[x] = year + "-" + month;
            month--;
            if(month == 0) {
                year--;
                month = 12
            }
        }
        try {
            const response = await fetch("http://localhost:5000/users") 
            const jsonData = await response.json()
            users = jsonData.Items
            scoreData = users;
        } catch(err) {
            console.error(err.message)
        }
        for(x = 0; x < 12; x++) {
            for(y = 0; y < scoreData.length; y++) {
                if(scoreData[y].date_added.substring(0,6) == monthYears[x]) {
                    finalValues[x]+=parseInt(scoreData[y].score)
                }
            }
            console.log(finalValues);
        }
        this.setState({});
      }
render() {
    var data = {
        labels: monthYears,
        datasets: [
        {
            data: finalValues,
            label: 'Score',
            borderWidth: 1,
        },
    ],
    };

    const options = {
    scales: {
        yAxes: [
        {
            ticks: {
            beginAtZero: true,
            },
        },
        ],
    },
    };

return (
  <>
    <div className='header'>
      <h1 className='title'>Cumulative Score</h1>
      <div className='links'>
      </div>
    </div>
    <div className="justify-center">
        <div className="CumulativeBar">
            <Bar data={data} options={options}/>
        </div>
    </div>
  </>
)}};

export default CumulativeScore;