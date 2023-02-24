const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors')


app.use(express.json());
app.use(cors())

app.get("/", async (req, res) => {
    res.send("Página inicial - Celke");
});

app.get("/teste", async (req, res) => {
    res.send("Teste");
});

app.get("/produtos", async (req, res) => {
    execSQLQuery('SELECT * FROM produtos', res);
});

app.post("/cadastrar", async (req, res) => {
    //console.log(req.body);

    await Produtos.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
        });
    });

    //res.send("Página cadastrar");
});

function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
      host     : 'localhost',
      // port     : XXX,
      user     : 'sistema_01',
      password : 'alpha123',
      database : 'sistema_orcamento'
    });

    connection.query(sqlQry, (error, results, fields) => {
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
}


app.listen(3030, () => {
    console.log("Servidor iniciado na porta 3030: http://localhost:3030");
});