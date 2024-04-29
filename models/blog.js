const { Schema, model } = require("mongoose");


// Define the schema for the blog post
const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  tags: [String],
});

// Create a model using the schema
const BlogPost = model("BlogPost", blogPostSchema);

module.exports = BlogPost;
