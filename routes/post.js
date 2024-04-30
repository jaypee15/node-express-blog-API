const express = require("express");

const {
  findpostById,
  findpostByIdAndUpdate,
  deletepostById,
  getAllposts,
  createpost,
} = require("../controllers/blog");

const router = express.Router();

router
  .route("/:postId")
  .get(findpostById)
  .patch(findpostByIdAndUpdate)
  .delete(deletepostById);

router.route("/").get(getAllposts).post(createpost);

module.exports = router;