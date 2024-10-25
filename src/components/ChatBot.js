import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ChatBot.css';  // Assuming you will handle the styles here

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [userMessage, setUserMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);  // For controlling chatbot visibility

    const sendMessage = async () => {
        if (userMessage.trim()) {  // Ensure that an empty message isn't sent
            const newMessage = { sender: 'user', text: userMessage };

            // Update the messages state first
            setMessages(prevMessages => [...prevMessages, newMessage]);

            try {
                const response = await axios.post('http://localhost:4000/chatbot', { message: userMessage }); // Full URL
                const botMessage = { sender: 'bot', text: response.data.response };

                // Update messages state with both user and bot messages in one go
                setMessages(prevMessages => [...prevMessages, botMessage]);
            } catch (error) {
                console.error("Error sending message", error);
                const errorMessage = { sender: 'bot', text: "Something went wrong. Please try again." };

                // Update messages state with the error message
                setMessages(prevMessages => [...prevMessages, errorMessage]);
            }

            // Clear the user message input
            setUserMessage('');
        }
    };

    return (
        <div className={`chatbot-wrapper ${isOpen ? 'open' : ''}`}>
            {/* Floating Chatbot Icon */}
            <div className="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>
                <img src="https://cdn-icons-png.flaticon.com/512/8943/8943377.png" alt="Chatbot Icon" /> {/* Add your chatbot icon image */}
            </div>

            {/* Chatbox */}
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
                                    e.preventDefault(); // Prevent form submission if needed
                                    sendMessage(); // Send message on Enter key press
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