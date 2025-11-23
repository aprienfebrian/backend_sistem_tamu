const userService = require("./userServices");

exports.getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await userService.getUserById(Number(req.params.id));
  res.json(user);
};

exports.createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  res.json(user);
};

exports.updateUser = async (req, res) => {
  const user = await userService.updateUser(Number(req.params.id), req.body);
  res.json(user);
};

exports.deleteUser = async (req, res) => {
  const user = await userService.deleteUser(Number(req.params.id));
  res.json(user);
};
