const produtosService = require("../services/produtosService");

module.exports = {
  ping: (req, res) => {
    res.json({ pong: true });
  },
  all: async (req, res) => {
    let json = { error: "", result: [] };

    let produtos = await produtosService.getAll();
    for (let i in produtos) {
      json.result.push({});
    }
    res.json(produtos);
  },

  one: async (req, res) => {
    let json = { error: "", result: {} };

    let id = req.params.id;
    let produtos = await produtosService.findById(id);
    if (produtos) {
      json.result = produtos;
    }
    res.json(produtos);
  },

  new: async (req, res) => {
    let json = { error: "", result: {} };

    const prodservice = {
      id: req.params.id,
      nome: req.body.nome,
      preco: req.body.preco,
      quantidade: req.body.quantidade,
    };
    if (prodservice) {
      let prodserviceId = await produtosService.add(prodservice);
      json.result = Object.assign(prodservice, { id: prodserviceId });
    } else {
      json.error = "Campos não enviados";
    }
    console.log(prodservice);
    res.json(json);
  },

  edit: async (req, res) => {
    let json = { error: "", result: {} };

    const prodservice = {
      id: req.params.id,
      nome: req.body.nome,
      preco: req.body.preco,
      quantidade: req.body.quantidade,
    };
    if (prodservice) {
      await produtosService.update(prodservice);
      json.result = Object.assign(prodservice);
    } else {
      json.error = "Campos não enviados";
    }
    console.log(prodservice);
    res.json(json);
  },

  delete: async (req, res) => {
    let json = { error: "", result: {} };
    await produtosService.delete(req.params.id);
    res.json(json);
  },
};
