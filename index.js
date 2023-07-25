const express = require("express");
const joi = reuqire("joi");

PORT = 3000;
app = express();

app.get("/", () => {
  console.log("Hello from homepage");
});

app.get("/about", () => {
  console.log("Hello from about page");
});

app.listen(PORT, () =>
  console.log(`Server is listenning on the port: ${PORT}`)
);
