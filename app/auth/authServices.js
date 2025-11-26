const prisma = require("../utils/prisma");

exports.login = async (email, password) => {
  const resp = await prisma.user.findUnique({
    where: { email, password },
  });
  if (!resp) {
    return "email/password salah";
  }

  return resp;
};

exports.register = async (data) => {
  return await prisma.user.create({
    data: { ...data },
  });
};
