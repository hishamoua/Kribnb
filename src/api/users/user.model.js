// Create a user schema
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password:{
        type: String,
        required: true,
        min: 8
},
  role:{
    type: String,
    enum: ['admin','visitor','host'],
    default:'visitor'
  }
});


  const User = mongoose.model('User', userSchema);

  module.exports=User;



  