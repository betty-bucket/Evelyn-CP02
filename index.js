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