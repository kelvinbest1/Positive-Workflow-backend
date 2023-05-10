const express = require('express')
const router = express.Router()
const taskCtrl = require('../controllers/task-controller')
// ROUTES


router.get('/', taskCtrl.index)
router.post('/', taskCtrl.create)
router.delete('/:id', taskCtrl.delete)
router.put('/:id', taskCtrl.update)









module.exports = router