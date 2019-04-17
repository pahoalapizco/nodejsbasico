const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const q = [
  '¿Cual es tu nombre? ',
  '¿Cual es tu primer apellido? ',
  '¿Que edad tienes? '
]

const askQuestion = (rl, question) => {
  return new Promise((res, rej) => {
    rl.question(question, answer => {
      res(answer)
    })
  })
}

const ask = questions => {
  return new Promise(async resolve => {
    let results = []
    for(let i=0; i < questions.length; i++){
      const result = await askQuestion(rl, questions[i])
      results.push(result)
    }
    rl.close()
    resolve(results)
  })
}

ask(q)
  .then( q => {
    console.log(`Hola ${q[0]} ${q[1]}, tu edad es de ${q[2]} años`)
  })