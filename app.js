const express = require("express");
const app = express();
const handlebars = require("express-handlebars").engine;

// toda vez que vc mudar requisições fecha com ctrc+C e roda
app.engine("handlebars", handlebars({defaultLayout:"main"}));
app.set("view engine","handlebars");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/cadastrar", (req, res) => {
    res.render("cadastrar");
});

app.get("/consultar", (req, res) => {
    res.render("consultar");
});

app.listen("8081", ()=>{
    console.log("Servidor ativo!");
});