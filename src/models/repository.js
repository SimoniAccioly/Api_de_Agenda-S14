const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost/reprograma'

const connect = () => {
    mongoose.connect(DB_URL, {useNewUrlParser: true})
    const connection = mongoose.connection

    connection.on('error', () => console.error('Erro ao conectar'))
    connection.once('open', () => console.error('Conectamos ao Mongo'))
}

module.exports = { connect }

//arquivo repository cria a conexãocom o banco de dados com o mongo db