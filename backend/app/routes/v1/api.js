const express = require("express");
const router = new express.Router();
const weatherController = require("../../controllers/weather");

router.post("/weathers", weatherController.getCityById);
router.post("/group", weatherController.getCitiesById);
router.post("/forecast", weatherController.getForecastById);
router.get("/weathers", weatherController.show);
router.put("/weathers", weatherController.update);
router.post("/weathers", weatherController.store);
router.delete("/weathers", weatherController.delete);

module.exports = router;
