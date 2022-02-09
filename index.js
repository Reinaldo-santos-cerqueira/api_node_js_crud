//Config inicial
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//forma de ler JSON / middlwares
const Person = require('./models/person');


app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json());

//rota inicial

app.get('/',(req,res)=>{
    //mostrar req = requisicao
    res.json({message: "Tamo aqui porra"});

})

// link mongodb+srv://adminReinaldo:<password>@apiresp.03e6e.mongodb.net/escola_na_mao?retryWrites=true&w=majority


//porta para o express ter acesso ao software

mongoose.connect('mongodb+srv://adminReinaldo:k5pizQYE15oT1S12@apiresp.03e6e.mongodb.net/escola_na_mao?retryWrites=true&w=majority')
.then(()=>{
    console.log("Conectado ao banco de dados MongoDB");
    app.listen(300)
}).catch((err) => {
    console.log(err);
}) 