//=========================
// PUERTO
//=========================

process.env.PORT = process.env.PORT || 3000;

//=========================
// ENTORNO
//=========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=========================
// VENCIMIENTO DEL TOKEN
//=========================
//60 seguntos
//60 minutos
//24 horas
//30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//=========================
// SEED DE AUTENTICACION
//=========================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarollo';



//=========================
// PUERTO
//=========================

let urlDB

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';

} else {
    urlDB = process.env.MONGO_URI;
}


/* const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pelsmi11:<faztpassword>@cluster0.tno1u.mongodb.net/<cafe>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("cafe");
  // perform actions on the collection object
  client.close();
}); */


process.env.URLDB = urlDB;