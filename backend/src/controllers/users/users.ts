import { Request, Response } from "express";
import { User } from "../../entity/User";

export default async (req: Request, res: Response) => {
    const users = await User.find({
        where: { verified: true ,admin:false},
    });
    return res.send({ users })
}