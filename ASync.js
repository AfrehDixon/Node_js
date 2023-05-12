const {readFile, writeFile} = require('fs')
const fs = require('fs')

readFile ('./Content/Subfolder/second.txt' ,'utf8',  (err , result) =>{
    if (err){
        return 'error'
    }
    console.log(result)

})