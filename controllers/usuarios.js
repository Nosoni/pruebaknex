const { knex } = require("../db");

const getAllUser = async () => {
  const usuarios = await knex.select("*").from("usuarios");

  return usuarios;
};

module.exports = { getAllUser };
