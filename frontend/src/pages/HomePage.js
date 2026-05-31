import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import api from "../lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";
import "./HomePage.css";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
      } catch (error) {
        console.error("Error loading notes", error);
        toast.error("Failed to load notes");
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <div className="container notes-container">
        {loading && <div className="loading-text">Loading notes...</div>}
        {!loading && notes.length === 0 && <NotesNotFound />}
        {!loading && notes.length > 0 && (
          <div className="notes-grid">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
