const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Username: {
        type: "String",
        default: 'Steve'
    }
})


module.exports = mongoose.model("User", UserSchema);