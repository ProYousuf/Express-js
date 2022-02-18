const mongoose=require('mongoose')
const { Schema } = mongoose;

const dataSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
 
});

module.exports = mongoose.model('Data', dataSchema);