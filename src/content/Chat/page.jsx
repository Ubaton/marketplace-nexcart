"use client";

import { Send } from "lucide-react";
import React, { useState, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Fetch messages or set initial messages here
    // For simplicity, we'll initialize with some dummy messages
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
    setNewMessage(""); // Clear the input field after sending the message
  };

  return (
    <div className="bg-object rounded-3xl w-48 h-96">
      <h1 className="flex flex-row items-center justify-center p-2 gap-2 text-lg font-bold hover:text-gray-300">
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
            <span className="font-semibold">{message.sender}: </span>
            {message.text}
          </div>
        ))}
        <div className="flex items-center justify-between pt-28">
          <input
            type="text"
            placeholder="Message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="relative bg-primary text-gray-50 h-10 rounded-full w-full pl-2"
          />
          <span className="absolute pl-28">
            <button
              className=" bg-gradient-to-r from-blue-300 via-blue-500 to-violet-800 rounded-full w-10 h-10"
              onClick={handleSendMessage}
            >
              <span className="flex items-center justify-center">
                <Send />
              </span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
