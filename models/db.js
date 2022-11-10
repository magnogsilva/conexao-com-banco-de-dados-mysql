const Sequelize = require('sequelize');

const sequelize = new Sequelize('teste', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log('Conexão realizada com sucesso!');
}).catch(function(){
    console.log('ERRO: conexão não realizada com sucesso!');
});

module.exports = sequelize;