const models = require("../models");

const getPhoneBrands = (req, res) => {
  models.phone_ref
    .findAll({ attributes: ["brand"], raw: true })
    .then((brands) => {
      const uniqueBrands = Array.from(
        new Set(brands.map((item) => item.brand))
      ); // Supprime les doublons
      res.json(uniqueBrands);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  getPhoneBrands,
};
