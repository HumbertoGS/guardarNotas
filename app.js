const express = require('express'),
    path = require('path'),
    bodyP = require('body-parser'),
    morgan = require('morgan');

const app = express();

app.set('Port', 8080);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'assets/Css')));

app.use(morgan('dev'));
app.use(bodyP.json());
app.use(bodyP.urlencoded({extended:false}));

require(path.join(__dirname,'routes/index'))(app);

app.listen(app.get('Port'),()=>{
    console.log(`Server: ${app.get('Port')}`);
});