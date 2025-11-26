const authService = require("./authServices");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const resp = await authService.login(email, password);
  res.json(resp);
};

exports.register = async (req, res) => {
  const resp = await authService.register(req.body);
  res.json(resp);
};
