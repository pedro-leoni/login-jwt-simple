const { Router } = require('express');
//controladores
const newUser = require('./controllers/newUser');
const ping = require('./controllers/ping');
const login = require('./controllers/login');
const getUserInfo = require('./controllers/getUserInfo');
const getUserId = require('./controllers/getUserId')
//middlewares
const verifyToken = require("../middlewares/authorization")
const cors = require("cors")

const router = Router();

router.get('/ping', ping)
router.post('/user', newUser)
router.get('/userid', [cors(), verifyToken] ,getUserId)
router.get('/user/:id', [cors(), verifyToken], getUserInfo)
router.post('/login', login)

module.exports = router;