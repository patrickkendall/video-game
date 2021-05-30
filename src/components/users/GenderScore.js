import React, {useState} from 'react'

import { Pie } from 'react-chartjs-2';
import "./GenderScore.css"

var users;
var scoreData;
var genderData = [0, 0];

function addScore() {
  var x;
  for(x = 0; x < users.length; x++) {
    if(users[x].gender === "Male") {
      genderData[0]+=parseInt(users[x].score)
      console.log(genderData[0])
    } else {
      genderData[1]+=parseInt(users[x].score)
    }
  }
}

class GenderScore extends React.Component {

    async componentDidMount() {
      try {
          const response = await fetch("http://localhost:5000/users") 
          const jsonData = await response.json()
          users = jsonData.Items
          scoreData = users;
      } catch(err) {
          console.error(err.message)
      }
      addScore();
      this.setState({});
      genderData = []
    }

    render() {
        const config = {
            type: 'doughnut',
            data: data,
          };

        var data = {
            labels: [
              'Red',
              'Blue',
            ],
            datasets: [{
              label: 'Gender Score Breakdown',
              data: genderData,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
              ],
              hoverOffset: 4
            }]
          };

    return (
    <>
        <div className="justify-center">
          <div className="chart-container">
            <h1>Score by Gender</h1>
            <Pie data={data} config={config} />
          </div>
        </div>
    </>
)}};

export default GenderScore;