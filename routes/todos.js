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

router.post('/create', async (request, response) => {
  const todo = new Todo({
    title: request.body.title,
  });

  await todo.save();
  response.redirect('/');
});



module.exports = router;