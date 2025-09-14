import React, { useState } from 'react';
import { Heart, MessageCircle, Users, Shield, Brain, Globe, Phone, ChevronRight, Menu, X, Sparkles } from 'lucide-react';
import LandingPage from './components/LandingPage';
import ChatInterface from './components/ChatInterface';
import WellnessJourney from './components/WellnessJourney';
import PeerSupport from './components/PeerSupport';
import Dashboard from './components/Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Heart },
    { id: 'chat', label: 'AI Companion', icon: MessageCircle },
    { id: 'wellness', label: 'Wellness Journey', icon: Brain },
    { id: 'peer', label: 'Peer Support', icon: Users },
    { id: 'dashboard', label: 'Dashboard', icon: Sparkles },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'chat':
        return <ChatInterface />;
      case 'wellness':
        return <WellnessJourney />;
      case 'peer':
        return <PeerSupport />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MannMitra
                </h1>
                <p className="text-xs text-gray-500">मन का मित्र</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentPage(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full px-4 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${
                        currentPage === item.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{renderPage()}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">MannMitra</h3>
                  <p className="text-sm text-gray-400">मन का मित्र</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Your confidential AI wellness companion, providing empathetic, stigma-free mental health support for Indian youth.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Privacy by Design • End-to-End Encrypted</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Crisis Support</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>iCALL: 022-25563291</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Vandrevala: 1860-2662-345</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>NIMHANS: 080-46110007</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Powered By</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• Google Cloud Vertex AI</p>
                <p>• Culturally Aware NLP</p>
                <p>• Multi-language Support</p>
                <p>• 24×7 Availability</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 MannMitra. Built with ❤️ for Indian Youth Mental Wellness.</p>
            <p className="mt-2">This is a prototype for demonstration purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;