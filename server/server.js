const sendInviteMiddleware = require("./middleware/sendInviteMiddleware")
const path = require('path');
const express = require("express");
const cors = require('cors')
const app = express();
const PATH = 3000;

app.use(cors());
app.use("/", express.static(path.resolve("./web/static")))

app.get("/message", sendInviteMiddleware, (req, res) => {
    res.send(res.json(res.body.message));
});

app.listen(PATH);


