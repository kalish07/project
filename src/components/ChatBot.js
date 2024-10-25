import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ChatBot.css';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [userMessage, setUserMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const sendMessage = async () => {
        if (userMessage.trim()) {
            const newMessage = { sender: 'user', text: userMessage };
            setMessages(prevMessages => [...prevMessages, newMessage]);

            try {
                const response = await axios.post('http://localhost:4000/chatbot', { message: userMessage });
                const botMessage = { sender: 'bot', text: response.data.response };
                setMessages(prevMessages => [...prevMessages, botMessage]);
            } catch (error) {
                const errorMessage = { sender: 'bot', text: "Something went wrong. Please try again." };
                setMessages(prevMessages => [...prevMessages, errorMessage]);
            }

            setUserMessage('');
        }
    };

    return (
        <div className={`chatbot-wrapper ${isOpen ? 'open' : ''}`}>
            <div className="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>
                <img src="https://cdn-icons-png.flaticon.com/512/8943/8943377.png" alt="Chatbot Icon" />
            </div>

            {isOpen && (
                <div className="chatbox">
                    <div className="chatbox-header">
                        <span>Chat with us</span>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
                    </div>
                    <div className="messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Ask me anything..."
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    sendMessage();
                                }
                            }}
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBot;