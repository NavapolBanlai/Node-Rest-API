const Mainresponse = require("../../models/respost");
const user = require("../../database/User");
const Register = {
    async register(req, res) {
        try {
            let response = new Mainresponse(),
                httpdata = req.body;
            // if (httpdata.id) {
            //     throw "No Id";
            // }
            let x = await user.findUserByUserName(httpdata.userName);
            if(!x){

            }else{

            }
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
