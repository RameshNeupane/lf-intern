const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.static("./public/ball-collision"));

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT} ......`);
});
