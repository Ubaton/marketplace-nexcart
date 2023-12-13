// Chat.jsx
import { Send } from "lucide-react";
import React, { useState, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    setMessages([
      { id: 1, sender: "User1", text: "Hello, how can I help you?" },
      { id: 2, sender: "User2", text: "I'm interested in your products." },
    ]);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") {
      return;
    }
    // Add the new message to the messages state
    const newMessageObj = {
      id: messages.length + 1,
      sender: "User1",
      text: newMessage,
    };

    setMessages([...messages, newMessageObj]);
    setNewMessage("");
  };

  return (
    <div className="bg-object rounded-3xl w-48 h-96 relative">
      <h1 className="flex flex-row items-center justify-center p-2 gap-2 text-lg font-bold">
        Chart Room
      </h1>
      <div className="flex flex-col items-start justify-start space-y-2 p-2 h-full overflow-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${
              message.sender === "User1" ? "text-right" : "text-left"
            }`}
          >
            <p className="font-semibold">{message.sender}: </p>
            {message.text}
          </div>
        ))}
        <div className="flex flex-row">
          <div className="flex items-center justify-between bg-primary rounded-full w-full">
            <div>
              <input
                type="text"
                placeholder="   Message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className=" bg-primary text-gray-50 h-10 rounded-full w-full"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="flex items-center justify-center  bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 rounded-full w-10 h-10 "
                onClick={handleSendMessage}
              >
                <Send />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
