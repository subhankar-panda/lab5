var data = require("../data.json");

exports.addFriend = function(req, res) { 
	let name = req.query.name;
	let desc = req.query.description;
	let obj = {
		name : name,
		description : desc,
		imageURL : 'http://lorempixel.com/400/400/people'
	};
	data.friends.push(obj);
 }