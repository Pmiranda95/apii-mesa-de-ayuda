const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const pedidos = require("./routes/routesPedido")
const mongoose =  require('mongoose');

//Swagger documents
const swaggerOption = {
    swaggerDefinition:{
        info:{
            title:'Api web',
            description:'Customer Api information',
            contact:{
                name:'Amazing developer'
            },
            server:["http://localhost:3000"]
        }
    },
    apis:["./routes/routesPedido.js"]
}


//DB Config Connection String File
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db,{useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


const swaggerDocs = swaggerJsDoc(swaggerOption);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//routes
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs));  
app.use("/V1",pedidos)


app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

