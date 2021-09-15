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
        type: User.schema,
      },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
      },
    amount: {
          type: Number,

    }
});

const Investments = mongoose.model('Investments', investmentSchema);
module.exports = Investments;