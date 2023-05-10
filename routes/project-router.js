const express = require('express')
const router = express.Router()
const projectCtrl = require('../controllers/project-controller')

router.get('/', projectCtrl.index)
router.get("/get-projects-by-role", projectCtrl.getProjectByRole)
router.post('/', projectCtrl.create)
router.delete('/:id', projectCtrl.delete)
router.put('/:id', projectCtrl.update)
router.get('/:id', projectCtrl.getOne)






















module.exports = router