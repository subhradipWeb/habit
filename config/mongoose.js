// const mongoose = require("mongoose");
// const connectDB = async() => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log(`Mongodb connected ${mongoose.connection.host}`);
//     } catch (error) {
//         console.log(`Mongodb Server Issue ${error}`);
//     }
// };

// module.exports = connectDB;const mongoose = require("mongoose");

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
    .connect(
        "mongodb+srv://subhradipsamanta99:LhFqcpRfazUpNZaP@cluster0.iurywf4.mongodb.net/?retryWrites=true&w=majority", {
            // useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("connection is successfully");
    })
    .catch((e) => {
        console.log("No Connection");
    });