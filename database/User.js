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
        console.log(userName)
        const user = await UserModel.find({"userName" : userName});
        return user;
    }
};
module.exports = { ...methods };
