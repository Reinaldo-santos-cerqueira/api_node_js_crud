//Config inicial
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()
//forma de ler JSON / middlwares
const personRouter = require('./routes/person.routes')

app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json());

//rotas da apiresp
app.use('/person',personRouter);


//rota inicial

app.get('/',(req,res)=>{
    //mostrar req = requisicao
    res.json({message: "Tamo aqui porra"});

})

// link mongodb+srv://adminReinaldo:<password>@apiresp.03e6e.mongodb.net/escola_na_mao?retryWrites=true&w=majority

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
//porta para o express ter acesso ao software

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apiresp.03e6e.mongodb.net/escola_na_mao?retryWrites=true&w=majority`)
.then(()=>{
    console.log("Conectado ao banco de dados MongoDB");
    app.listen(3000)
}).catch((err) => {
    console.log(err);
}) 