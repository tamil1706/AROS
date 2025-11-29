
import React from 'react';
import { Message as MessageType, Role } from '../types';
import { marked } from 'marked';

const UserIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const BotIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8" />
    <rect x="4" y="12" width="16" height="8" rx="2" />
    <path d="M2 12h2" /><path d="M20 12h2" /><path d="M12 12v-2" />
    <path d="M12 20v-4" /><path d="M9 12a3 3 0 0 0-3-3" /><path d="M9 12a3 3 0 0 1-3-3" />
    <path d="M15 12a3 3 0 0 0 3-3" /><path d="M15 12a3 3 0 0 1 3-3" />
  </svg>
);

const ErrorIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const Message: React.FC<{ message: MessageType }> = ({ message }) => {
  const { role, text } = message;
  const isUser = role === Role.USER;
  const isError = role === Role.ERROR;

  const containerClasses = isUser ? 'justify-end' : 'justify-start';
  const bubbleClasses = isUser
    ? 'bg-purple-600 rounded-br-none'
    : isError
    ? 'bg-red-800/80 border border-red-600 rounded-bl-none'
    : 'bg-slate-700 rounded-bl-none';
  const iconColor = isUser ? 'text-white' : isError ? 'text-red-400' : 'text-cyan-400';
  
  const parsedText = marked.parse(text);

  return (
    <div className={`flex items-start gap-3 ${containerClasses}`}>
      {!isUser && (
        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center ${iconColor}`}>
          {isError ? <ErrorIcon /> : <BotIcon />}
        </div>
      )}
      <div
        className={`max-w-xs md:max-w-md lg:max-w-2xl px-5 py-3 rounded-2xl ${bubbleClasses} prose prose-invert prose-sm text-white`}
        dangerouslySetInnerHTML={{ __html: parsedText as string }}
      />
      {isUser && (
        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center ${iconColor}`}>
          <UserIcon />
        </div>
      )}
    </div>
  );
};

export default Message;
