import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPost extends Document {
  title: string;
  content: string;
  authorId: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
