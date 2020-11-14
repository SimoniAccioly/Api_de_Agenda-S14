const express = require('express')
const router = express.Router()
const controller = require("../controller/agendaController")
const { route } = require('./indexRoute')

/**
@route LISTAR todos os dados
@desc Retorna todos os dados do banco de dados
@access Public 
@endpoint http://localhost:porta/contatos/
**/
router.get('/',  controller.getAll)

/**
@route CRIAR um novo dado
@desc Cria novo contato e retorna mensagem amigável
@access Public 
@endpoint http://localhost:porta/contatos/criar
**/
router.post('/criar', controller.addContato)


/**
@route LISTAR um dado pelo ID
@desc Retorna contato por id específico
@access Public 
@endpoint http://localhost:porta/contatos/id
**/
router.get('/:id', controller.getContatoById)


/**
@route LISTAR um dado pelo nome
@desc Retorna contato por nome específico
@access Public 
@endpoint http://localhost:porta/contatos/nome
**/
router.get('/:nome', controller.getContatoPorNome)


/**
@route DELETAR um dado
@desc Deleta contato por id específico e retorna mensagem amigável
@access Public 
@endpoint http://localhost:porta/contatos/id
**/
router.delete('/:id', controller.deleteContato)


/**
@route ATUALIZAR apenas o telefone
@desc Atualiza somente telefone do contato por id específico e retorna mensagem amigável
@access Public 
@endpoint http://localhost:porta/contatos/telefone/id
**/
router.patch('/telefone/:id', controller.updateContatinho)


/**
@route ATUALIZAR completamente o contato
@desc  Atualiza completamente contato e retorna mensagem amigável (id não pode ser modificado)
@access Public 
@endpoint http://localhost:porta/contatos/atualizar/id
**/
router.put('/atualizar/:id', controller.updateContatinho)



module.exports = router