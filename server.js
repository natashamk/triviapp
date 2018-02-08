var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist'));
mongoose.connect('mongodb://localhost/music_db', err => {
  console.log(err ||  `MongoDB connected`);
})
var Schema = mongoose.Schema;
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
 username: {type: String, required: true},
 firstname :{type: String, required: true},
 email: {type: String, required: true},
 password :{type: String, required: true},
 score : {type: Number, default: 0}
});
var User = mongoose.model('User', userSchema);

app.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    if(err) {
      res.send('Error occurred');
    }
    else {
      res.send(users);
    }
  })
})

app.post('/users', function(req, res) {
    console.log("******************** app post")
    console.log(req.body)
  var user = new User(req.body);
  user.save(function(err) {
    if(err) {
      console.log("############  "+err)
      } else {
      res.send('Poll created in DB')
      }
  })
})
app.post('/poll/delete',function(req, res) {
    Question.remove({_id: req.body._id}, function(err){
      if(err) {
        res.send("Error "+err)
      }
      else {
        res.send({"status":"success"})
      }
    })
  })
  app.get('/poll/:id', function(req, res){
    Question.findOne({ _id: req.params.id }, function(err, result) {
      if (err){
        console.log(err);
      } else {
        res.send(result);
      }
    })
  })
app.listen(8000, function() {
    console.log("listening on port 8000");
})