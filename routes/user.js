const express = require("express");

const {
  findUserById,
  findUserByIdAndUpdate,
  deleteUserById,
  getAllUsers,
  createUser,
  isUserAuthorized,
} = require("../controllers/user");

const router = express.Router();

router
  .route("/:userId")
  .get(findUserById)
  .patch(isUserAuthorized, findUserByIdAndUpdate)
  .delete(deleteUserById);

router.route("/").get(getAllUsers).post(createUser);

module.exports = router;
