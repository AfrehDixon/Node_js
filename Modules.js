const names = require('./FirstModules')
const sayHi = require('./Utils')
const data = require('./alternative')
require('./Mindgrade')

sayHi('susan')
sayHi(names.fname)
sayHi(names.peter)
console.log(data)
