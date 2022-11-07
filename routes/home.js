const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({ id: 3, name: "Coffee" });
});

router.post("/", (req, res) => {
  res.send({ id: 3, name: "Coffee" });
});

router.put("/", (req, res) => {
  res.send({ id: 3, name: "Coffee" });
});

router.delete("/", (req, res) => {
  res.send({ id: 3, name: "Coffee" });
});

module.exports = router;
