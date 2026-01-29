import express from "express";
import { UserChangePhoto, UserUpdate } from "../controllers/userController.js";
import { Protect } from "../middlewares/authMiddleware.js";
import multer from "multer";

const router = express.Router();
const Upload = multer();

router.put("/update", Protect,UserUpdate);
router.patch("/changePhoto",Protect,Upload.single("image"),UserChangePhoto);


export default router;