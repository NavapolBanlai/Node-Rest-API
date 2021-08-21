const app = require("express")();
const port = 8001;
const login = require("./routers/Api/login");
const logger = require("./middleware/logger");
const database = require("./configs/databases");
var bodyParser = require('body-parser')

database.mongoDB();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger.logger);
app.use("/login", login);

app.listen(port, function () {
    console.log("Starting node.js on port " + port);
});
module.exports = app;
