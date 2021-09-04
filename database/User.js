const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema(
    {
        id: Schema.Types.ObjectId,
        userName: String,
        fName: String,
        lName: String
    },
    { timestamps: true, versionKey: false }
);
const UserModel = mongoose.model("User", UserSchema);
const methods = {
    async saveUser(data) {
        const user = new UserModel(data);
        await user.save();
        return user;
    },
    async findUserByUserName(userName) {
        const user = await UserModel.find({"userName" : userName});
        if(user.length != 0){
            return user;
        }else{
            return null;
        }
    }
};
module.exports = { ...methods };
