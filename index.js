const call = require('./src/call')

console.log(call.sync('Paho'))

call.withCallback('Paho Alapizco', call.sync)

call.withPromise('Pahola C. Alapizco')
  .then( nombre => console.log(nombre) )