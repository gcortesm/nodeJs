//Ahora la consola de node es interactiva, esto esta deisponible desde node 7.


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


//debemos usar question para esperar la interaccion del cliente
readline.question(`Cuenteme algo?`, historia => {
    console.log(`Escribe un libro con esto como idea principal ${historia}!`)
    readline.close()
})

//Para manejar datos sencibles puede usar  inquirer.
