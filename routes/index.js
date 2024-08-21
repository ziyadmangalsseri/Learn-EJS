const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let plNames = ["Javascript"];

app.get("/", (req, res) => {
  res.status(200).render("index", {
    title: "HomePage",
    plNames: plNames,
  });
});

app.post("/", (req, res) => {  
  plNames.push(req.body.plName);
  res.redirect("/");
});

app.get("/contact", (req, res) => {
  res.status(200).render("contact", { title: "ContactPage" });
});

app.listen(PORT, () => {
  console.log(`server startd ${PORT}........`);
});
