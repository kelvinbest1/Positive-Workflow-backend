const express = require('express')
const router = express.Router()
const projectCtrl = require('../controllers/project-controller')
const authMiddleware = require("../middleware/auth");



router.get('/', projectCtrl.index)
router.get("/getProjectsByRole", projectCtrl.getProjectByRole)
router.post('/',authMiddleware, projectCtrl.create)
router.delete('/:id',authMiddleware, projectCtrl.delete)
router.put('/:id',authMiddleware, projectCtrl.update)
router.get('/:id', projectCtrl.getOne)






















module.exports = router