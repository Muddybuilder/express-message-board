var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString("en-US"),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString("en-US"),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res) {
  res.render("form");
});
router.post("/new", function (req, res) {
  messages.push({
    text: req.body.textMsg,
    user: req.body.name,
    added: new Date().toLocaleDateString("en-US"),
  });
  res.redirect("/");
});
module.exports = router;
