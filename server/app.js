const express = require('express');
const app = express();

//Homepage
app.get('/', function (req, res) {
res.sendFile('index.html', {root: './client/views' })
})

//Forget password page
app.get('/forgotPassword', function (req, res) {
    res.sendFile('forgotPassword.html', {root: './client/views' })
    })

//Login Page
app.get('/login', function (req, res) {
    res.sendFile('login.html', {root: './client/views' })
})

//Sign Up Page
app.get('/signUp', function (req, res) {
    res.sendFile('signUp.html', {root: './client/views' })
})

//Feedback Page
app.get('/feedback', function (req, res) {
    res.sendFile('feedback.html', {root: './client/views' })
})
app.listen(1337, (
    
) => console.log('Marist Chatter listening on port 1337!'));

app.use(express.static('client/public'));
