getData()
async function getData () {
  const response = await fetch('testData1.csv')
  const data = await response.text()
  console.log(data)

  const rows = data.split('\n').slice(1)
  rows.forEach(row => {
    console.log('row: ', row)
  })
  console.log('rows: ', rows)
}
