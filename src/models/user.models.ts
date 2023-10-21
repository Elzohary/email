import { ObjectId, MongoClient } from 'mongodb';


export interface User {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
}


export class UserModel {
  private static collectionName = 'users';

  static async createUser(user: User): Promise<User> {
    const client = await MongoClient.connect('DB_URI');
    const db = client.db('users-db');
    const usersCollection = db.collection<User>(UserModel.collectionName);
    user._id = new ObjectId();
    await usersCollection.insertOne(user);
    client.close();
    return user;
  }

  static async getUserById(id: string): Promise<User | null> {
    const client = await MongoClient.connect('DB_URI');
    const db = client.db('users-db');
    const usersCollection = db.collection<User>(UserModel.collectionName);
    const user = await usersCollection.findOne({ _id: new ObjectId(id) });
    client.close();
    return user;
  }
}