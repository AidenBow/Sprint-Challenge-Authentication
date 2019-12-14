const router = require('express').Router();
const Users = require("./auth-router-model")

router.post('/register', (req, res) => {
  Users.add(req.body)
    .then(user => {
      console.log(user)
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json({error: err})
    })
});

router.post('/login', (req, res) => {
  // implement login
});

router.get("/users", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({error: err})
    })
})

module.exports = router;
