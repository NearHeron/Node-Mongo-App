const { Schema, model } = require('module');

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = model('Todo', schema);