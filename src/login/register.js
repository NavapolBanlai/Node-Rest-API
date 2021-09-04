const Mainresponse = require("../../models/respost");
const user = require("../../database/User");
const ErrorMsg = require("../../constants/ErrorMsg");
const e = require("express");

const Register = {
    async register(req, res) {
        try {
            let response = new Mainresponse(),
                httpdata = req.body;
                console.log("🚀 ~ file: register.js ~ line 11 ~ register ~ httpdata", httpdata)
                // {
                //     "userName": "asdf",
                //     "fName": "312",
                //     "lName": "as123d"
                // }
            let responseUser = await user.findUserByUserName(httpdata.userName);
            if (!responseUser) {
                await user.saveUser(httpdata);
            } else {
                throw ErrorMsg.DuplicateUser;
            }
            
            response.developerMessage = "hello";
            
            res.status(200);
            res.json(response);
            return res.end();
        } catch (error) {
            if (error.message) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: error });
            }
            return res.end();
        }
    }
};

module.exports = Register;
