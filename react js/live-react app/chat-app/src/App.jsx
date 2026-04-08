import { useState } from "react";

export default function App() {
  const [users] = useState([
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Priya" },
  ]);

  const [activeUser, setActiveUser] = useState(users[0]);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!", sender: "Rahul" },
    { id: 2, text: "Hi 👋", sender: "me" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = {
      id: Date.now(),
      text: input,
      sender: "me",
    };

    setMessages([...messages, newMsg]);
    setInput("");
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">

      {/* Sidebar */}
      <div className="w-1/3 md:w-1/4 bg-gray-800 p-4">
        <h2 className="text-xl font-bold mb-4">Chats 💬</h2>

        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => setActiveUser(user)}
            className={`p-2 rounded cursor-pointer mb-2 ${
              activeUser.id === user.id
                ? "bg-blue-500"
                : "hover:bg-gray-700"
            }`}
          >
            {user.name}
          </div>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex flex-col flex-1">

        {/* Header */}
        <div className="p-4 bg-gray-800 border-b border-gray-700">
          <h2 className="font-semibold">{activeUser.name}</h2>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-xs p-2 rounded ${
                msg.sender === "me"
                  ? "bg-blue-500 ml-auto"
                  : "bg-gray-700"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 bg-gray-800 flex gap-2">
          <input
            type="text"
            className="flex-1 p-2 rounded bg-gray-700 outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button
            onClick={sendMessage}
            className="bg-blue-500 px-4 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </div>

      </div>

    </div>
  );
}