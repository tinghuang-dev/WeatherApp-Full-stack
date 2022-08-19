const openweathermapServiceAPI = require("../services/openweathermapServiceAPI");

//GET ALL
exports.getCityById = async (req, res) => {
  const { id } = req.body;

  const result = await openweathermapServiceAPI.getWeather(id);
  res.send(result.data);
};

//POST
exports.store = (req, res) => {
  res.send("Done1!");
};

//PUT
exports.update = (req, res) => {
  res.send("Done2!");
};

//GET ONE
exports.show = (req, res) => {
  res.send("Done3!");
};

//DELETE
exports.delete = (req, res) => {
  res.send("Done4!");
};
