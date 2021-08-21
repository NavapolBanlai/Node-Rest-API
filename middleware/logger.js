const logger = (req, res, next) => {
      console.log("URL : "+`${req.protocol}://${req.get("host")}${req.orinalUrl}`);
      next();
  };
  module.exports = {
      logger
  }