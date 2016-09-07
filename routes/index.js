var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.query);
  console.log("get");
  res.render('index', {});
});
router.post('/', function(req, res) {
  var requestBody = req.body;
 
  if (requestBody.previous_state=="UP" && requestBody.current_state=="DOWN" && requestBody.description!=="test") {
	 var slackweburl = "https://hooks.slack.com/services/YOURSERVICEPATH";
        var test = "";
        var message = {text : " SITE DOWN! Property: " + requestBody.check_name + " <@mikhail> <@jasonnunnelley>" + test};
        var payload = JSON.stringify(message);
        	request.post({url:slackweburl, form: {'payload' : payload}}, function(e,response, body) {
    });

  }
if (requestBody.previous_state=="DOWN" && requestBody.current_state=="UP" && requestBody.description!=="test") {
         var slackweburl = "https://hooks.slack.com/services/YOURSERVICEPATH";
        var test = "";
        var message = {text : " SITE UP! Property: " + requestBody.check_name};
        var payload = JSON.stringify(message);
                request.post({url:slackweburl, form: {'payload' : payload}}, function(e,response, body) {
    });

  }

  res.render('index', {});
});


module.exports = router;
