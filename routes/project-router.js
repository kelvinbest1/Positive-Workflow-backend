const express = require('express')
const router = express.Router()
const projectCtrl = require('../controllers/project-controller')
const {requireToken} = require('../middleware/auth')

router.get('/', projectCtrl.index)
router.get("/get-projects-by-role", projectCtrl.getProjectByRole)
router.post('/',requireToken, projectCtrl.create)
router.delete('/:id',requireToken, projectCtrl.delete)
router.put('/:id',requireToken, projectCtrl.update)
router.get('/:id', projectCtrl.getOne)






















module.exports = router