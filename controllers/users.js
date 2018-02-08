var mongoose = require('mongoose')
var User = mongoose.model('user')

module.exports = {
  create: (req, res) => {
    user = new User(req.body);
    user.save((err) => {
      if(err) {
        console.log(err);
      } else {
        console.log("SUCCESS");
        res.send(user);
      }
    })
  },
  getUser: (req, res) => {
    User.find({username:req.body.username, password: req.body.password}, function(err, user){
      if(err) {
        console.log(err);
      } else {
        console.log("Got user")
        res.send(user);
      }
    })
      
  },
  delete: (req, res) => {
    console.log("DELETE "+req.params.id);
    User.remove({_id: req.params.id}, function(err){
      if(err) {
        console.log(err);
      }
      else {
        res.send({"status":"success"})
      }
    });
  },
  update: (req, res) => {
    User.update({_id: req.body._id }, req.body, function() {
      if(err) {
        console.log(err);
      }
      else {
        res.send("USER UPDATED");
      } 
    });
  }
 }