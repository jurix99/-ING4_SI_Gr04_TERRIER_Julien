
const db = require('./db')
const express = require('express')
const cors = require('cors')
const app = express()
var jwt = require('jsonwebtoken');

app.use(require('body-parser').json())
app.use(cors())

app.get('/', (req, res) => {
  res.send([
    '<h1>ECE DevOps Chat</h1>'
  ].join(''))
})

// Channels

app.get('/channels' , async (req, res) => {

const channels = await db.channels.list()
res.json(channels)
})

app.post('/channels', verifyToken, (req, res) => {  //use the function to verify authorization
  jwt.verify(req.token, 'secretkey', (err, authData) => { //verify the token with the secret key
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({ //if success, it give us the user informations and the expriation of the token store in the token
        authData
      });
    }
  });
});

app.get('/channels/:id', async (req, res) => {
  const channel = await db.channels.get(req.params.id)
  res.json(channel)
})

app.put('/channels/:id', async (req, res) => {
  const channel = await db.channels.update(req.body)
  res.json(channel)
})

// Messages

app.get('/channels/:id/messages', async (req, res) => {
  const messages = await db.messages.list(req.params.id)
  res.json(messages)
})

app.post('/channels/:id/messages', async (req, res) => {
  const message = await db.messages.create(req.params.id, req.body)
  res.status(201).json(message)
})

// Users

app.get('/users', async (req, res) => {
  const users = await db.users.list()
  res.json(users)
})

app.post('/users', async (req, res) => {
  const user = await db.users.create(req.body)
  res.status(201).json(user)
})

app.get('/users/:id', async (req, res) => {
  const user = await db.users.get(req.params.id)
  res.json(user)
})

app.put('/users/:id', async (req, res) => {
  const user = await db.users.update(req.body)
  res.json(user)
})

// Messages

app.post('/login', (req, res) => {
  // Mock user
  const user = {
    id: 1, 
    username: 'username',
  }

  jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
    res.json({
      token
    });
  });
});

function verifyToken(req, res, next) {
  // Get authorization in header
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }

}

module.exports = app
