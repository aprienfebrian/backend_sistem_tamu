const prisma = require("../utils/prisma");

exports.getEntris = () => {
  return prisma.entri.findMany();
};

exports.getEntriById = (id) => {
  return prisma.entri.findUnique({
    where: { id },
  });
};

exports.createEntri = (data) => {
  return prisma.entri.create({
    data,
  });
};

exports.updateEntri = (id, data) => {
  return prisma.entri.update({
    where: { id },
    data,
  });
};

exports.deleteEntri = (id) => {
  return prisma.entri.delete({
    where: { id },
  });
};
