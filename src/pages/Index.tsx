"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircleMore, Languages, Brain, Handshake, ScrollText, Upload, Bot, UserCheck, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-blue-600 to-purple-700 text-white flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/public/placeholder.svg')] bg-cover bg-center"></div>
          <div className="relative z-10 container px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
              Empowering Campus Communication: <br className="hidden md:inline"/> Your Multilingual AI Assistant
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
              Bridging language barriers for seamless student support and efficient administration.
              Get instant answers to all your campus queries, in your preferred language.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100 hover:text-blue-800 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <Link to="/signup">
                Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Key Features</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              Designed to revolutionize campus information access and support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Languages className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Multilingual Understanding</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Recognizes and responds in English, Hindi, and multiple regional languages, ensuring equitable access for all students.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Brain className="h-12 w-12 text-green-600 dark:text-green-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Contextual Conversations</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Maintains context across multiple turns for natural, helpful, and relevant interactions, just like talking to a human.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <MessageCircleMore className="h-12 w-12 text-red-600 dark:text-red-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Intelligent Query Resolution</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Accurately identifies student intent to provide precise answers from institutional FAQs and documents.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Handshake className="h-12 w-12 text-yellow-600 dark:text-yellow-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Seamless Human Handover</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Automatically escalates complex or unresolved queries to human staff, ensuring no student is left without support.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <ScrollText className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Conversation Logs & Analytics</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Logs all interactions for review and continuous improvement, helping to refine responses and identify common queries.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src="/public/placeholder.svg" alt="Integration Icon" className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Web & Messaging Integration</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Embed the chatbot on your college website and popular messaging platforms for maximum reach and accessibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-950">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">How It Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              A simple, powerful process to enhance campus communication.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="bg-blue-500 text-white p-3 rounded-full mb-4">
                  <Upload className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">1. Ingest Data</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Upload your institutional FAQs, circulars, and documents. Our system processes this information.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="bg-green-500 text-white p-3 rounded-full mb-4">
                  <Bot className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">2. AI Processes</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our AI learns from your data, understanding context and intent across multiple languages.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="bg-purple-500 text-white p-3 rounded-full mb-4">
                  <UserCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">3. Student Interaction</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Students ask questions in their preferred language and receive instant, accurate responses.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="bg-red-500 text-white p-3 rounded-full mb-4">
                  <BarChart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">4. Continuous Improvement</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Conversation logs and analytics help refine responses and identify areas for enhancement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Benefits for Your Campus</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              Transforming student support and administrative efficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-4">
                  <span className="text-blue-600 dark:text-blue-300 text-3xl font-bold">24/7</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Round-the-Clock Information</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Students get instant answers anytime, anywhere, reducing wait times and improving satisfaction.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full mb-4">
                  <span className="text-green-600 dark:text-green-300 text-3xl font-bold">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Boost Staff Productivity</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Automate routine queries, freeing up staff to focus on more complex and critical tasks.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full mb-4">
                  <span className="text-purple-600 dark:text-purple-300 text-3xl font-bold">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Enhanced Student Experience</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Provide a modern, user-friendly, and inclusive way for students to get the information they need.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-full mb-4">
                  <span className="text-yellow-600 dark:text-yellow-300 text-3xl font-bold">⚖️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Equitable Access</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Break down language barriers, ensuring all students, regardless of their preferred language, receive timely support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Campus Communication?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
              Join us in building a smarter, more inclusive educational environment.
            </p>
            <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-gray-100 hover:text-indigo-800 text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <Link to="/signup">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
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