function Empleado(nombre, apellido, cargo, aniosExperiencia) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.cargo = cargo;
    this.fechaIngreso = new Date();
    this.aniosExperiencia = aniosExperiencia;
    this.rangoSalarial = 0;
    this.proyectos = [];
}

Empleado.prototype = {
    toString: function () {
        return `
        Nombre : ${this.nombre}
        Apellido : ${this.apellido}
        Cargo : ${this.cargo}
        Fecha Ingreso : ${this.fechaIngreso}
        this.aniosExperiencia : ${this.aniosExperiencia}`;
    },
    ascensoSalarial: function () {
        if (this.rangoSalarial < 5) {
            this.rangoSalarial += 1;
            return `El empleado ${this.nombre} ${this.apellido} fue ascendido en el rango salarial`;
        }
        return `El empleado ${this.nombre} ${this.apellido} no puede recibir mejora salarial debe ser promovido de cargo`;
    },
    ascensoCargo: function (cargo) {
        this.cargo = cargo;
        this.rangoSalarial = 0;
        return `El nuevo cargo de  ${this.nombre} ${this.apellido} es ${cargo}`;
    },
    agregarProyecto: function (proyecto) {
        const index = this.proyectos.findIndex(item => item === proyecto)
        if (index === -1) {
            this.proyectos.push(proyecto);
            return `Se agrego este proyecto al empleado ${this.nombre} ${this.apellido}`;
        }
        return `Parece que este empleado ${this.nombre} ${this.apellido} ya participo en el proyecto ${proyecto}.`;
    },
    getProyectos: function* () {
        for (let x = 0; x < this.proyectos; x++) {
            yield this.proyectos[x];
        }
    }
};

const objEmpleado = new Empleado('Gustavo Adolfo', 'Cortes Mondragon', 'Desarrollador', 1);

console.log(objEmpleado);
console.log(objEmpleado.ascensoSalarial());
console.log(objEmpleado.agregarProyecto('Proyecto 1'));
console.log(objEmpleado.getProyectos());


class EmpleadoPower {

    constructor(nombre, apellido, cargo, aniosExperiencia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.fechaIngreso = new Date();
        this.aniosExperiencia = aniosExperiencia;
        this.rangoSalarial = 0;
        this.proyectos = [];
    }
    toString() {
        return `
        Nombre : ${this.nombre}
        Apellido : ${this.apellido}
        Cargo : ${this.cargo}
        Fecha Ingreso : ${this.fechaIngreso}
        Anios Experiencia : ${this.aniosExperiencia}`;
    }
    ascensoSalarial() {
        if (this.rangoSalarial < 5) {
            this.rangoSalarial += 1;
            return `El empleado ${this.nombre} ${this.apellido} fue ascendido en el rango salarial`;
        }
        return `El empleado ${this.nombre} ${this.apellido} no puede recibir mejora salarial debe ser promovido de cargo`;
    }
    ascensoCargo(cargo) {
        this.cargo = cargo;
        this.rangoSalarial = 0;
        return `El nuevo cargo de  ${this.nombre} ${this.apellido} es ${cargo}`;
    }
    agregarProyecto(proyecto) {
        const index = this.proyectos.findIndex(item => item === proyecto)
        if (index === -1) {
            this.proyectos.push(proyecto);
            return `Se agrego este proyecto al empleado ${this.nombre} ${this.apellido}`;
        }
        return `Parece que este empleado ${this.nombre} ${this.apellido} ya participo en el proyecto ${proyecto}.`;
    }
    *getProyectos() {
        for (let x = 0; x < this.proyectos; x++) {
            yield this.proyectos[x];
        }
    }
}

class Gerente extends EmpleadoPower {
    constructor(nombre, apellido, cargo, aniosExperiencia, codigoParqueadero) {
        super(nombre, apellido, cargo, aniosExperiencia);
        this.codigoParqueadero = codigoParqueadero;
    }

    toString(){
        return `
        ${super.toString()}
        Codigo Parqueadero : ${this.codigoParqueadero}
        `;
    }

}

const obj2 = new EmpleadoPower('Carlos', 'Esteban', 'Desarrollador', 2);
console.log(obj2.toString());
console.log(obj2.getProyectos());

const ob3 = new Gerente('Carlos Alberto', 'Esteban Cabrales', 'Gerente', 12 ,1);
console.log(ob3.toString());