const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  email: String
})

module.exports = mongoose.model('User', UserSchema)

/**
 * Definição do schema User para a coleção de dados.
 */