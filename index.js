const fs = require('fs')
const ops = require('./src/fileops')
let incrementsValues
let saludos

const incremento = () =>{
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
}

const saludar = () => {
  fs.readFile('./resources/name.txt', 'utf-8',
    (err, text) => {
      if(err) throw err
      const names = text.split('\n')
      saludos = ops.callNames(names)
      console.log(saludos)
      fs.writeFile('./resources/saludos.txt', saludos.join('\n'), 
      (err, result) => {
        if(err) throw err
      })
    })
}
