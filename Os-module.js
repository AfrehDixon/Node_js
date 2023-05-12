const os = require('os')
const homedir = os.homedir()

console.log(homedir)

// info about a curret user

const user = os.userInfo()

const uptime = os.uptime()

// console.log(user)
// console.log(uptime)

const archi = os.arch()
const currentOs = {
        name : os.type(),
        release : os.release() ,
        totalmem : os.totalmem(),
        freemem : os.freemem()

}
console.log(currentOs)
console.log(archi)