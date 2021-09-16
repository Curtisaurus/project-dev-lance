const mongoose = require('mongoose');

const { Schema } = mongoose;

const teammateSchema = new Schema({
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
  }
});

const Teammate = mongoose.model('Teammate', teammateSchema);

module.exports = Teammate;
