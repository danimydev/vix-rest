import express from "express";

import * as repository from "./repository";

const router = express.Router();

router.get("/", (_req, res) => {
  return res
    .status(200)
    .json(repository.get())
});

router.get("/:id", (req, res) => {
  return res
    .status(200)
    .json(repository.getOne({
      id: parseInt(req.params.id),
    }));
});

router.post("/", (req, res) => {
  return res
    .status(201)
    .json(repository.create({
      name: req.body.name,
    }));
});

router.patch("/:id", (req, res) => {
  repository.update({
    id: parseInt(req.params.id),
    values: req.body,
  });
  return res
    .status(200)
    .json("OK");
});

router.delete("/:id", (req, res) => {
  repository.remove({
    id: parseInt(req.params.id),
  });
  return res
    .status(200)
    .json("OK");
});

export default router;
