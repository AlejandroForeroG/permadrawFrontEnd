const express = require("express");
const path = require("path");
const app = express();
const port = 80;

const rootPath = path.resolve("/root");
const buildPath = path.join(rootPath, "permadraw/vite-project/dist");

app.use(express.static(buildPath));



app.get("*", (req, res) => {
  res.redirect("https://www.youtube.com/watch?v=OSNGVw__dEs"); // Aquí puedes especificar el URL de YouTube al que deseas redirigir
});

app.get("/", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
