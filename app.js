const express = require("express");
const fs = require("fs");
const YAML = require("yaml");
const swaggerUi = require("swagger-ui-express");

const app = express();

const swaggerFile = fs.readFileSync("./documentacao.yml", "utf8");
const swaggerDocument = YAML.parse(swaggerFile);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

// Endpoint binário
app.get("/to-binary/:decimal", (req, res) => {
  const decimal = parseInt(req.params.decimal, 10);

  if (isNaN(decimal)) {
    return res.status(400).json({ error: "Número decimal inválido" });
  }

  const binary = decimal.toString(2);

  res.json({ decimal, binary });
});

// Endpoint hexadecimal
app.get("/to-hex/:decimal", (req, res) => {
  const decimal = parseInt(req.params.decimal, 10);

  if (isNaN(decimal)) {
    return res.status(400).json({ error: "Número decimal inválido" });
  }

  const hex = decimal.toString(16).toUpperCase();

  res.json({ decimal, hex });
});

module.exports = app;