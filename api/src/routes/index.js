const { Router } = require('express');
const newUser = require('./controllers/newUser');
const ping = require('./controllers/ping')
const login = require('./controllers/login')

const router = Router();

router.get('/ping', ping)
router.post('/user', newUser)
router.post('/login', login)

module.exports = router;