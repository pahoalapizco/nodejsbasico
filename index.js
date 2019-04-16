const call = require('./src/call')

call.greet('Paola')


async function callWithPromise () {
 const fullName = await call.withPromise('Paho', 'Alapizco')
 console.log(fullName)
}

callWithPromise()