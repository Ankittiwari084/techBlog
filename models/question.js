var mongoose = require('mongoose');
var Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0) {
  mongoose.connect(require('./connection-string'));
}


var newSchema = new Schema({
  
  'title': { type: String },
  
  'option_one_title': { type: String },
  'option_one_value': { type: String },

  'option_two_title': { type: String },
  'option_two_value': { type: String },

  'option_three_title': { type: String },
  'option_three_value': { type: String },

  'option_four_title': { type: String },
  'option_four_value': { type: String },

  'correct_option':{ type: String},

  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now }
});

newSchema.pre('save', function(next){
  this.updatedAt = Date.now();
  next();
});

newSchema.pre('update', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

newSchema.pre('findOneAndUpdate', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});



module.exports = mongoose.model('Question', newSchema);
