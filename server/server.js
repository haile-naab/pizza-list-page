const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
require("./config/mongoose.config");
require("./routers/login.routes")(app);
app.listen(8000, () => {
  console.log("Listening at Port 8000");
});
