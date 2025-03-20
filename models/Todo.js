const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
})

const OutcomeSchema = new mongoose.Schema({
  outcome: [{
    type: String
  }],
  userId: {
    type: String,
    required: true
  },
})

module.exports = {
  Todo: mongoose.model('Todo', TodoSchema),
  Outcome: mongoose.model('Outcome', OutcomeSchema)
}