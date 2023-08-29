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

app.get('/', (req, res) => {
   res.render('home', { constants });
});

haseeb.on();
