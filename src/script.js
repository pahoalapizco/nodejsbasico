const args = require('yargs').argv;
const { base } = args;

function multiplesTable(base) {
    console.log(`\nTabla de múltiplos de ${base}`)
    for(let i = 1; i <= 10; i++) {
        console.log(`${base}x${i}=${base*i}`);
    }
}

if (base && !isNaN(base)) {
    multiplesTable(base);
} else {
    // Opcion #1
    /********** */
    throw new Error("Argument 'base' not defined");

    // Opcion #2
    /********** */
    /* console.error("Argument 'base' not defined");
    return; */
}

module.exports = {
    table: multiplesTable
}