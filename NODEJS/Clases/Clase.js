/**
 * Definimos una especie de plantillas para objetos JavaScript
 * En javaScript una clase hereda propiedades del mismo objeto  prototipo,
 * 
 * El Objeto prototypo es la caracteristica central de una clase.
 *   
 *  
 */


//Esto es un constructor que inicializa nuevos objtos
function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype.includes = function (x) {
    return this.from <= x && x <= this.to;
};

let obj = new Range(12, 58);
console.log(Range.prototype);

for (let itera in obj) {
    console.log(itera);
}

Range.prototype = {
    includes: function (x) {
        return this.from <= x && x <= this.to
    },
    //Funcion generadora
    [Symbol.iterator]: function* () {
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    },
    toString: function () {
        return `Rango desde: ${this.from} ...  Hasta: ${this.to}`;
    }
}

console.log(Range.prototype);

obj = new Range(12, 58);

console.log(obj.includes(11));
console.log(obj.includes(12));

console.log([...obj]);


for (let itera in obj) {
    console.log(itera);
}


Range.prototype.var1 = 3;

console.log(obj.var1);


class RangeActual {

    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    includes(x) {
        return this.from <= x && x <= this.to;
    }
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    }
    toString() {
        return `Rango desde: ${this.from} ...  Hasta: ${this.to}`;
    }
}

let obj2 = new RangeActual();

console.log(RangeActual.prototype);


class Span extends RangeActual {
    constructor(start, length) {
        if (length >= 0) {
            super(start, start + length)
        }
        else {
            super(start + length, start);
        }
    }
}

let span = new Span(1, 10);
console.log(span.toString());


//Funcion como expresion
let square = x => {
    return x * x;
}
let SquereInClass = class {
    constructor(x) {
        this.area = x * x;
    }
}
console.log(new SquereInClass(4).area);



/**
 * Valores staticos
 */

class Cuadrado {

    //Variables privadas
    #propiedadPrivada = 0;
    static texto = 'Tonces Que pai';
    static metodoStatico(x) {
        return x * x;
    }
    metodoInterface() {
        throw new Error('Metodo Abstracto')
    }
}

class OtroCuadrado extends Cuadrado {
    metodoInterface() {
        console.log('Implementeme')
    }
}

console.log(Cuadrado.metodoStatico(123));

console.log(Cuadrado.texto);