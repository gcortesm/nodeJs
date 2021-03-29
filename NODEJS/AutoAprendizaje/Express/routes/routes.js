const { getAllUsers, getUserById, createUser, updateUserById, deleteById } = require('../controller/userController');

const createRoutes = (miServer) => {
    //como podemos agregar o definir las rutas que usa nuestra app.
    //server.verbohttp(path,handler)
    //Estes es el metodo get
    miServer.get('/users', getAllUsers);
    miServer.get('/users/:id', getUserById);
    miServer.post('/users', createUser);
    miServer.put('/users/updte/:id', updateUserById);
    miServer.patch('/users/updte/:id',);
    miServer.delete('/users/:id', deleteById);
    miServer.get('/',(req,res)=>{
        res.render('index',{ title: 'Usando ', message: 'Un render  con Pug'});
    });
};

module.exports = {
    createRoutes
}
