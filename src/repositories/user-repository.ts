import { collections } from "../config/mongo-connection";
import User from "../models/user-model";

export namespace UserCollection {
    export function insertUser(newUser: User) {
        return collections.users?.insertOne(newUser)
    }

    export function findOneUser(query: Object){
        return collections.users?.findOne(query);
    }

    export function findAllUsers() {
        return collections.users?.find().toArray();
    }

    export function deleteOneUser(query: Object) {
        return collections.users?.deleteOne(query);
    }

    export function updateOneUser(query: Object, updatedUser: User) {
        return collections.users?.updateOne(query, { $set: updatedUser});
    }
}