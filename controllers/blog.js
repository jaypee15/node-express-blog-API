const post = require("../models/blog");

const getAllposts = async (req, res, next) => {
  const posts = await post.find();
  res.status(200).json({
    data: [...posts],
  });
};

const createpost = async (req, res) => {
  const { body } = req;
  await post.create(body);
  res.status(201).json({ message: "Post created succesfuly" });
};
const findpostById = async (req, res) => {
  const post = await post.findById(req.params.postId);
  res.status(200).json({
    data: post,
  });
};
const findpostByIdAndUpdate = async (req, res) => {
  const { body } = req;
  const post = await post.findByIdAndUpdate(req.params.postId, body, {
    new: true,
  });
  res.status(200).json({
    data: post,
  });
};
const deletepostById = async (req, res) => {
  const post = await post.findByIdAndDelete(req.params.postId);
  res.status(204).json({
    data: post,
    message: "post Deleted",
  });
};

module.exports = {
  getAllposts,
  createpost,
  deletepostById,
  findpostById,
  findpostByIdAndUpdate,
};
