const express = require('express')
const router = express.Router()
const taskCtrl = require('../controllers/task-controller')
const authMiddleware = require("../middleware/auth");


// ROUTES


router.get('/', taskCtrl.index)
router.post('/',authMiddleware, taskCtrl.create)
router.delete('/:id',authMiddleware, taskCtrl.delete)
router.put('/:id',authMiddleware, taskCtrl.update)









module.exports = router