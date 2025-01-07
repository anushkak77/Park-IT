const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true
    },
    contactNuber : {
        type: String,
        trim: true
    },
    password: {
        type:String,
        required:true
    },
    accountType: {
        type:String,
        enum:["Admin", "User"],
        required:true
    },
    image:{
        type:String,
        required:true
    },
    token: {
        type:String
    },
    resetPasswordExpires: {
        type:Date
    },
    governmentIdType: {
        type: String,
        enum:["Adhar Card", "Driving Licence"],
    },
    governmentId: {
        type:String,
        trim:true,
    },
    vehicles:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Vehicle"
        }
    ],
    parkingSpots: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"ParkingSpace"
        }
    ],
    notifications: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Notification"
        }
    ]

},
{timestamps: true}
)

module.exports = mongoose.model("User", userSchema);