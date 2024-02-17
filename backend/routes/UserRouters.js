import express from "express";
import { getUsers } from "../controllers/UserControllers";

const UserRouters = express.Router();

router.get("/users", getUsers);

export default UserRouters;
