const mongoose = require('mongoose');

const guestsSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    from:  { type: String, required: true },
    memory:  { type: String, required: true },
    wish:  { type: String, required: true },
    side:  { type: String, required: true },
}, {timestamps: true});

const Guest = mongoose.model('Guest', guestsSchema);
// TODO: update your model
module.exports = Guest;
