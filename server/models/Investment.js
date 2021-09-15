const mongoose = require('mongoose');
const User = require('./User'); 

const { Schema } = mongoose;

const investmentSchema = new Schema({
  role: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  amount: {
    type: Number
  }
});

const Investment = mongoose.model('Investment', investmentSchema);
module.exports = Investment;