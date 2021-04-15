const Clouddant = require('@cloudant/cloudant');

const cloudant = new Clouddant({
  url: 'https://b28a273b-5d6e-4839-8e19-e4846ae62e27-bluemix.cloudantnosqldb.appdomain.cloud',
  plugins: {
    iamauth: {
      iamApiKey: '6_zJlWmhZFBmHC-pR1I0e5HiEbfgfVF3LUgpvLbrC7B1'
    }
  }
});

const db = cloudant.db.use('semillero');

cloudant.db.list((err, body) => {
  body.forEach((db) => {
    console.log(db);
  });
});

const createDocument = function (data, callback) {
  console.log('Creando documento...!!');
  db.insert(data, (err, data) => {
    callback(err, data);
  });
};

let record = {
  _id: "doc_17",
  firstName: "Desde proyecto NodeJs",
  lastName: "Garcia",
  age: 33,
  location: "Montanita - Caqueta"
};


const readDocument = function (id, callback) {
  console.log('Leer documento');
  db.get(id, (err, data) => {
    record._rev = data._rev;
    console.log(callback(err, data));
  });
}

const updateDocument = function (reg, callback) {
  console.log('Actualizando documento...');
  reg.location = 'Medellin - Antioquia';
  db.insert(reg, function (err, data) {
    record._rev = data.rev;
    console.log(callback(err, data));
  });
};

const deleteDocument = function (id, rev, callback) {
  console.log('Eliminando documento');
  db.destroy(id, rev, (err, data) => {
    console.log(callback(err, data));
  });
};

function myCallback(err, data) {
  if (err)
    return err;
  return data;
}


//usando las promesas que ofrece el DB
let record2 = {
  _id: "doc_18",
  firstName: "Desde proyecto NodeJs promise",
  lastName: "Garcia",
  age: 33,
  location: "Montanita - Caqueta"
};


const createWithPromise = function (data) {
  console.log('Creando documento promise...!!');
  db.insert(data).then(data => console.log(data))
    .catch((err) => console.log(console.error(err)))
};

const readDocumentWithPromise = function (id) {
  console.log('Leer documento promise');
  db.get(id).then(data => {
    console.log(data);
    record2._rev = data._rev;
  })
    .catch(err => console.error(err));
}

const updateDocumentWithPromise = function (reg) {
  console.log('Actualizando documento promise ...');
  reg.location = 'Casanare - Meta';
  db.insert(reg).then(data => {
    record2._rev = data.rev;
    console.log(record2);
    console.log(data);
  }).catch(err => console.error(err));
};







const deleteDocumentWithPromise = function (id, rev) {
  console.log('Eliminando documento promise');
  db.destroy(id, rev).then(data => console.log(data)).catch(err => console.error(err));
  
};




function creandoConCallBacks(){
  createDocument(record, myCallback);
  setTimeout(() => readDocument(record._id, myCallback), 4000);
  setTimeout(() => {
    updateDocument(record, myCallback);
  }, 8000);
  setTimeout(() => {
    deleteDocument(record._id, record._rev, myCallback);
  }, 12000);
};

creandoConCallBacks();


setTimeout(() => {
  console.log('Empiezan las promesas.....!!!!')
  createWithPromise(record2);
  setTimeout(() => {
    readDocumentWithPromise(record2._id);
  }, 2000);
  setTimeout(() => {
    updateDocumentWithPromise(record2);
  }, 4000);
  //setTimeout(() => {
    //deleteDocumentWithPromise(record2._id, record2._rev);
  //}, 6000);
}, 14000);