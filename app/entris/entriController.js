const entriService = require("./entriServices");

exports.getEntris = async (req, res) => {
  const entris = await entriService.getEntris();
  res.json(entris);
};

exports.getEntriById = async (req, res) => {
  const entri = await entriService.getEntriById(Number(req.params.id));
  res.json(entri);
};

exports.createEntri = async (req, res) => {
  const entri = await entriService.createEntri(req.body);
  res.json(entri);
};

exports.updateEntri = async (req, res) => {
  const entri = await entriService.updateEntri(Number(req.params.id), req.body);
  res.json(entri);
};

exports.deleteEntri = async (req, res) => {
  const entri = await entriService.deleteEntri(Number(req.params.id));
  res.json(entri);
};
