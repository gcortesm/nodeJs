const concat = require('concat-stream');
const fs = require('fs');

const write  =  concat({ encoding: 'uint8array' },function(data){});

const fileStream = fs.createReadStream('archivolocal.txt');

fileStream.on('data',(data) => {
    console.log(data);
    console.log(write.write(Buffer.from(data,'utf-8')));
    console.log(data.toString());
});


fileStream.on('end', ()=>{
    console.log(write.end());
    console.log(write.body);
} );



