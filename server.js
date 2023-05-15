const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// app.use(express.static('src'));

app.use(express.static(path.join(__dirname, 'src')));

app.get('/style.css', function (req, res) {
    res.set('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'src/templates/style.css'));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/home.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/templates/login.html'));
});

app.get('/servicos', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/templates/servicos.html'));
});

app.get('/solicitar_coleta', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/templates/solicitarColeta.html'));
});

app.post('/solicitar_coleta', (req, res) => {
    res.send(`
    <script>
      if (confirm('Formulário enviado com sucesso! Deseja confirmar o envio e retornar à página inicial?')) {
        window.location.href = '/';
      } else {
        history.back(); // Voltar para a página anterior
      }
    </script>
  `);
    });

app.listen(port, function () {
    console.log('Servidor rodando na porta ' + port);
});


