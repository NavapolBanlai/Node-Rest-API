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
// app.use("/xzxcvzxcv",verifyToken(), login);

// function verifyToken(req, res, next) {
//     const bearerHeader = req.headers['authorization'];
  
//     if (bearerHeader) {
//       const bearer = bearerHeader.split(' ');
//       const bearerToken = bearer[1];
//       req.token = bearerToken;
//       next();
//     } else {
//       // Forbidden
//       res.sendStatus(403);
//     }
//   }
app.listen(port, function () {
    console.log("Starting node.js on port " + port);
});
module.exports = app;
