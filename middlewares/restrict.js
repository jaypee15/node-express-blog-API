//  Check if the authenticated user has the necessary permissions to access or modify certain resources.

const asyncHandler = require("express-async-handler");
const ErrorObject = require("../utils/error");

const restrict = (role) =>
  asyncHandler(async (req, res, next) => {
    if (role.toLowerCase() === req.user.role.toLowerCase()) {
      next();
    } else {
      next(new ErrorObject("You are not authorised", 401));
    }
  });

module.exports = restrict;
