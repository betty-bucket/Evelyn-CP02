const xlables = []
const ylables = []

chartIt()

async function chartIt () {
  await getData()
  const ctx = document.getElementById('myChart')
  const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Female', 'Male', 'Gender non Binary', 'Prefer to self identify' ],
      datasets: [{
        data: [10, 5, 2, 1],
        label: ['f'],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ]
      }]

    // These labels appear in the legend and in the tooltips when hovering different arcs
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
}

async function getData () {
  const response = await fetch('censusDataClean.csv')
  const data = await response.text()
  console.log(data)

  const table = data.split('\n').slice(1)
  table.forEach(row => {
    const cols = row.split(',')
    const id = cols[0]
    const gender = cols[3]
    xlables.push(gender)
    const region = cols[4]
    ylables.push(region)
    const ageGroup = cols[5]
    console.log('id: ', id, 'gender: ', gender, 'region: ', region, 'ageGroup: ', ageGroup)
  })
}
