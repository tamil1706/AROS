
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Message as MessageType, Role } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import Message from './Message';
import MessageInput from './MessageInput';
import LoadingIndicator from './LoadingIndicator';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      role: Role.MODEL,
      text: "Hello! I'm a friendly AI assistant powered by Gemini. How can I help you today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = useCallback(async (inputText: string) => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: MessageType = { role: Role.USER, text: inputText };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);

    try {
      const botResponseText = await sendMessageToGemini(inputText);
      const botMessage: MessageType = { role: Role.MODEL, text: botResponseText };
       if (botResponseText.includes("encountered an error")) {
          botMessage.role = Role.ERROR;
      }
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      const errorMessage: MessageType = {
        role: Role.ERROR,
        text: 'An unexpected error occurred. Please check the console for details.',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow p-4 sm:p-6 overflow-y-auto space-y-6">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
        {isLoading && <LoadingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 sm:p-6 border-t border-slate-700 bg-slate-900/80">
        <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ChatInterface;
