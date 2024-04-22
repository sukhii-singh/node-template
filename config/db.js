const mongoose = require("mongoose");

const connect = async () => {
    try {
        let connection = await mongoose.connect(process.env.URL)
        if (connection) {
            console.log("MongoDB Connected Successfully");
        } else {

            console.log("MongoDB Connection failed");
        }

    } catch (error) {
        console.log(`error in connecting database ${error}`)
    }
}

module.exports = connect; 