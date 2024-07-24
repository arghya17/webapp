const express = require("express");
const bp = require("body-parser");
const jwt = require("jsonwebtoken");
const router = express.Router();
const config = require("./config.json");

const app = express();
app.use(bp.json());

router.get("/openaccess", (req, res) => {
	res.send("welcome user,its open to all");
});
router.use(require("./tokenchecker"));
router.get("/secure", (req, res) => {
	res.send("Welcome Auth user");
});
app.use("/", router);
app.listen(4000, () => {
	console.log("Server is ready ...!");
});
