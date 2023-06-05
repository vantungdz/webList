var express = require("express");
var router = express.Router();
const Data = require("../model/model");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/post", (req, res) => {
  console.log('req', req.body)
  const data = new Data({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  });
  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/fetchList/:email', async (req, res) => {
  const email = req.params.email
  console.log('email',email)
  const data = await Data.findOne({email});
  console.log('data', data)
  return res.json(data);
})

module.exports = router;
