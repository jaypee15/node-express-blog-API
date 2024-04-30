const { Schema, model } = require("mongoose");

// Define the schema for the blog post
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    featured_image: String,
    likes: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: [
      {
        author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        text: String,
      },
    ],

    tags: [String],
  },
  { timestamps: true }
);

// Create a model using the schema
const Post = model("Post", postSchema);

module.exports = Post;
