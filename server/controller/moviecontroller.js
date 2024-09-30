let users = require('../db/models/movies');
const { success_function, error_function } = require('../util/responsehandler');
const fileUpload = require('../util/file-upload').fileUpload;  // Import the fileUpload function

// Log the function after it has been initialized
console.log("fileUpload function: ", fileUpload);

exports.createmovie = async function (req, res) {
    try {
        let body = req.body; // Make sure body is defined before using it
        let image = req.body.image;

        if (image) {
            let img_path = await fileUpload(image, "users");
            console.log("img_path: ", img_path);
            body.image = img_path; // Assign the image path to body.image
        }

        console.log("body", body);
        let new_movie = await users.create(body);
        console.log("new_movie", new_movie);

        let response = success_function({
            success: true,
            statuscode: 200,
            message: "successfully added.."
        });
        res.status(response.statuscode).send(response);
        return;

    } catch (error) {
        console.log("error: ", error);
        let response = error_function({
            success: false,
            statuscode: 400,
            message: "error"
        });
        res.status(response.statuscode).send(response);
        return;
    }
};