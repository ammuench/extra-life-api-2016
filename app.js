var express = require('express');
var extraLifeApi = require('extra-life-api');

//create new express object
var app = express();

// Configure Express security miscellany
app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Require website to use cookies to control session
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

/**************************************************************************
 ************************** BEGIN API ENDPOINTS ***************************
 **************************************************************************/
app.get('/getUser/:id', function(req, res){
	extraLifeApi.getUserInfo(req.params.id, function(data){
		res.send(data);
	});
});

app.get('/getUserDonations/:id', function(req, res){
	extraLifeApi.getRecentDonations(req.params.id, function(data){
		res.send(data);
	});
});

app.get('/getTeam/:id', function(req, res){
	extraLifeApi.getTeamInfo(req.params.id, function(data){
		res.send(data);
	});
});

app.listen(8080);

