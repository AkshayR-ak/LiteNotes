import express from "express"
import { getAllNotes,createNote,updateNote,deleteNote, getNoteById } from "../controller/notesController.js";
const router = express.Router(); //Router() is used to create routes

router.get("/", getAllNotes);
router.get("/:id",getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;