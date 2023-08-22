const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    console.log("hello ")
    console.log(req.body)
    res.status(200).json({
        message: "this is true"
    });
});

app.listen(4000, () => {
    console.log("server listening on port 4000");
});

module.exports = app; 
