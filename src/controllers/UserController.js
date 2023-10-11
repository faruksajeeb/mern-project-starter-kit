const UserModel = require("../models/UserModel");
exports.createUser = (req, res) => {
	let data = req.body;

	UserModel.create(data)
		.then((result) => {
			res.status(201).json({ status: "success", data: result });
		})
		.catch((error) => {
			res.status(400).json({ status: "fail", data: error });
		});
};
