const express = require("express");
const {protect, restrict} = require("../middlewares/index")

const {
  findUserById,
  findUserByIdAndUpdate,
  deleteUserById,
  getAllUsers,
  createUser,
} = require("../controllers/user");

const router = express.Router();

router
  .route("/:userId")
  .get(protect, findUserById)
  .patch(protect, findUserByIdAndUpdate)
  .delete(protect, deleteUserById);

router.route("/").get(getAllUsers).post(createUser);

module.exports = router;
