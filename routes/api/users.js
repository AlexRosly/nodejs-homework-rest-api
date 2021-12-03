const express = require("express");
const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const { joiSingUpSchema, joiLogInSchema } = require("../../models/user");

const router = express.Router();

router.post("/singup", validation(joiSingUpSchema), ctrlWrapper(ctrl.singup));
router.post("/login", validation(joiLogInSchema), ctrlWrapper(ctrl.login));
router.post("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
