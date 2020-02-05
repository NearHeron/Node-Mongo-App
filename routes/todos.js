const { Router } = require('express');
const router = Router();
const Todo = require('../models/Todo');

router.get('/', async (request, response) => {
  const todos = await Todo.find({});

  response.render('index', {
    title: 'Todos list',
    isIndex: true,
    todos
  })
});

router.get('/create', (request, response) => {
  response.render('create', {
    title: 'Create todo',
    isCreate: true
  })
});



module.exports = router;