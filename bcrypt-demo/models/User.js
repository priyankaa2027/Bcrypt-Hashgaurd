const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    maxlength: 32,
    match: /^[a-zA-Z0-9_]+$/,
    validate: {
      validator: v => validator.isAlphanumeric(v),
      message: 'Username must be alphanumeric.'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 128
  }
});

module.exports = mongoose.model('User', userSchema);
