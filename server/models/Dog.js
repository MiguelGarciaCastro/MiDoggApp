const { Schema, model } = require('mongoose');
var mongoose = require("mongoose");
const user = require("./User");
const userSchema = mongoose.model("User").schema;

const dogSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false,
            trim: true
        },
        human: {
             type: [User]
        },
        breed: [
            {
                type:string     
                unique: false,
                trim: true
            }
        ],
        dob: {
          type: date
        },
        isBig: {
          type: bool
        },
    {
        toJSON: {
            virtuals: true
        }
    }
);



    next();
});

const Dog = model('Dog', dogSchema);

module.exports = Dog;
