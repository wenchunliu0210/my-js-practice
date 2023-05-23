/*================================ 01: Why Declare First? ================================*/
setTimeout(() => {
  data = []  // window property
  updateData()
  console.log('Data 1000: ', data)
}, 1000)

const updateData = () => {
  data.push({
    name: 'Jojo'
  })
}

setTimeout(() => {
  data = {}
  console.log('Data 1002: ', data)
}, 1002)

/*==================== 02: Diffs Between Variable & Property ================================*/
