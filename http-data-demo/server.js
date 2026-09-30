const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.get("/api/data", (req, res) => {
    const data = { message: "Демонстрационный ответ сервера." };
    res.json(data);
});
app.listen(PORT, () => {
    console.log("Демо-сервер запущен: http://localhost:3000");
});
