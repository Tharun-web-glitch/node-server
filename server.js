const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/data", (req, res) => {
    const receivedData = req.body.value;
    console.log("Data received from ESP8266:", receivedData);
    res.json({ status: "success", receivedValue: receivedData });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// hi test