const { NotFound, Forbidden } = require("http-errors");
const { User } = require("../../models");
const { sendEmail } = require("../../helpers");

const reSendEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: "missing required field email",
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new NotFound("User not found");
  }

  if (user.verify) {
    throw new Forbidden("User already verified");
  }

  const mail = {
    to: email,
    subject: "Verify your email to finish registration",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verificationToken}">Confirm email</a>`,
  };

  await sendEmail(mail);
  res.json({
    message: "Verification email sent",
  });
};

module.exports = reSendEmail;
