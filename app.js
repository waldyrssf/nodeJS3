//Requiring module
const express = require("express");
const mysql = require("mysql2");
const connect = require("./conexao.js");

//Creating express object
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Handling DELETE request
app.delete("/clientes/:id", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  return connect.execSQLQuery(
    "delete from clientes where id=" + req.params.id,
    res
  );
});

//Handling POST request
app.post("/clientes/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  return connect.execSQLQuery(
    "insert into clientes (nome) value('" + req.body.nome + "')",
    res
  );
});

//Handling PUT request
app.put("/clientes/:id", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  return connect.execSQLQuery(
    "update clientes set nome='" +
      req.body.nome +
      "' where id=" +
      req.params.id,
    res
  );
});

//Handling GET request

app.get("/clientes", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  return connect.execSQLQuery("select * from clientes", res);
});

app.get("/", (req, res) => {
  res.send("This simples Node App (API) is running on this server");
  res.end();
});

app.get("/return", (req, res) => {
  res.send(
    "This is a new return on this server using the GET request. " +
      " It can be accessed by /return"
  );
  res.end();
});

app.get("/clientes/:id", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  return connect.execSQLQuery(
    "select * from clientes where id=" + req.params.id,
    res
  );
});

//Port Number
const PORT = process.env.PORT || 5000;

//Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
