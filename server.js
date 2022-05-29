const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.get("/api/hello", (req, res) => { // отвечает за принятие GET запроса
  res.send("GET запрос к странице"); // ответ на /api-hello
});

// POST method route
app.post("/api/post", (req, res) => {
  res.send(JSON.stringify([{
    "userId": "1",
    "id": "1",
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }]))
});

app.listen(port, () => {
  console.log(`Порт открыт: ${port}`);
});