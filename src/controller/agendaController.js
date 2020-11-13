const { response } = require("../app");
const agendaCollection = require("../models/agendaSchema");

const getAll = (request, response) => {
  console.log(request.url);

  agendaCollection.find((error, contatos) => {
    if (error) {
      return response.status(500).send(error);
    } else {
      return response.status(200).json({
        mensagem: "Tudo certo com o GET",
        contatos,
      });
    }
  });
};

const addContato = (request, response) => {
  const contatoBody = request.body;
  const contato = new agendaCollection(contatoBody);

  contato.save((error) => {
    if (error) {
      return response.status(400).send(error);
    } else {
      return response.status(200).send({
        mensagem: "POST com sucesso",
        contato,
      });
    }
  });
};

const getContatoPorNome = (request, response) => {
  const nome = request.params.nome;

  agendaCollection.find({ nome: nome }, (error, contato) => {
    console.log(contato);
    if (error) {
      response.status(500).send(error);
    } else if (contato == "") {
      return response.status(400).send({
        mensagem: "Contato não encontrado",
        contato,
      });
    } else {
      return response.status(200).send("Contato encontrado!");
    }
  });
};

const getContatoById = (request, response) => {
  const idParam = request.params.id;
  agendaCollection.findById(idParam, (error, contato) => {
    if (error) {
      return response.status(500).send(error);
    } else if (contato) {
      return response.status(200).send({
        mensagem: "GET por id feito com sucesso",
        contato,
      });
    } else {
      return response.status(404).send("Contato não encontrado =(");
    }
  });
};

const deleteContato = (request, response) => {
  const idParam = request.params.id
  agendaCollection.findByIdAndDelete(idParam, (error,contato) =>{
    if(error){
      return response.status(500).send(error)
      } else{
          if(contato){
              return response.status(200).send("Contatinho apagado com sucesso!")
          }else {
              return response.status(200).send("Não deu pra apagar o contatinho")
          }
      }
  })
} 


const updateContatinho = (request, response) => {
  const idParam = request.params.id 
  const body = request.body
  const novo = {new: true} 

  agendaCollection.findByIdAndUpdate( 
      idParam,
      body, 
      novo,
      (error, contato) =>{ 
          if(error){
              return response.status(500).send(error)
          } else if (contato) {
              return response.status(200).send(contato) 
          } else{
              return response.status(200).send("Contatinho não pode ser atualizado.") 
          }
      }
  )    
}


module.exports = {
  getAll,
  addContato,
  getContatoById,
  getContatoPorNome,
  deleteContato,
  updateContatinho
};
