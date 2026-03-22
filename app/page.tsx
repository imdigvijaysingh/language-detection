'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { Sparkles, Languages, AlertCircle, Loader2 } from 'lucide-react';

export default function Home() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<{ language: string; confidence: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const detectLanguage = async () => {
    if (!text.trim()) return;
    
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/detect', { text });
      setResult(response.data);
    } catch (err) {
      setError('Failed to detect language. Please try again.');
      console.error('Error detecting language:', err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-4xl w-full z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white/50 backdrop-blur-sm rounded-2xl shadow-sm mb-6 border border-white/50">
            <Languages className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 mb-6 tracking-tight">
            Language Detective
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Instantly identify the language of any text using our advanced machine learning algorithm.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          
          {/* Input Section */}
          <div className="md:col-span-7 space-y-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-white">
                <textarea
                  className="w-full h-64 p-6 bg-transparent resize-none text-gray-800 text-lg placeholder-gray-400 focus:outline-none"
                  placeholder="Paste or type your text here to detect its origin..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  disabled={loading}
                />
              </div>
            </div>
            
            <button
              onClick={detectLanguage}
              disabled={loading || !text.trim()}
              className="w-full relative group overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl h-16 font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full -translate-x-full transition-transform duration-500 ease-in-out skew-x-12"></div>
              <div className="flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Analyzing Text...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-6 h-6" />
                    Detect Language
                  </>
                )}
              </div>
            </button>

            {error && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50/80 backdrop-blur border border-red-100 p-4 rounded-xl animate-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="font-medium">{error}</p>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="md:col-span-5 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-25"></div>
            <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 border border-white text-center min-h-[300px] transition-all duration-500">
              
              {!result && !loading && (
                <div className="text-gray-400 space-y-4 animate-pulse">
                  <Languages className="w-16 h-16 mx-auto opacity-50" />
                  <p className="text-lg font-medium">Awaiting Input...</p>
                </div>
              )}

              {loading && (
                <div className="space-y-4">
                  <Loader2 className="w-12 h-12 mx-auto text-indigo-500 animate-spin" />
                  <p className="text-indigo-600 font-medium animate-pulse">Running Neural Networks...</p>
                </div>
              )}

              {result && !loading && (
                <div className="w-full animate-in zoom-in duration-500">
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Detected Language</p>
                  <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600 mb-8 capitalize">
                    {result.language}
                  </h2>
                  
                  <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-bold text-gray-500 uppercase">Confidence</span>
                      <span className="text-2xl font-black text-indigo-600">{Math.round(result.confidence * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{ width: `${result.confidence * 100}%` }}
                      >
                         <div className="absolute top-0 left-0 w-full h-full bg-white/30 animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}