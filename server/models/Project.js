const mongoose = require('mongoose');

const { Schema } = mongoose;
const User = require('./User');
const Teammate = require('./Teammate');

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  //required funds
  reqFunds: {
    type: Number,
    required: true,
    min: 0.99
  },
  // acquired funds
  acqFunds: {
    type: Number,
    min: 0.00
  },
  team: [Teammate.schema],
  investors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  tags: [String],
  launch: {
    type: String
  }
},
{
  timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
