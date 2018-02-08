var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
 username: {type: String, required: true},
 firstname :{type: String, required: true},
 email: {type: String, required: true},
 password :{type: String, required: true},
 score : {type: Number, default: 0}
});
mongoose.model('user', userSchema); 
