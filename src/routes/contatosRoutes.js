const express = require('express')
const router = express.Router()
const controller = require("../controller/agendaController")


router.get('/',  controller.getAll)

module.exports = router