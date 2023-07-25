const express = require("express");
const joi = reuqire("joi");

PORT = 3000;
app = express();

app.get("/", () => {
  console.log("Hello from homepage");
});

app.listen(PORT, () =>
  console.log(`Server is listenning on the port: ${PORT}`)
);
