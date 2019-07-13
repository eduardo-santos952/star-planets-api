const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const router = express.Router();

//conexao com banco de dados
mongoose.connect('mongodb://eduardo-jesus:123@planetsdb-shard-00-00-4nhwe.gcp.mongodb.net:27017,planetsdb-shard-00-01-4nhwe.gcp.mongodb.net:27017,planetsdb-shard-00-02-4nhwe.gcp.mongodb.net:27017/test?ssl=true&replicaSet=PlanetsDB-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

//Trecho Paser: o codigo abaixo cuida de realizar o parser do json retornado após o processamento
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//Carregando modelo "Planet"
const Planet = require('./models/planet');

//Carregar rota main (GET)
const indexRoute = require('./routes/index-route');

//Carregar CRUD planetas
const planetsRoutes = require('./routes/planets-route');
app.use('/', indexRoute);
app.use('/planets', planetsRoutes);


module.exports = app;