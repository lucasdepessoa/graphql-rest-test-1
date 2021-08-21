const User = require('./User')

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id)
  },
  Mutation: {
    createUser: (_, { name, email }) => User.create({ name, email })
  }
}

/** Define os 'controllers' para o graphQL, aqui está definido o comportamento
 * quando cada roda for utiilzada e o que ele deve executar quando solicitada.
 */