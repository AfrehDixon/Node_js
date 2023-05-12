const {readFileSync, writeFileSync} = require('fs')
const fs = require('fs')

const first = readFileSync('./content/Subfolder/firsst.txt' , 'utf8')
const second = readFileSync('./content/Subfolder/second.txt' , 'utf8')

console.log(first , second)

writeFileSync('./content/result.txt' , `Hello this is the resukt :${first} and the ${second}`,{
    flag: 'a'
})