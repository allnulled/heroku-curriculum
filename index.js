const express = require("express");
const app = express();
app.set('port', (process.env.PORT || 5000))
app.get("/", function(request, response, next) {
	response.send("<b>Okay...</b> We are doing good.");
});
app.listen(app.get("port"));