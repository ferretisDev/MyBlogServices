import { Schema, model } from "mongoose";

const ArticleSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  img: {
    type: String,
    required: true,
  },
});

export default model("Article", ArticleSchema);
