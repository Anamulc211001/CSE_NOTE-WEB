import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, MessageCircle, Sparkles, BookOpen, Code, Database } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI study assistant. I can help you with CSE concepts, study plans, coding problems, and academic guidance. What would you like to learn today?",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickSuggestions = [
    { icon: <Code className="h-4 w-4" />, text: "Explain algorithms", topic: "algorithms" },
    { icon: <Database className="h-4 w-4" />, text: "Database concepts", topic: "database" },
    { icon: <BookOpen className="h-4 w-4" />, text: "Study schedule", topic: "study" },
  ];

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('algorithm') || lowerMessage.includes('sorting') || lowerMessage.includes('search')) {
      return "Great question about algorithms! Here are some key points:\n\n• **Sorting Algorithms**: Bubble sort (O(n²)), Quick sort (O(n log n)), Merge sort (O(n log n))\n• **Search Algorithms**: Linear search (O(n)), Binary search (O(log n))\n• **Graph Algorithms**: BFS, DFS, Dijkstra's algorithm\n\nWould you like me to explain any specific algorithm in detail?";
    }
    
    if (lowerMessage.includes('database') || lowerMessage.includes('sql') || lowerMessage.includes('dbms')) {
      return "Database concepts are crucial for CSE! Here's what you should focus on:\n\n• **SQL Basics**: SELECT, INSERT, UPDATE, DELETE operations\n• **Database Design**: ER diagrams, normalization (1NF, 2NF, 3NF)\n• **ACID Properties**: Atomicity, Consistency, Isolation, Durability\n• **Indexing**: B-trees, hash indexing for performance\n\nNeed help with any specific database topic?";
    }
    
    if (lowerMessage.includes('study') || lowerMessage.includes('schedule') || lowerMessage.includes('plan')) {
      return "Here's an effective study plan for CSE students:\n\n**Daily Schedule:**\n• Morning (2 hours): Core subjects (DS, Algorithms)\n• Afternoon (1.5 hours): Programming practice\n• Evening (1 hour): Theory subjects (OS, Networks)\n\n**Weekly Goals:**\n• Solve 10-15 coding problems\n• Complete 1 major topic\n• Review previous week's concepts\n\nWhat specific subject would you like to focus on?";
    }
    
    if (lowerMessage.includes('programming') || lowerMessage.includes('code') || lowerMessage.includes('c++') || lowerMessage.includes('python')) {
      return "Programming is the foundation of CSE! Here's my advice:\n\n**Languages to Master:**\n• **C++**: Great for competitive programming and system programming\n• **Python**: Excellent for data science and rapid prototyping\n• **Java**: Important for enterprise applications\n\n**Practice Platforms:**\n• Codeforces, AtCoder for competitive programming\n• LeetCode for interview preparation\n• HackerRank for skill development\n\nWhich programming concept would you like to explore?";
    }
    
    if (lowerMessage.includes('network') || lowerMessage.includes('osi') || lowerMessage.includes('tcp')) {
      return "Computer Networks is fascinating! Key concepts:\n\n• **OSI Model**: 7 layers from Physical to Application\n• **TCP/IP**: Reliable connection-oriented protocol\n• **UDP**: Fast connectionless protocol\n• **Routing**: How data travels across networks\n• **Security**: Encryption, firewalls, VPNs\n\nWhich networking topic interests you most?";
    }
    
    if (lowerMessage.includes('operating system') || lowerMessage.includes('os') || lowerMessage.includes('process')) {
      return "Operating Systems concepts you should master:\n\n• **Process Management**: Creation, scheduling, synchronization\n• **Memory Management**: Virtual memory, paging, segmentation\n• **File Systems**: Directory structures, file allocation\n• **Deadlocks**: Prevention, avoidance, detection\n• **CPU Scheduling**: FCFS, SJF, Round Robin\n\nNeed clarification on any OS concept?";
    }
    
    return "That's an interesting question! As your AI study assistant, I'm here to help with:\n\n• **Core CSE Subjects**: Algorithms, Data Structures, DBMS, OS, Networks\n• **Programming Help**: C++, Python, Java concepts and debugging\n• **Study Planning**: Creating effective schedules and learning paths\n• **Career Guidance**: Interview prep, skill development\n\nCould you be more specific about what you'd like to learn? I'm here to make your CSE journey easier! 🚀";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickSuggestion = (suggestion: string) => {
    setInputText(suggestion);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-gradient-to-r from-sky-blue to-soft-green text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 ${isOpen ? 'hidden' : 'flex'} items-center space-x-2 group`}
      >
        <Bot className="h-6 w-6" />
        <Sparkles className="h-4 w-4 animate-pulse" />
        <span className="hidden sm:block font-medium">AI Study Assistant</span>
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
          !
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-blue to-soft-green text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Bot className="h-8 w-8" />
                <div className="absolute -bottom-1 -right-1 bg-green-400 rounded-full h-3 w-3 border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-semibold">AI Study Assistant</h3>
                <p className="text-xs opacity-90">Always here to help you learn</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-sky-blue text-white rounded-br-md'
                      : 'bg-gray-100 text-gray-800 rounded-bl-md'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">Quick suggestions:</p>
              <div className="flex flex-wrap gap-2">
                {quickSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickSuggestion(suggestion.text)}
                    className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-xs transition-colors"
                  >
                    {suggestion.icon}
                    <span>{suggestion.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about CSE..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="bg-sky-blue hover:bg-blue-600 disabled:bg-gray-300 text-white p-2 rounded-full transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;