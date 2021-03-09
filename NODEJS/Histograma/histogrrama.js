
//Conocia el concepto de clases en JS
class DefaultMap extends Map{
    //Tambien conocia lo de constructor que en si es como se debe 
    // crear las propiedades de los objetos
    constructor(defaultValue){
        super();
        this.defaultValue = defaultValue;
    }   

    get(key){
        //Supongo que este has es como un contains de Java
        //Esto seria sobreescribir el metodo get de la clase que se extiende
        if(this.has(key)){
            //siempre que se va a llamar un metodo de padre toca con super
            return super.get(key);
        }
        else{
            return this.defaultValue;
        }
    }
}

class Histograma{
    constructor(){
        this.letterCounts = new DefaultMap(0);
        this.totalLetters  = 0;
    }

    add(text){
        //Poco de expresiones regulares
        text=text.replace(/\s/g,"").toUpperCase();
        for(let character of text){
            let count  = this.letterCounts.get(character);
            this.letterCounts.set(character,count+1);
            this.totalLetters++;
        }
    }
    //se sobreescribe el metodo tosrting
    toString(){
        //Los .... los he usado en java , pero creo que aca son diferentes 
        let entries =[...this.letterCounts];
        //Esto lo habia usado en java o concpetos parecidos, con Stream
        
        entries.sort((a,b)=> {
            if(a[1] === b[1]){
                return a[0]<b[0]? -1 : 1;
            }
            return b[1] - a[1];
        });
        for(let entri of entries){
            entri[1] = (entri[1]/this.totalLetters) * 100 ;
        }
        //creo que esto es algo de programacion funcional 
        // no me importa como lo va hacer solo le digo lo que quiero haces
        //tambien los he usado en Java(Stream) y C# (Linq) 
        entries=entries.filter(entri=>entri[1]>=1);
        let lines = entries.map( ([l,n]) => `Letra  ${l} : ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`);
        return lines.join("\n");
    }
}
//Todas las funciones async se convierten en promesas 
//
async function histogramFromStdin(){
    process.stdin.setEncoding("utf-8");
    let probar  = new Histograma();
    for await( let chunk of  process.stdin){
        probar.add(chunk);
    }
    return probar;
}
// cuando una funcion se vuelve async se puede usar la palabra then
// cundo se pasa then , se pueden pasar dos funciones, la de succes y la del cath como parametro
//
histogramFromStdin().then((e) => console.log(e.toString())).catch((e)=>console.log(e));





