const express = require("express");

PORT = 3001;
app = express();

app.listen(PORT, () =>
  console.log(`Server is listenning on the port: ${PORT}`)
);
