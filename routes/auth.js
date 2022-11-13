const router = require("express").Router();
const pool = require("../queries");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const resultGet = await pool.query(
      `SELECT * FROM users WHERE username = $1`,
      [username]
    );

    const user = resultGet.rows[0];
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found!", success: false, data: {} });
    }

    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      return res
        .status(400)
        .json({ message: "Password not match!", success: false, data: {} });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    return res
      .header("auth-token", token)
      .status(200)
      .json({ message: "Login successfully!", success: true, data: token });
  } catch (error) {
    console.log(error);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const newPassword = await bcrypt.hash(password, saltRounds);

    console.log(newPassword);
    const newUser = await pool.query(
      `insert into users (username , "password") values ($1, $2) RETURNING id;`,
      [username, newPassword]
    );
    res.send(newUser);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
