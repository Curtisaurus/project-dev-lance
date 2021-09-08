const mongoose = require('mongoose');

const { Schema } = mongoose;

const teammmateSchema = new Schema({
  role: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Teammmate = mongoose.model('Teammmate', teammmateSchema);

module.exports = Teammmate;
