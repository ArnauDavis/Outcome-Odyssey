const mongoose = require('mongoose')

const OutcomeSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    todoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Outcome', OutcomeSchema)