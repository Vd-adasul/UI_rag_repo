"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircleMore, Languages, Brain, Handshake, ScrollText, Upload, Bot, UserCheck, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-36 lg:py-48 bg-gradient-to-br from-blue-700 to-purple-800 text-white flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[url('/public/placeholder.svg')] bg-cover bg-center"></div>
          <div className="relative z-10 container px-6 md:px-8 lg:px-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-8 drop-shadow-lg">
              Empowering Campus Communication: <br className="hidden md:inline"/> Your Multilingual AI Assistant
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto mb-12 opacity-90 font-light">
              Bridging language barriers for seamless student support and efficient administration.
              Get instant answers to all your campus queries, in your preferred language.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-gray-100 hover:text-blue-900 text-xl px-10 py-7 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <Link to="/signup">
                Get Started for Free <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
          <div className="container px-6 md:px-8 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Key Features</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
              Designed to revolutionize campus information access and support with cutting-edge AI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <Languages className="h-14 w-14 text-blue-600 dark:text-blue-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Multilingual Understanding</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Recognizes and responds in English, Hindi, and multiple regional languages, ensuring equitable access for all students.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <Brain className="h-14 w-14 text-green-600 dark:text-green-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Contextual Conversations</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Maintains context across multiple turns for natural, helpful, and relevant interactions, just like talking to a human.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <MessageCircleMore className="h-14 w-14 text-red-600 dark:text-red-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Intelligent Query Resolution</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Accurately identifies student intent to provide precise answers from institutional FAQs and documents.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <Handshake className="h-14 w-14 text-yellow-600 dark:text-yellow-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Seamless Human Handover</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Automatically escalates complex or unresolved queries to human staff, ensuring no student is left without support.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <ScrollText className="h-14 w-14 text-indigo-600 dark:text-indigo-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Conversation Logs & Analytics</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Logs all interactions for review and continuous improvement, helping to refine responses and identify common queries.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <img src="/public/placeholder.svg" alt="Integration Icon" className="h-14 w-14 text-purple-600 dark:text-purple-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Web & Messaging Integration</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Embed the chatbot on your college website and popular messaging platforms for maximum reach and accessibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-32 bg-gray-100 dark:bg-gray-950">
          <div className="container px-6 md:px-8 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">How It Works</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
              A simple, powerful process to enhance campus communication.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="bg-blue-600 text-white p-4 rounded-full mb-6 shadow-md">
                  <Upload className="h-9 w-9" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">1. Ingest Data</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Upload your institutional FAQs, circulars, and documents. Our system processes this information.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="bg-green-600 text-white p-4 rounded-full mb-6 shadow-md">
                  <Bot className="h-9 w-9" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">2. AI Processes</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Our AI learns from your data, understanding context and intent across multiple languages.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="bg-purple-600 text-white p-4 rounded-full mb-6 shadow-md">
                  <UserCheck className="h-9 w-9" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">3. Student Interaction</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Students ask questions in their preferred language and receive instant, accurate responses.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="bg-red-600 text-white p-4 rounded-full mb-6 shadow-md">
                  <BarChart className="h-9 w-9" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">4. Continuous Improvement</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Conversation logs and analytics help refine responses and identify areas for enhancement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32 bg-white dark:bg-gray-800">
          <div className="container px-6 md:px-8 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Benefits for Your Campus</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
              Transforming student support and administrative efficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              <div className="flex flex-col items-center text-center p-6">
                <div className="bg-blue-100 dark:bg-blue-900 p-5 rounded-full mb-6 shadow-md">
                  <span className="text-blue-700 dark:text-blue-300 text-4xl font-bold">24/7</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Round-the-Clock Information</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Students get instant answers anytime, anywhere, reducing wait times and improving satisfaction.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="bg-green-100 dark:bg-green-900 p-5 rounded-full mb-6 shadow-md">
                  <span className="text-green-700 dark:text-green-300 text-4xl font-bold">🚀</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Boost Staff Productivity</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Automate routine queries, freeing up staff to focus on more complex and critical tasks.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="bg-purple-100 dark:bg-purple-900 p-5 rounded-full mb-6 shadow-md">
                  <span className="text-purple-700 dark:text-purple-300 text-4xl font-bold">🤝</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Enhanced Student Experience</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Provide a modern, user-friendly, and inclusive way for students to get the information they need.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="bg-yellow-100 dark:bg-yellow-900 p-5 rounded-full mb-6 shadow-md">
                  <span className="text-yellow-700 dark:text-yellow-300 text-4xl font-bold">⚖️</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Equitable Access</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Break down language barriers, ensuring all students, regardless of their preferred language, receive timely support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
          <div className="container px-6 md:px-8 lg:px-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Campus Communication?</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 opacity-90 font-light">
              Join us in building a smarter, more inclusive educational environment.
            </p>
            <Button asChild size="lg" className="bg-white text-indigo-800 hover:bg-gray-100 hover:text-indigo-900 text-xl px-10 py-7 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300">
              <Link to="/signup">
                Start Your Journey <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;