const express = require("express");
const app = express();

app.get("/", function(request, response, next) {
	response.send("<b>Okay...</b> We are doing good.");
});

app.listen(5000);