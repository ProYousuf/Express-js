const mongoose = require('mongoose')
const { Schema } = mongoose;

const dataSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
 

});

module.exports = mongoose.model('Data', dataSchema);