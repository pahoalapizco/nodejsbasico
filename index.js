const fs = require('fs')
const ops = require('./src/fileops')
let incrementsValues

fs.readFile('./resources/number.txt',
  'utf-8', (err, text) => {
    if(err) throw err
    const numbers = text.split('\n').map(n=>Number(n))
    incrementsValues = ops.incrementValues(numbers)
    fs.writeFile('./resources/numberNvo.txt',
      incrementsValues.join('\n'), 
      (err, result)=>{
        if(err) throw err
      })
  })