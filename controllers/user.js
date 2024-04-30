const User = require("../models/user");
exports.getAllUsers = async (req, res, next) => {
  // const users = await User.find();
  // res.status(200).json({
  //   data: [...users],
  // });
  console.log("users")
  res.json("users")
};

exports.createUser = async (req, res) => {
  const { body } = req;
  await User.create(body);
  res.status(201).json({ message: "User Created" });
};
exports.findUserById = async (req, res) => {
  const user = await User.findById(req.params.userId);
  res.status(200).json({
    data: user,
  });
};
exports.findUserByIdAndUpdate = async (req, res) => {
  const { body } = req;
  const user = await User.findByIdAndUpdate(req.params.userId, body, {
    new: true,
  });
  res.status(200).json({
    data: user,
  });
};
exports.deleteUserById = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.userId);
  res.status(204).json({
    data: user,
    message: "User Deleted",
  });
};
