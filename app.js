var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var inicioRouter = require('./routes/inicio.js'); //inicio.js
var sobremiRouter = require('./routes/sobremi.js'); //sobremi.js
var mispinturasRouter = require('./routes/mispinturas.js'); //mispinturas.js
var contactoRouter = require('./routes/contacto.js'); //contacto


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inicio', inicioRouter);
app.use('/sobremi', sobremiRouter);
app.use('/mispinturas', mispinturasRouter);
app.use('/contacto', contactoRouter);

app.get('/inicio', function (req, res){
  res.send ('esta es la página de inicio')
})
app.get('/sobremi', function (req, res){
  res.send ('esta es la página de sobremi')
})
app.get('/mispinturas', function (req, res){
  res.send ('esta es la página de mispinturas')
})
app.get('/contacto', function (req, res){
  res.send ('esta es la página de contacto')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
