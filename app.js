const app = require("express")();
const port = 8001;
const login = require("./routers/Api/login");
const logger = require("./middleware/logger")

app.use(logger.logger);
// app.use(bodyParser.json());
app.use("/login", login);

app.listen(port, function () {
    console.log("Starting node.js on port " + port);
});
module.exports = app;
