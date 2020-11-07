const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const agendaSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  celular: {
    type: String,
    required: true,
  },
  dataNascimento: {
    type: Date,
    required: false,
  },
  fotoDePerfil: {
    type: String,
    required: false,
  },
});

const agendaCollection = mongoose.model('contato', agendaSchema)
module.exports = agendaCollection