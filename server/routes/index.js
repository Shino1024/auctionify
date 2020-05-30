import AppModels from '../models/all_models'
import Passport from 'passport'
import ConnectEnsureLogin from 'connect-ensure-login'

var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  const username = req.body.username || ''
  res.send({})
})

router.get('/login', (req, res, next) => {
  const body = res.body
  const username = body.username
  const password = body.password
  Passport.authenticate('local',
      (error, user, info) => {
    if (error) {
      return next(error)
    }
    if (!user) {
      // return next(error)
    }
    req.login(user, (error) => {
      if (error) {
        return next(err)
      }
      return res.redirect('/')
    })
  })(req, res, next)
})

router.get('/add', (req, res, next) => {
  ConnectEnsureLogin.ensureLoggedIn()
  const body = res.body;
  const title = body.title
  const description = body.description
  const price = body.price
  const startDate = body.startDate
  const endDate = body.endDate
  const newUserModel = AppModels.Auction({
    title: title,
    description: description,
    price: price,
    startDate: startDate,
    endDate: endDate
  })
  newUserModel.save((error, document) => {
    if (error) {
      res.send({
        error: error
      })
    }
    //
  })
})

router.get('/changePrice', (req, res, next) => {
  ConnectEnsureLogin.ensureLoggedIn()
  const body = res.body;
  const auctionID = body.auctionID
  const newPrice = body.price
  AppModels.Auction.findOne({
    ID: auctionID
  })
})

router.get('/updateAuction', (req, res, next) => {
  ConnectEnsureLogin.ensureLoggedIn()
  const body = req.body
  const auctionID = body.auctionID
  AppModels.Auction.update({
    auctionID: auctionID
  }, {
    //
  })
})

render.get('/makeBid', (req, res, next) => {
  ConnectEnsureLogin.ensureLoggedIn()
  const body = req.body
  const auctionID = body.auctionID
  AppModels.Auction.update({
    //
  })
})

router.get('/register', (req, res, next) => {
  const body = req.body
  const username = body.username
  // AppModels.User.exists({
  //   username: username
  // }, (error, found) => {
  //   if (found) {
  //     res.send({
  //       error: "User already exists"
  //     })
  //   }
  // })
  const password = body.password

})

module.exports = router;
