import express, { Request, Response, Express } from "express";
import { collections } from "../models/mongo";
import User from "../models/user";

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const newUser = req.body as User;
        const result = await collections.users?.insertOne(newUser)
        console.log(result)

        result
            ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new game.");
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})

export default router