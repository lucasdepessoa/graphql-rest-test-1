const { GraphQLServer } = require('graphql-yoga')
const path = require('path')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')

/**
 * Aqui é configurada uma conexão local com mongodb instalado localmente
 * criando a coleção de dados: graphqlnode.
*/
mongoose.connect("mongodb://localhost:27017/graphqlnode",{
  useNewUrlParser: true
})

/**
 * Abaixo é configurado o servidor baseado em express que tem mais funcionalidades por padrão do grahpql
 * esse é o graqphql-yoga, está sendo passado o schema de configuração e os resolvers.
 */
const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers 
})

/**
 * Iniciando  o servidor, que por padrão sobe na porta 4000.
*/
server.start()
