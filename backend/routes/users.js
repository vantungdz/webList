var express = require('express');
var router = express.Router();
const User = require("../model/user");

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user/:id', async (req, res) => {
  const id = req.params.id
  // console.log('email',email)
  const data = await User.findById(id);
  console.log('data', data)
  return res.json(data);
})
module.exports = router;
