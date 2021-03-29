const express = require('express');

function server() {
    const server = express();

    server.get('/',(req,res)=> res.send('Desde express es mas sencillo'));

    server.get('/close',(req,res)=>{
        res.send('Server Close');
        console.log(' server closing......');
        process.kill(process.pid,'SIGTERM');
    });    
    const app = server.listen(8081,()=> console.log('Server is alive in port 8081'));

    process.on('SIGTERM', () => {
        app.close(() => {
          console.log('Process terminated')
        })
    });




    
    
}


server();



