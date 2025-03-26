const Outcome = require('../models/Outcome')


module.exports = {
    getOutcomes: async (req, res) => {
        try {
            const outcomes = await Outcome.find({ userId: req.user.id })
            res.render('outcomes.ejs', { outcomes: outcomes })
        } catch (err) {
            console.error(err)
            res.render('error/500')
        }
    },
    addOutcome: async (req, res) => {
        try {
            await Outcome.create({ outcome: req.body.outcome, userId: req.user.id })
            res.redirect('/outcomes')
        } catch (err) {
            console.error(err)
            res.render('error/500')
        }
    },
    deleteOutcome: async (req, res) => {
        try {
            await Outcome.deleteOne({ _id: req.body.outcomeId })
            res.redirect('/outcomes')
        } catch (err) {
            console.error(err)
            res.render('error/500')
        }
    }
}