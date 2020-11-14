const express = require('express')
const router = express.Router()
const controller = require("../controller/agendaController")
const { route } = require('./indexRoute')


router.get('/',  controller.getAll)
router.post('/criar', controller.addContato)
router.get('/:id', controller.getContatoById)
router.get('/:nome', controller.getContatoPorNome)
router.delete('/:id', controller.deleteContato)
router.patch('/telefone/:id', controller.updateContatinho)
router.put('/:id', controller.updateContatinho)



module.exports = router