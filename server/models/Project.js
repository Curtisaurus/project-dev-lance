const mongoose = require('mongoose');

const { Schema } = mongoose;

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
  team: [{
    type: Schema.Types.ObjectId,
    ref: 'Teammate'
  }],
  investors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Investment'
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
