const jwt = require("jsonwebtoken");
const config = require("./config.json");

module.exports = (req, res, next) => {
	const token = req.header("x-access-token");
	if (token) {
		jwt.verify(token, config.secret, function (err, decoded) {
			if (err) {
				return res
					.status(401)
					.json({ error: true, message: "UnAuthorized access" }); //incorrect token
			}
			req.decoded = decoded;
			next();
		});
	} else {
		return res.status(403).json({
			error: true,
			message: "No Token Found .... !",
		});
	}
};
