const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const URL = "mongodb+srv://dvtung7f6:25fRdakISMukg25J@cluster0.6desfmr.mongodb.net/Demo?retryWrites=true&w=majority";

async function connect(afterSuccess) {
  try {
    mongoose
      .connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connect to mongodb successfuly");
        afterSuccess(PORT)
      })
      .catch((err) => console.log("Connect to mongodb fail, error:", err));
  } catch (error) {}
}

module.exports = {connect}
