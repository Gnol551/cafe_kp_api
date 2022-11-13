const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({ id: 4, name: "Milk" });
});

module.exports = router;
