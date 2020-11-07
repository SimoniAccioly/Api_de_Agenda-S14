const { response } = require('../app')
const agendaCollection = require('../models/agendaSchema')

const getAll = (request,response) => {
    console.log(request.url);


    agendaCollection.find((error,contatos) => {
        if(error){
            return response.status(500).send(error)
        }else{
            return response.status(200).json({
                mensagem: "Tudo certo com o GET",
                contatos
            })
        }
    })
}


module.exports = {
    getAll,
}