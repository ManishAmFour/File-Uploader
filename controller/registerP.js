const bcrypt = require("bcrypt");
const { PrismaClient } = require("../generated/prisma");

const registerP = async (req, res) => {
  const { EmailName, pword } = req.body;
  const hash = bcrypt.hashSync(pword, 10);
  const prisma = new PrismaClient();
  await prisma.user.create({
    data: {
      email: EmailName,
      pword: hash,
    },
  });
  res.redirect("/");
};

module.exports = registerP;
