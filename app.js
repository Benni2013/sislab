var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./config/dbconfig');
const { User, PeminjamanRuangan } = require('./models/association');
const registerRouter = require('./routes/register');
const disposisiRoutes = require('./routes/mahasiswa/kelola/editSurat');
const server = require('./routes/index')
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use('/', server.changePass);
app.use('/', server.editprofil);
app.use('/', server.lihatprofil);

app.use('/login', server.login)
app.use('/register', server.register);
// formulir mahasiswa
app.use('/mahasiswa', server.LDF);
app.use('/mahasiswa', server.FTA);
app.use('/mahasiswa', server.FPR);
app.use('/mahasiswa', disposisiRoutes); // Prefix your routes

// disposisi mahasiswa
app.use('/mahasiswa', server.LDD);
app.use('/mahasiswa', server.editDispo);
app.use('/mahasiswa', server.addDispo);
// kelola mahasiswa
app.use('/mahasiswa', server.LDK);
app.use('/mahasiswa', server.showSrt);
app.use('/mahasiswa', server.editSurat);
app.use('/mahasiswa', server.addSurat);

app.use('/', server.login);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500);
  res.render('error', { message: err.message });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



db.sync({ force: false })
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((err) => {
    console.error('Error synchronizing the database:', err);
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
