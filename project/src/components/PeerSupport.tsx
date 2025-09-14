import React, { useState } from 'react';
import { Users, MessageCircle, Heart, Shield, Clock, ChevronRight, UserPlus, Zap } from 'lucide-react';

interface SupportGroup {
  id: string;
  title: string;
  description: string;
  category: string;
  members: number;
  isActive: boolean;
  lastActivity: string;
  color: string;
}

interface Message {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  reactions: number;
}

const PeerSupport: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');

  const supportGroups: SupportGroup[] = [
    {
      id: '1',
      title: 'Exam Stress Warriors',
      description: 'Support group for students dealing with academic pressure and exam anxiety',
      category: 'Academic',
      members: 234,
      isActive: true,
      lastActivity: '2 min ago',
      color: 'blue'
    },
    {
      id: '2',
      title: 'Career Confusion Circle',
      description: 'Helping each other navigate career choices and future uncertainties',
      category: 'Career',
      members: 156,
      isActive: true,
      lastActivity: '5 min ago',
      color: 'purple'
    },
    {
      id: '3',
      title: 'Family Pressure Support',
      description: 'Safe space to discuss family expectations and cultural pressures',
      category: 'Family',
      members: 189,
      isActive: false,
      lastActivity: '1 hour ago',
      color: 'green'
    },
    {
      id: '4',
      title: 'Social Anxiety Friends',
      description: 'Building confidence together, one conversation at a time',
      category: 'Social',
      members: 98,
      isActive: true,
      lastActivity: '12 min ago',
      color: 'orange'
    }
  ];

  const groupMessages: Message[] = [
    {
      id: '1',
      author: 'Anonymous_Student_23',
      content: 'Just wanted to say that the breathing techniques we discussed yesterday really helped me during my physics exam today! Thank you all for the support 🙏',
      timestamp: '2 min ago',
      reactions: 12
    },
    {
      id: '2',
      author: 'StressedButBlessed',
      content: 'Has anyone here dealt with parents who want you to pursue engineering when you\'re more interested in arts? I\'m really struggling with this conversation at home.',
      timestamp: '8 min ago',
      reactions: 6
    },
    {
      id: '3',
      author: 'Future_Doctor_Maybe',
      content: 'Remember, it\'s okay to not have everything figured out. I changed my career path 3 times and I\'m finally happy with my choice. Trust the process! 💪',
      timestamp: '15 min ago',
      reactions: 18
    }
  ];

  const categories = ['All', 'Academic', 'Career', 'Family', 'Social', 'Relationships'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGroups = activeCategory === 'All' 
    ? supportGroups 
    : supportGroups.filter(group => group.category === activeCategory);

  const getGroupColor = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colors[color as keyof typeof colors];
  };

  const handleJoinGroup = (groupId: string) => {
    setSelectedGroup(groupId);
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the group
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  if (selectedGroup) {
    const group = supportGroups.find(g => g.id === selectedGroup);
    
    return (
      <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
        {/* Group Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setSelectedGroup(null)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                ←
              </button>
              <div className={`w-10 h-10 bg-gradient-to-r ${getGroupColor(group?.color || 'blue')} rounded-full flex items-center justify-center`}>
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">{group?.title}</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>{group?.members} members</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Active now</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <span>AI Moderated</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {groupMessages.map(message => (
            <div key={message.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">{message.author}</span>
                <span className="text-sm text-gray-500">{message.timestamp}</span>
              </div>
              <p className="text-gray-700 mb-3">{message.content}</p>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-red-500">
                  <Heart className="w-4 h-4" />
                  <span>{message.reactions}</span>
                </button>
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  Reply
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Share your thoughts with the group... (Anonymous)"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={sendMessage}
              disabled={!newMessage.trim()}
              className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            All messages are anonymous and monitored by AI for safety
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 lg:p-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">Peer Support Circles</h1>
            <p className="text-green-100 text-lg">Connect anonymously with fellow youth facing similar challenges</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">1.2K+</div>
            <div className="text-green-100 text-sm">Active Members</div>
            <div className="flex items-center justify-center mt-2 space-x-1">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span className="text-sm">AI Moderated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
              activeCategory === category
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Support Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredGroups.map(group => (
          <div key={group.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-r ${getGroupColor(group.color)} rounded-xl flex items-center justify-center`}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center space-x-2">
                {group.isActive && (
                  <>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-medium">Active</span>
                  </>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">{group.title}</h3>
            <p className="text-gray-600 mb-4">{group.description}</p>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{group.members} members</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{group.lastActivity}</span>
                </span>
              </div>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                {group.category}
              </span>
            </div>

            <button
              onClick={() => handleJoinGroup(group.id)}
              className={`w-full py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                group.isActive
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg transform hover:-translate-y-1'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span>{group.isActive ? 'Join Conversation' : 'Join Group'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Safety Notice */}
      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
        <div className="flex items-start space-x-3">
          <Shield className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Safe Space Guarantee</h3>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• All conversations are anonymous and encrypted</li>
              <li>• AI moderator monitors for harmful content 24/7</li>
              <li>• Professional crisis support available instantly</li>
              <li>• Community guidelines ensure respectful interactions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeerSupport;