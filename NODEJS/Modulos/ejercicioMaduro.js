/**
 * Una simulacion de un banco,  de cuentas bancarias.
 */


const bank = [];


const modules = {};

function require(nameModule) {
    return modules[nameModule];
}
modules['internacionaliza'] = (function (){
    const exports = {};
    exports.intl = function (value){
        Intl.NumberFormat("es", { style: "currency", currency: "COP" });
        return modena.format(value);
    };
    return  exports;

});

modules['miBank'] = (function () {

    const exports = {};
    const internacinalizar =modules['internacionaliza']; //require('internacionaliza');
    exports.bank = class Bank {
        static RETAIREMENT = 0;
        static CONSIGN = 0;
        static CLOSE_ACOUNT = 0;

        constructor() {
            this.Cliente = [];
        }

        
        addAmount(clienteId, numberAccount, amount) {
            const index = this.Cliente.findIndex(cliente => cliente.id === clienteId);
            if (index !== -1) {
                const client = this.Cliente[index];
                const consignStatus = client.addAmountToAccount(numberAccount, amount);
                switch (consignStatus) {
                    case -1:
                        console.log(` La cuenta: ${numberAccount} no pertenece al usuario. `);
                        break;
                    case 0:
                        console.log(`Codigo Consignacion: ${exports.bank.idConsign}
                                     Monto consginacion: ${internacinalizar.intl(amount)}
                                     Estado : Aprobado`);
                        break;
                    case 1:
                        console.log(`Monto consginacion: ${internacinalizar.intl(amount)}
                                     Estado : Denegado
                                     Motivo : Cuenta bloqueada`);
                        break;
                }
            }
            else {
                console.log(`El cliente con identificacion ${clienteId} no se encontro en el sistema.`);
            }
        }

        retairmentAmount(clienteId, numberAccount, amount) {
            const index = this.Cliente.findIndex(cliente => cliente.id === clienteId);
            if (index !== -1) {
                const client = this.Cliente[index];
                const consignStatus = client.addAmountToAccount(numberAccount, amount);
                switch (consignStatus) {
                    case -1:
                        console.log(` La cuenta: ${numberAccount} se encuentra bloqueada `);
                        break;
                    case 0:
                        console.log(`Codig Retiro: ${exports.bank.idRetairement}
                                     Monto Retiro: ${amount}
                                     Estado : Aprobado`);
                        break;
                    case 1:
                        console.log(`Monto Retiro: ${amount}
                                     Estado : Denegado
                                     Motivo : Saldo insuficiente`);
                        break;
                }
            }
            else {
                console.log(`El cliente con identificacion ${clienteId} no se encontro en el sistema.`);
            }
        }

        addCliente(cliente) {
            this.Cliente.push(cliente);
        }

        addAcountToCliente(clienteId, amount, isTaxAccount) {
            const index = this.Cliente.findIndex(cliente => cliente.id === clienteId);
            if (index !== -1) {
                const client = this.Cliente[index];
                const account = client.addAcount(amount, isTaxAccount);
                console.log(`Se registro de manera exitosa la cuenta N* ${account.NumeroCuenta}
                            Saldo : ${account.Cuenta.amount}
                            Excente de impuestos :  ${account.Cuenta.isTaxAccount ? 'Si' : 'No'}           
                `);
            }
            else {
                console.log(`El cliente con identificacion ${clienteId} no se encontro en el sistema.`);
            }
        }

        static get idRetairement() {
            return ++Bank.RETAIREMENT;
        }

        static get idCloseAccount() {
            return ++Bank.CLOSE_ACOUNT;
        }
        static get idConsign() {
            return ++Bank.CONSIGN;
        }

        get Clientes() {
            return this.Cliente;
        }
    };

    class Account {
        constructor(amount, isTaxAccount, isBlock) {
            this.amount = amount;
            this.isTaxAccount = isTaxAccount;
            this.DateOpen = new Date();
            this.isBlock = isBlock;
        }
        retairement(retairementAmount) {
            if (this.isBlock)
                return -1;
            if (this.amount < retairementAmount) {
                this.amount -= retairementAmount;
                return 0;
            }
            return 1;
        }
        consign(amount) {
            if (this.isBlock)
                return -1;
            this.amount += amount;
            return 0;
        }
    };

    exports.cliente = class Cliente {
        static ID_CLIENTE = 0;
        constructor(firstName, lastName) {
            this.id = ++Cliente.ID_CLIENTE;
            this.firstName = firstName;
            this.lastName = lastName;
            this.dateSubscribe = new Date();
            this.accounts = new Map();
        }

        addAcount(amount, isTaxAccount) {
            const acount = new Account(amount, isTaxAccount);
            const numberAccount = Math.floor(Math.random() * (2000 - 1000)) + 1000;
            while (this.accounts.has(numberAccount)) {
                numberAccount = Math.floor(Math.random() * (2000 - 1000)) + 1000;
            }
            this.accounts.set(numberAccount, acount);
            return { NumeroCuenta: numberAccount, Cuenta: acount };
        }

        closeAccount(numberAccount) {
            if (this.accounts.has(numberAccount)) {
                const account = this.accounts.get(numberAccount);
                if (account.amount > 0) {
                    console.log(`Comprobante de retiro`);

                }
                this.accounts.delete(numberAccount);
            }
        }

        addAmountToAccount(numberAccount, amount) {
            if (this.accounts.has(numberAccount)) {
                const account = this.accounts.get(numberAccount);
                return account.consign(amount);
            }
            throw Exception('Este cliente no contiene ese numero de cuenta al que quiere depositar');
        }

        retairAmountToAccount() {
            if (this.accounts.has(numberAccount)) {
                const account = this.accounts.get(numberAccount);
                return account.retairement(amount);
            }
            throw Exception('Este cliente no contiene el numero de cuenta al que quiere retirar');
        }

    }
    return exports;
}());


