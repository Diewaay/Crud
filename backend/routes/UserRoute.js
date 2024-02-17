// UserRoute.js
import {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/UserController.js";
import express from "express";

const routes = express.Router();

routes.get("/users", getUsers);
routes.get("/users/:id", getUsersById);
routes.post("/users", createUser);
routes.patch("/users/:id", updateUser);
routes.delete("/users/:id", deleteUser);

export default routes;
