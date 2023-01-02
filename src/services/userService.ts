import express, { Request, Response, Express } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../models/mongo";
import User from "../models/user";

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const newUser = req.body as User;
        const result = await collections.users?.insertOne(newUser)
        console.log(result)

        result
            ? res.status(201).send(`Successfully created a new user with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new user.");
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const query = { _id: new ObjectId(id) };
        const result = await collections.users?.findOne(query);

        result
            ? res.status(201).send(result)
            : res.status(404).send("User not found.");
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.get('/', async (req: Request, res: Response) => {
    try {
        const result = await collections.users?.find().toArray();

        result
            ? res.status(201).send(result)
            : res.status(404).send("User not found.");
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

export default router