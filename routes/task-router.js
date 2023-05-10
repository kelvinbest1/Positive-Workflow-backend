const express = require('express')
const router = express.Router()
const taskCtrl = require('../controllers/task-controller')
const {requireToken} = require('../middleware/auth')
// ROUTES


router.get('/', taskCtrl.index)
router.post('/',requireToken, taskCtrl.create)
router.delete('/:id',requireToken, taskCtrl.delete)
router.put('/:id',requireToken, taskCtrl.update)









module.exports = router