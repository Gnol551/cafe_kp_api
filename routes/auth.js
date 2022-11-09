const router = require("express").Router();
const pool = require("../queries");

router.get("/", (req, res) => {
  res.send({ id: 3, name: "Coffee" });
});

router.post("/", async (req, res) => {
  try {
    let result;
    const username = req.body.username;
    const password = req.body.password;

    const users = await pool.query(
      `SELECT * FROM users WHERE username = $1 and password = $2;`,
      [username, password]
    );

    if (users.rows.length) {
      result = true;
    } else {
      result = false;
    }

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
});

router.put("/", (req, res) => {
  res.send({ id: 3, name: "Coffee" });
});

router.delete("/", (req, res) => {
  res.send({ id: 3, name: "Coffee" });
});

module.exports = router;
