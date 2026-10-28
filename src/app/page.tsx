'use client';

import React, { useState } from 'react';
import { Paperclip, ArrowUp, History, Car, Sparkles, BatteryCharging  } from 'lucide-react';

export default function ChatPage() {
  const [inputValue, setInputValue] = useState('');

  const suggestions = [
    { label: 'Classify electric vehicle batteries from China', icon: <BatteryCharging className="w-4 h-4 text-green-500" /> },
    { label: 'Exporting cars to Canada', icon: <Car className="w-4 h-4 text-blue-500" /> },
    { label: 'What is the import duty on computer laptops from Taiwan?', icon: '💻' },
    { label: 'Import perfumes from France', icon: <Sparkles className="w-4 h-4 text-purple-500" /> },
  ];

  return (
    <div className="bg-[#f9f6f0] text-[#191919] font-sans min-h-screen flex flex-col antialiased">
      {/* Header Navigation */}
      <header className="w-full h-14 border-b border-[#e5e0d8] bg-[#f9f6f0]/80 backdrop-blur-md px-6 flex items-center justify-between fixed top-0 z-50">
        {/* Brand Mark (Top Left) */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-7 h-7 bg-[#dc143c] rounded-lg flex items-center justify-center text-white font-bold text-sm">
            <span>TB</span>
          </div>
          <span className="font-semibold text-lg tracking-tight">Tariffboard</span>
        </div>

        {/* Right side nav items */}
        {/* <div className="flex items-center space-x-4 text-sm text-gray-600">
          <button className="flex items-center space-x-1 hover:text-black transition">
            <History className="w-4 h-4" />
            <span>History</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-[#e5e0d8] flex items-center justify-center font-medium text-xs cursor-pointer hover:bg-[#dbd5cb] transition">
            U
          </div>
        </div> */}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-14 pb-8 max-w-3xl w-full mx-auto">
        {/* Welcome / Greeting State */}
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-4xl font-serif font-medium text-[#191919]">
            Coming Soon!
          </h1>
        </div>

        {/* Chat Input & Pill Container */}
        <div className="w-full space-y-4">
          {/* Chat Box */}
          <div className="bg-white rounded-2xl border border-[#e5e0d8] shadow-sm focus-within:border-[#d97706] focus-within:ring-1 focus-within:ring-[#d97706] transition-all p-4 flex flex-col min-h-[140px]">
            {/* Textarea for user input */}
            <textarea
              className="w-full flex-1 resize-none outline-none text-base placeholder-gray-400 bg-transparent text-[#191919]"
              placeholder="Ask me..."
              rows={3}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            {/* Action toolbar inside the box */}
            <div className="flex items-center justify-between pt-2 mt-2 border-t border-gray-50">
              {/* Left actions */}
              <div className="flex items-center space-x-2 text-gray-400">
                <button
                  type="button"
                  className="p-2 hover:bg-gray-100 hover:text-gray-600 rounded-lg transition"
                  title="Attach file"
                >
                  <Paperclip className="w-5 h-5" />
                </button>
              </div>

              {/* Submit button */}
              <button
                type="button"
                className="p-2 bg-[#dc143c] hover:bg-gray-800 text-white rounded-xl transition flex items-center justify-center"
                title="Send message"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Suggestion Pills */}
          <div className="flex flex-wrap gap-2 justify-center text-sm text-gray-600">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setInputValue(suggestion.label)}
                className="flex px-4 py-2 bg-white hover:bg-gray-50 border border-[#e5e0d8] rounded-xl transition duration-200 text-left active:scale-95"
              >
                <span className="pr-2">{suggestion.icon}</span><span>{suggestion.label}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
