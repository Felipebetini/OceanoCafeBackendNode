const db = require("../db");

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM produtos", (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        // console.log(results)
        resolve(results);
      });
    });
  },
  findById: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM produtos WHERE id = ?",
        [id],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          }
          console.log(results);
          if (results.length > 0) {
            resolve(results[0]);
          } else {
            resolve(false);
          }
        }
      );
    });
  },

  add: ({ nome, preco, quantidade }) => {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO produtos ( nome, preco, quantidade) VALUES (?,?,?)",
        [nome, preco, quantidade],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          }
          // console.log(cliente)
          resolve(results.insertId);
        }
      );
    });
  },
  update: ({ idprodutos, nome, preco, quantidade }) => {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE produtos SET  nome = ?, preco = ? , quantidade = ?  WHERE idprodutos = ?",
        [nome, preco, quantidade, idprodutos],
        (error, results) => {
          if (error) {
            reject(error);

            return;
          }
          // console.log(cliente)
          resolve(results);
        }
      );
    });
  },

  delete: (idprodutos) => {
    return new Promise((resolve, reject) => {
      db.query(
        "DELETE FROM produtos WHERE idprodutos = ?",
        [idprodutos],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(results);
        }
      );
    });
  },
};
