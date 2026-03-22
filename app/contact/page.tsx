'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50">
      
      {/* Decorative Blob */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

      <div className="w-full max-w-xl z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          
          <div className="px-8 py-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-bold tracking-tight mb-2">Get in Touch</h2>
            <p className="text-blue-100">Have questions about our detection model? Drop a line.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
              <input 
                id="name"
                type="text" 
                required
                className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-900"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
              <input 
                id="email"
                type="email" 
                required
                className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-900"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 ml-1">Message</label>
              <textarea 
                id="message"
                required
                rows={4}
                className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none text-gray-900"
                placeholder="How accurate is the Arabic detection model?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-4 px-8 rounded-2xl font-bold hover:bg-indigo-600 transition-colors duration-300 group"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Sent Successfully
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Message
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
