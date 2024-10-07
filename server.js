const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve arquivos estáticos

// Rota para a página inicial (formulário)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html')); // Caminho para o seu arquivo HTML
});

app.post('/send', (req, res) => {  // ESTA ROTA É /send
    const { name, email, assunto, message } = req.body;

    // Configura o transporte do Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gcc.codigo@gmail.com', // Seu e-mail do Gmail
            pass: 'ytchtemtimthamdg' // Insira aqui a senha de aplicativo gerada
        }
    });

    const mailOptions = {
        from: email,
        to: 'gcc.codigo@gmail.com', // Para onde você quer enviar o e-mail
        subject: assunto,
        text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('E-mail enviado: ' + info.response);
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
