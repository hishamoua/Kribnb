// Create a user schema
const mongoose = require('mongoose');
const validate = require('validator');
const { isEmail } = validate;
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: 'Email address is required',
      validate: [isEmail, 'invalid email'],
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
},
  role:{
    type: String,
    enum: ['admin','visitor','host'],
    default:'visitor',
  }
});

userSchema.pre('save', async function (next) {
  //check if password is modified or not
  if(!this.isModified('password')) {
     next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


  const User = mongoose.model('User', userSchema);

  module.exports=User;



  