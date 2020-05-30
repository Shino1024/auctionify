const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose')
const socket = require('socket.io')
const http = require('http')
import passport from 'passport'
import ConnectEnsureLogin from 'connect-ensure-login'
import PassportLocal from 'passport-local'

import AppModels from 'server/models/all_models'

import Room from 'server/utils/chat_data'

const MONGODB_URL = "mongodb://localhost:27017/auctionify"

const router = require('./routes');

mongoose.connect(MONGODB_URL);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);
// app.use('/users', usersRouter);

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

app.get(
    '/login',
    passport.authenticate('local', {
      failuteReditect: '/login'
    }),
    (req, res) => {
      //
    }
)

const server = http.createServer(app)
const io = socket(server)

io.on("connection", (socket) => {
  console.log("Incoming connection")
  socket.on('createChat', (data) => {
    const sender = data.login;
    const receiver = data.receiver;
    const roomID = data.roomID
    socket.join(roomID)
    AppModels.Message.add()
  })
  socket.on('sendMessage', (id, data) => {
    const sender = data.login;
    const receiver = data.receiver;
    const message = data.message;
    const roomID = data.roomID
    socket.join(roomID)
    io.to(roomID).emit('getMessage', {
      sender: sender,
      receiver: receiver,
      message: message
    })
    // socket.broadcast.to(id).emit('getMessage', {
    //   login: sender,
    //   receiver: receiver,
    //   message: message
    // })
  })
  socket.on('getMessages', (data) => {
    const username = data.username
    AppModels.Message.find({
      username: username,
      read: false
    }, (error, documents) => {
      //
    })
    rooms.filter((element) => data.user1 === element.user1 || data.user1 === element.user2)
    socket.emit()
  })
  socket.on('messagesHaveBeenRead', (data) => {
    const username = data.username
    const whoseMessages = data.whoseMessages
    //
  })
  socket.on('messageRead', (data) => {
    const messageID = data.messageID
    AppModels.Message.update({
      messageID: messageID
    }, {
      read: true
    })
  })
});

// passport.use({
//       usernameField: 'username',
//       passwordField: 'password'
//     },
//     new PassportLocal.Strategy((username, password, done) => {
//       AppModels.User.findOne({username: username}, (err, user) => {
//         if (err) {
//           return done(err)
//         }
//         if (!user) {
//           return done(null, false)
//         }
//         return done(null, true)
//         // if (!user.verify)
//       })
//     })
// )

passport.use('local', AppModels.User.createStrategy())
passport.serializeUser(AppModels.User.serializeUser())
passport.deserializeUser(AppModels.User.deserializeUser())

const wsPort = process.env.PORT || 4001;
server.listen(wsPort, () => console.log(`Listening on port ${wsPort}`));

export default app
