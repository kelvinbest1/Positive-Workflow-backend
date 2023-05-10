const express = require("express");
const router = express.Router();
const authCtrl = require("./controllers/auth-controllers");

router.post('/register', authCtrl.register)

router.post('/login', authCtrl.login)

router.get('/logout', (req,res,next)=>res.send('logging out'))


module.exports = router;