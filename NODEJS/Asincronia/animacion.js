
console.log('Mensaje 1');
setTimeout(()=> console.log('mensaje settiem'),0);
console.log('Mensaje 2');
console.log('Mensaje 3');
for(let i  = 0 ;i<10 ; i++){
    console.log(i);
}
main();
function main(){
    console.log('Otro desde una funcion');
    setTimeout(()=>{console.log('Con timer mi rey')},10);
}

console.log('Mensaje 22');
console.log('Mensaje 33');
main();