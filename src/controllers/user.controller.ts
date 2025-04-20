import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";

export const registerUser = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        const {username , password , email, fullname} = req.body
        
    }
);
