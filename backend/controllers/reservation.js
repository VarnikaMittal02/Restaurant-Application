
// import validator from "validator";
import Errorhandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";


export const sendreservation = async (req, res, next) => {

    // this line used for that fronted me se ye Wala Data Chahiye
    const {firstName, lastName, email, phone, time, date} = req.body;

    if (!firstName || !lastName || !email || !phone || !time || !date) {
        return next(new Errorhandler("please fill the form completely",400));

    } try {
// The Reservation.create() method is used to create a new entry in the Reservation database model.
        await Reservation.create({firstName, lastName, email, phone, time, date});
        // If the reservation is created successfully, this line sends a JSON response to the client
        res.status(200).json({
            success: true,
            message: "Reservation sent successfully !",
        });

    }
    // If something goes wrong in the try block, the catch block will handle the error.

    catch (error) {

        if (error.name === "ValidationError") {
            // When a validation error occurs, the error.errors object contains detailed error messages for each invalid field.
            const validationError = Object.values(error.errors).map((err) => err.message //Object.values(error.errors): This converts the error object into an array of values (error details).
            );// map((err) => err.message): This loops over each error object and extracts the message for each invalid field.
            return next(new Errorhandler(validationError.join(','), 400))
        }

        return next(error);
        
    }
};
// return next(new Errorhandler(validationError.join(','), 400));
// Purpose: This sends a 400 (Bad Request) response to the client if there are validation errors.
// validationError.join(','): Combines all the validation error messages into a single string, separated by commas.
// next(new Errorhandler(...)): Passes the error to the next middleware, likely an error-handling middleware.