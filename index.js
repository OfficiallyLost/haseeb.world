/** @format */

const express = require('express');
const app = express();
const haseebClient = require('./src/Haseeb');
const haseeb = new haseebClient(app);
const path = require('path');
const constants = require('./src/Constants');

process.on('unhandledRejection', (error) => haseeb.error(error));
app.use(express.static('js'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('home', { constants }));

app.get('/quotes/:id', (req, res) => {
    const quote = constants.quotes[req.params.id]
    const keys = Object.keys(constants.quotes);
    let key;
    console.log(keys)



    console.log('find ' + keys.find((key) => req.params.id))

    if (keys.includes(req.params.id)) {
        console.log('yes' + req.params.id)
        key = req.params.id;
    } else {
        console.log('no')
    }

    res.render('quotes', { quote, constants, key })
});

app.get('/quotes', (req, res) => {
    res.render('quotes', { constants });
})

app.get('/youtube/', (req, res) => res.redirect('https://youtube.com/@HaseebMF'));

haseeb.on();
