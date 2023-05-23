// const connectedUnions = []
const ids = {}

class UF {
  constructor (value) {
    this.value = value
    this.connection = []
  }
  union (p, q) {

  }
  connected (p, q) {
    return this.connection.includes(q.value)
  }
  // find(p) {}
  count () {}
}

const input = [[10], [4, 3], [3, 8], [6, 5], [9, 4], [2, 1], [8, 9], [5, 0], [7, 2], [6, 1], [1, 0], [6, 7]]
for (let i = 0; i < input.length; i++) {}
