let socket = io();

// let socket2  = io.connect('SERVER:PORT',{OPCIONES});

socket.on('mensajes', (data) => {
  console.log(data);
  publicarMensaje(data);
});

function publicarMensaje(data) {
  let html = data.map((mensaje, index) => {
    return (`<div class="mensaje">
              <strong> ${mensaje.alias} </strong> dice: 
              <p>${mensaje.texto}</p>
            </div>`);
  }).join(' ');
  document.getElementById('mensajes').innerHTML = html;
}

function agregarMensaje(e) {
  let mensaje = {
    alias: document.getElementById('alias').value,
    texto: document.getElementById('texto').value
  };

  document.getElementById('alias').style.display = 'none';
  socket.emit('agregar-mensaje', mensaje);
}