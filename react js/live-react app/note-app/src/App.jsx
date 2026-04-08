import { useState, useEffect } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes"));
    if (saved) setNotes(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add note
  const addNote = () => {
    if (!text.trim()) return;

    const newNote = {
      id: Date.now(),
      text,
      color: getRandomColor(),
    };

    setNotes([newNote, ...notes]);
    setText("");
  };

  // Delete note
  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  // Edit note
  const editNote = (id) => {
    const newText = prompt("Edit note:");
    if (!newText) return;

    setNotes(
      notes.map((n) =>
        n.id === id ? { ...n, text: newText } : n
      )
    );
  };

  // Random color
  const getRandomColor = () => {
    const colors = [
      "bg-yellow-200",
      "bg-green-200",
      "bg-blue-200",
      "bg-pink-200",
      "bg-purple-200",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Filter notes
  const filteredNotes = notes.filter((n) =>
    n.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">

      <h1 className="text-3xl font-bold text-center mb-6">
        Notes App 📝
      </h1>

      {/* Input */}
      <div className="max-w-xl mx-auto mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Write a note..."
          className="flex-1 p-2 rounded bg-gray-800 outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={addNote}
          className="bg-blue-500 px-4 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search notes..."
          className="w-full p-2 rounded bg-gray-800 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Notes Grid */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className={`${note.color} text-black p-4 rounded shadow relative`}
          >
            <p>{note.text}</p>

            <div className="flex justify-between mt-4 text-sm">
              <button
                onClick={() => editNote(note.id)}
                className="text-blue-600"
              >
                Edit
              </button>

              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}