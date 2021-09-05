const mongoose = require('mongoose');

const { Schema } = mongoose;
const Role = require('./Role');

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
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
    required: true,
    min: 0.99
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      role: Role.schema
    }
  ],
  tags: [String]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
