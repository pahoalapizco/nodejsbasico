const cp = require('child_process')

const execCommand = command => {
  cp.exec(command, (err, stdout, stderr) => {
    if(err){
      console.log(`Error: ${err}`)
      return
    }

    if(stdout) console.log(`Standar out: ${stdout}`)
    if(stderr) console.log(`Standar err: ${stderr}`)
  })
}

//execCommand('ls')
execCommand('node ./src/script --base=10')