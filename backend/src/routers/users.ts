import { Router } from "express";
import notVerifiedController from "../controllers/users/not-verified";
import verifyController from "../controllers/users/verify";
import deleteController from "../controllers/users/delete";
import users from "../controllers/users/users";

const router = Router();

router.get("/all", notVerifiedController);
router.get("/users",users)
router.post("/verify", verifyController);
router.delete("/delete/:id", deleteController);

export default router;
