import { NotebookIcon } from "lucide-react";
import { Link } from "react-router-dom";
import "./NotesNotFound.css";

const NotesNotFound = () => {
  return (
    <div className="not-found-container">
      <div className="icon-wrapper">
        <NotebookIcon className="icon" />
      </div>
      <h3 className="title">No notes yet</h3>
      <p className="description">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>
      <Link to="/create" className="btn btn-primary">
        Create Your First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;