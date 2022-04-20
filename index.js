const express = require("express");
const app = express();
const port = process.env.PROT || 5000;
const cors = require("cors");
app.use(express.json());
app.use(cors());
const users = [
  { id: 1, name: "Tanvir", age: 21, email: "mdtanviralamht731@gmail.com" },
  { id: 2, name: "Tanvir", age: 21, email: "mdtanviralamht731@gmail.com" },
  { id: 3, name: "Tanvir", age: 21, email: "mdtanviralamht731@gmail.com" },
  { id: 4, name: "Tanvir", age: 21, email: "mdtanviralamht731@gmail.com" },
  { id: 5, name: "Tanvir", age: 21, email: "mdtanviralamht731@gmail.com" },
  { id: 6, name: "Tanvir", age: 21, email: "mdtanviralamht731@gmail.com" },
  { id: 7, name: "Tanvir", age: 21, email: "mdtanviralamht731@gmail.com" },
];

app.post("/user", (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});
app.get("/", (req, res) => {
  res.send("sever is running add nodemon");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});
app.listen(port, () => {
  console.log("listening port", port);
});
