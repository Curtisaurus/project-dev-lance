const mongoose = require('mongoose');

const { Schema } = mongoose;

const investmentSchema = new Schema({
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