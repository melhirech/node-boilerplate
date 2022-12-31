const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: String,
  description: String,
  isDone: Boolean
})

const Todo = mongoose.model('Todo', schema)

module.exports = Todo
