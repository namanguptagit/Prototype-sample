import React from 'react';
import { Heart, MessageCircle, Users, Shield, Brain, Globe, Phone, ChevronRight, Star, Zap, Lock, Sparkles } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: MessageCircle,
      title: '24×7 AI Companion',
      description: 'Confidential, empathetic conversations powered by Google Cloud Vertex AI',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Brain,
      title: 'Personalized Wellness',
      description: 'Custom coping toolkits, mindfulness exercises, and daily wellness nudges',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Anonymous Peer Support',
      description: 'Safe, AI-moderated group discussions with fellow youth',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Crisis Intervention',
      description: 'Early detection and professional escalation when needed',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Globe,
      title: 'Cultural Sensitivity',
      description: 'Support in multiple Indian languages with cultural awareness',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'End-to-end encryption with Google Cloud KMS protection',
      color: 'from-gray-500 to-gray-600'
    }
  ];

  const stats = [
    { value: '10M+', label: 'Youth Reached', color: 'text-blue-600' },
    { value: '24/7', label: 'Always Available', color: 'text-purple-600' },
    { value: '12+', label: 'Indian Languages', color: 'text-green-600' },
    { value: '99.9%', label: 'Privacy Protected', color: 'text-orange-600' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Powered by Google Cloud AI
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Confidential
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI Wellness
                  </span>
                  Companion
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Empathetic, stigma-free, and culturally aware mental health support for Indian youth. 
                  Available 24×7 in your language, at your pace.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('chat')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Start Chatting</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('wellness')}
                  className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Brain className="w-5 h-5" />
                  <span>Explore Wellness</span>
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Always Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>Multi-language</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                <div className="bg-white rounded-2xl shadow-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">MannMitra AI</p>
                      <div className="flex items-center space-x-1 text-xs text-green-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700">
                      Hi! I'm here to listen and support you. How are you feeling today?
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-3 text-sm ml-8">
                      Feeling stressed about exams...
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700">
                      I understand exam stress can be overwhelming. Let's work through this together. Would you like to try a breathing exercise?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Mental
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Wellness Support
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for Indian youth, addressing cultural nuances and providing support in your language
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your
            <span className="block">Wellness Journey?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Indian youth who have found support, understanding, and growth through MannMitra
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('chat')}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Free Session</span>
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Brain className="w-5 h-5" />
              <span>View Dashboard</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;