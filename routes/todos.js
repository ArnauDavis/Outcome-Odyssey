const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')
const outcomesController = require('../controllers/outcomes') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.post('/addOutcome', ensureAuth, outcomesController.addOutcome)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router