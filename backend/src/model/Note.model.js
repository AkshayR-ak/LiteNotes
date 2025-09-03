import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({  //to create a schema with our requirements
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
},{timestamps: true}) //default method to create createdAt and updatedAt, which is useful

const Note = mongoose.model("Note" ,noteSchema);  //then creating model based on the schema

export default Note