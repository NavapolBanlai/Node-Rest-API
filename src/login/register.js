const Mainresponse = require("../../model/respost");
const Register = {
    async register(req, res) {
        try {
            let response = new Mainresponse();
            response.developerMessage = "hello";
            res.status(200);
            res.json(response);
            return res.end();
        } catch (error) {
            res.error(error);
            return res.end();
        }
    }
};

module.exports = Register;
