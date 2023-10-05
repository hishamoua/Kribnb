const express = require('express');

const { getUsers, getUsersbyId, getNewUser} = require("./user.controller")

const route = express.Router();

route.get('/',getUsers)

route.get('/users/:id',getUsersbyId)

route.post('/users',getNewUser)

module.exports = route;