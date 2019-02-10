const express = require("express");
const app = express();

app.get("/", function (req, res) {
	console.log(req.query);
	let item;
	const int_list = [];
	for (let key in req.query){
		item = req.query[key];
		if (!isNaN(item)){
			item = +item;
			int_list.push(item**2);
		}
	}
	res.send(int_list.join(','));
})
app.listen(3000);
