const express = require("express");
const app = express();
app.set('port', (process.env.PORT || 5000))
app.use("/", express.static(__dirname + "/public"));
app.get("/", function(request, response, next) {
	response.send("<b>Okay...</b> We are doing good.");
});
app.listen(app.get("port"));