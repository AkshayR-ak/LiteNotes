import Note from "../model/Note.model.js"

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({updatedAt:-1}); //to list based on prevesiouly edited note
        res.status(200).json(notes);
    } catch (error) {
        console.log(`Error in getAllNotes controller : ${error}`);
        res.status(500).json({error: "Internal Server error"})
    }
};

export const getNoteById = async (req, res)=>{
    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found"});
        res.json(note);
    } catch (error) {
        console.log(`Error in getNoteById controller : ${error}`);
        res.status(500).json({error: "Internal Server error"})
    }
}

export const createNote = async (req, res) => {
    try {
        const {title,content} = req.body;

        const newNote = new Note({title,content});
        await newNote.save();

        res.status(200).json(newNote);
    } catch (error) {
        console.log(`Error in createNote controller : ${error}`);
        res.status(500).json({error: "Internal Server error"})
    }
};

export const updateNote = async  (req, res) => {
    try {
        const {title,content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title,content},{
            new:true //it will give new value of the updated
        })
        if(!updatedNote) return res.status(404).json({message:"Note not found"});
        res.status(200).json(updatedNote);
    } catch (error) {
        console.log(`Error in updateNote controller : ${error}`);
        res.status(500).json({error: "Internal Server error"})
    }
};

export const deleteNote = async (req, res) => {
   try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found"});
        res.status(200).json({message:"Note deleted successfully"});
    } catch (error) {
        console.log(`Error in deleteNote controller : ${error}`);
        res.status(500).json({error: "Internal Server error"})
    }
};
