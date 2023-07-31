const express = require("express");
const { getAllUser } = require("./controllers/usuarios");
const app = express();
app.use(express.json());

app.get("/", (req, resp) => {
  const ususarios = getAllUser();
  resp.json(ususarios);
});

app.listen(3000, () => {
  console.log("escuchando puerto 3000");
});
