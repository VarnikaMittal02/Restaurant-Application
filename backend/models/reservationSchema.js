import mongoose from "mongoose";

import validator from "validator"; // for email

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "first name must contain at least 3 character"],
        maxLength: [10, "first name cannot exceed 30 character"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "lastt name must contain at least 3 character"],
        maxLength: [10, "lastt name cannot exceed 30 character"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, " provide a valid email"],

    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "phone number must contain 10 digits"],
        maxLength: [10, "phone number must contain 10 digits"],
    },
    time: {
        type: String,
        required: true,
        default: Date.now,

    },
    date: {
        type: Date,
        required: true,
        default: Date.now,

    }

});


// export const Reservation = mongoose.model("Reservation",reservationSchema);
export const Reservation = mongoose.model("Reservation", reservationSchema);
