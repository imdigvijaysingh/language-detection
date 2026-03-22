import React from 'react';
import { Database, Brain, Zap, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white overflow-hidden relative pt-12 pb-24">
      {/* Decorative Gradient Splashes */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 animate-blob"></div>
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 animate-blob animation-delay-4000"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            The Science Behind Our <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Language Detective</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We combined modern web technologies with classical machine learning to give you lightning-fast, highly accurate language detection directly in your browser.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 hover:-translate-y-1 transition duration-300">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Naive Bayes Algorithm</h3>
            <p className="text-gray-600 leading-relaxed">
              At the core sits a <strong>Multinomial Naive Bayes</strong> classifier implemented in Python using Scikit-Learn. It excels at text classification by mathematically calculating the probability of a language given the frequency of its characters and words.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 hover:-translate-y-1 transition duration-300">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Dataset</h3>
            <p className="text-gray-600 leading-relaxed">
              The model was trained on a strictly curated dataset comprising thousands of sample texts natively written in 22 distinct languages. The model breaks text down using a <code>CountVectorizer</code> to learn unique vocabulary distributions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 hover:-translate-y-1 transition duration-300">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">FastAPI Microservice</h3>
            <p className="text-gray-600 leading-relaxed">
              The Python machine learning brain operates inside an incredibly fast, minimalist web framework called FastAPI, which evaluates and returns predictions with microsecond latency.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 hover:-translate-y-1 transition duration-300">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Next.js Edge Delivery</h3>
            <p className="text-gray-600 leading-relaxed">
              Everything the user interacts with is served statically at the literal edge of the network using modern Next.js React, styled meticulously with Tailwind CSS for beauty and speed.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
