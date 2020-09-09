var noderequire = require('node-require')

var Chart = require('dist/chart.js')

getData()
async function getData () {
  const response = await fetch('censusDataClean.csv')
  const data = await response.text()
  console.log(data)

  const table = data.split('\n').slice(1)
  table.forEach(row => {
    const cols = row.split(',')
    const id = cols[0]
    const gender = cols[3]
    const region = cols[4]
    const ageGroup = cols[5]
    console.log('id: ', id, 'gender: ', gender, 'region: ', region, 'ageGroup: ', ageGroup)
  })
}

define(function (require, exports, module) {
  var ctx = document.getElementById('myChart')
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })

  myChart()
  // Put traditional CommonJS module content here
})
