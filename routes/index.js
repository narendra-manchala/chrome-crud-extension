var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test', { useMongoClient: true, promiseLibrary: global.Promise });

var SportSchema = new Schema({
    name: { type: String },
    type: {type: String}
});

var Sport = mongoose.model("exSport",SportSchema);

//var User = mongoose.model('myusers' , UserSchema);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/create", function (req, res) {
  console.log(name, type);
  res.send(json)
});

module.exports = router;
