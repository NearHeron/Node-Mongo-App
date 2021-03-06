const express = require('express');
const mongoose = require('mongoose');
const exphb = require('express-handlebars');
const todoRoutes = require('./routes/todos');

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphb.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));

app.use(todoRoutes);

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://Daniil:1q2w3e4r@cluster0-n9wbf.mongodb.net/todos', {
      useNewUrlParser: true,
      useFindAndModify: false
    });
    app.listen(PORT, () => {
      console.log('Server has been started')
    });
  } catch (e) {
    console.log(e)
  }
};

start();




