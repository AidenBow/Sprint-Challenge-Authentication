const router = require('express').Router();
const Users = require("./auth-router-model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const secrets = require("./secrets")
const restricted = require("./authenticate-middleware")

router.post('/register', (req, res) => {
  let user = req.body
  let hash = bcrypt.hashSync(user.password, 12)
  user.password = hash

  Users.add(user)
    .then(user => {
      const token = genToken(user)
      res.status(200).json({user: user, token: token})
    })
    .catch(err => {
      res.status(500).json({error: err})
    })
});

router.post('/login', (req, res) => {
  let {username, password} = req.body

  Users.findBy({username})
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = genToken(user)
        res.status(200).json({message: "logged in!", token: token})
      }
    })
    .catch(err => {
      res.status(500).json({error: err})
    })
});

router.get("/users", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({error: err})
    })
})

function genToken(user) {
  const payload = {
    username: user.username
  };

  const options = {
    expiresIn: '1h'
  };

  const token = jwt.sign(payload, secrets.jwtSecret, options);
  console.log(token)
  return token;
}

module.exports = router;
