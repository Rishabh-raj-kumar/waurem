import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8080'); // Replace with your server URL

function ChatWindow({ chatId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      if (message.chatId === chatId) {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    });

    return () => {
      socket.off('message');
    };
  }, [chatId]);

  // ... other chat logic

  return (
    <>
    <h1>Hello world</h1>
    </>
  );
}

export default ChatWindow;
