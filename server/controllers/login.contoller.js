const Login = require("../models/login.model");

module.exports.createNewUser = (req, res) => {
  Login.create(req.body)
    .then((newCreatedUser) => {
      console.log(res.json({ user: newCreatedUser }));
      res.json({ user: newCreatedUser });
    })
    .catch((err) => {
      res.json({ message: "somthing is wrong", error: err });
    });
};

module.exports.findUser = async (req, res) => {
  //res.json({ user: userFound });

  const user = await Login.findOne({ username: req.body.username });
  if (user.password === req.body.password) {
    return res.json({ message: "user found found" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }

  // .then((userFound) => {
  //   if () {
  //     res.status(200).json({ message: "Login successful" });
  //   } else {
  //     res.status(401).json({ message: "Invalid username or password" });
  //   }
  // });
};
