const express = require('express')
const TodoService = require('../services/Todo')

const router = express.Router()
const todoService = new TodoService()

router.get('/', async (req, res) => {
  const { todos } = await todoService.getTodos()
  res.json({ todos })
})

router.post('/', async (req, res) => {
  const payload = req.body
  const { todo } = await todoService.createTodo(payload)
  res.json({ todo })
})

module.exports = router
