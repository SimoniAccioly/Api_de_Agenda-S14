const express = require('express')
const router = express.Router()



/**
@route LISTAR o index
@desc  Retorna index com apresentação { mensagem: bem vinda a lista de contatinhos }
@access Public 
@endpoint http://localhost:porta/
**/
router.get("/", function(request, response){
    response.status(200).send({
        titulo: "Bem vindo a agenda de contatinhos - Reprograma",
        version: "1.0.0"
    })
})

module.exports = router