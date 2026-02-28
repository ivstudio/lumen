import mongoose, { Schema, Model } from 'mongoose';
import { IPost } from '@/types/models';

const PostSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [1, 'Title must be at least 1 character'],
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    authorId: {
      type: String,
      required: [true, 'Author ID is required'],
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

PostSchema.index({ authorId: 1, published: 1 });

const Post: Model<IPost> =
  mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);

export default Post;
