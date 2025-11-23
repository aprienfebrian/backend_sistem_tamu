const prisma = require("../utils/prisma");

exports.getUsers = () => {
  return prisma.user.findMany();
};

exports.getUserById = (id) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

exports.createUser = (data) => {
  return prisma.user.create({
    data,
  });
};

exports.updateUser = (id, data) => {
  return prisma.user.update({
    where: { id },
    data,
  });
};

exports.deleteUser = (id) => {
  return prisma.user.delete({
    where: { id },
  });
};
