const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

mongoose.connect(process.env.DB_URI || "mongodb://localhost/googlebookssearch");

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
