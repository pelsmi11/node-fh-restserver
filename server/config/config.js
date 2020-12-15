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

//=========================
// PUERTO
//=========================

process.env.CLIENT_ID = process.env.CLIENT_ID || '2689648786-99m1c78lju0a5659jlb0drqo62pjpsab.apps.googleusercontent.com';


process.env.URLDB = urlDB;