import { Schema, model } from "mongoose";

const ArticleSchema = Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    img: {
        type: String,
        required: false,
        default: "default.png"
    },
});

export default model("Article", ArticleSchema);