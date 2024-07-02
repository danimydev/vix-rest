import express from "express";

import config from "./config";

import usersRouter from "./users/router";

const app = express();

app.use(express.json());
app.use("/api/users", usersRouter);

app.listen(config.port, () => {
  console.log(`Service listening on port ${config.port}`);
});
