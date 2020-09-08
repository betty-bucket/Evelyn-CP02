getData()
async function getData () {
  const response = await fetch('censusDataClean.csv')
  const data = await response.text()
  console.log(data)

  const rows = data.split('\n').slice(1)
  rows.forEach(elt => {
    const row = elt.split(',')
    const id = row[0]
    const gender = row[3]
    const region = row[4]
    const ageGroup = row[5]
    console.log('id: ', id, 'gender: ', gender, 'region: ', region, 'ageGroup: ', ageGroup)
  })
}
