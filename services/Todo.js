const TodoModel = require('../models/Todo')

class TodoService {
  async getTodos () {
    const todosRecord = await TodoModel.find()
    return { todos: todosRecord }
  }

  async createTodo (todo) {
    const newTodo = new TodoModel(todo)
    const created = await newTodo.save()

    return { todo: created }
  }
}

module.exports = TodoService
