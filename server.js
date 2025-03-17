const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/data", (req, res) => {
    console.log("Received Data:", req.body);
    res.status(200).send({ message: "Data received successfully!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// hi test