const { calculateStock, calculateHerd } = require("../services/yakService");

// Get stock after T days
const getStock = (req, res) => {
  const days = parseInt(req.params.T);
  const stock = calculateStock(days);
  res.json(stock);
};

// Get herd after T days
const getHerd = (req, res) => {
  const days = parseInt(req.params.T);
  const herd = calculateHerd(days);
  res.json({ herd });
};

module.exports = { getStock, getHerd };
