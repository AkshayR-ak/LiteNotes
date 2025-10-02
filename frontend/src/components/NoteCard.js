import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";
import "./NoteCard.css";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link to={`/note/${note._id}`} className="note-card">
      <div className="card-body">
        <h3 className="card-title">{note.title}</h3>
        <p className="card-content">{note.content}</p>
        <div className="card-actions">
          <span className="card-date">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="card-buttons">
            <PenSquareIcon className="edit-icon" />
            <button
              className="delete-btn"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="delete-icon" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;