const miBankClass = require('miBank');

const miObjBank = new miBankClass.bank();

const listaCliente = [
    new miBankClass.cliente('Gustavo Adolfo', 'Cortes mondragon'),
    new miBankClass.cliente('Adolfo', 'Mondragon'),
    new miBankClass.cliente('Fernando', 'Alberto'),
    new miBankClass.cliente('Alfredo', 'Gomez')
];

for (let cliente of listaCliente) {
    miObjBank.addCliente(cliente);
}

miObjBank.addAcountToCliente(1, 340000, false);
miObjBank.addAcountToCliente(2, 30000, false);
miObjBank.addAcountToCliente(3, 20000, false);
miObjBank.addAcountToCliente(4, 40000, false);


for (let cliente of miObjBank.Clientes) {
    console.log(cliente);
}



//Simular movimientos diarios de un banco

console.log('###################################################################');
const operaciones = setInterval(() => {
    const indexCliente = Math.floor(Math.random() * miObjBank.Clientes.length);
    const retiraoConsigna = Math.floor(Math.random() * 2);
    const cliente = miObjBank.Clientes[indexCliente];
    const cuentas = [...cliente.accounts.keys()];
    const indexCuenta = Math.floor(Math.random() * (cuentas.length));
    switch (retiraoConsigna) {
        case 1:
            if (cliente.accounts.size > 0) {
                miObjBank.addAmount(miObjBank.Clientes[indexCliente].id, cuentas[indexCuenta], Math.floor(Math.random() * (300000 - 10000)) + 10000);
            }
            break;
        default:
            miObjBank.retairmentAmount(miObjBank.Clientes[indexCliente].id, cuentas[indexCuenta], Math.floor(Math.random() * (300000 - 10000)) + 10000);
            break;
    }
}, 1000);

setTimeout(()=>{
    clearInterval( operaciones );
    console.log('##########Cuentas despues de un dia de movimientos ###############');
    for (let cliente of miObjBank.Clientes) {
        console.log(cliente);
    }
},1000);




//console.log(miObjBank);

