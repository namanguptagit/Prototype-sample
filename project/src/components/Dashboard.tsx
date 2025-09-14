import React from 'react';
import { Brain, Heart, Users, MessageCircle, Calendar, TrendingUp, Award, Zap, Target, Activity } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Days Active', value: '23', color: 'blue', icon: Calendar },
    { label: 'Wellness Score', value: '78', color: 'green', icon: Heart },
    { label: 'Peer Interactions', value: '47', color: 'purple', icon: Users },
    { label: 'AI Sessions', value: '156', color: 'orange', icon: MessageCircle }
  ];

  const weeklyProgress = [
    { day: 'Mon', meditation: 15, mood: 8, stress: 4 },
    { day: 'Tue', meditation: 10, mood: 7, stress: 6 },
    { day: 'Wed', meditation: 20, mood: 9, stress: 3 },
    { day: 'Thu', meditation: 12, mood: 8, stress: 4 },
    { day: 'Fri', meditation: 18, mood: 9, stress: 2 },
    { day: 'Sat', meditation: 25, mood: 9, stress: 3 },
    { day: 'Sun', meditation: 22, mood: 8, stress: 3 }
  ];

  const achievements = [
    { id: 1, title: 'First Week Complete', description: 'Used MannMitra for 7 consecutive days', earned: true, color: 'blue' },
    { id: 2, title: 'Meditation Master', description: 'Completed 10+ meditation sessions', earned: true, color: 'purple' },
    { id: 3, title: 'Peer Helper', description: 'Helped 5+ peers in support circles', earned: true, color: 'green' },
    { id: 4, title: 'Mood Tracker', description: 'Tracked mood for 30 days straight', earned: false, color: 'orange' },
    { id: 5, title: 'Wellness Warrior', description: 'Maintained 80+ wellness score for a month', earned: false, color: 'red' },
    { id: 6, title: 'Community Leader', description: 'Started your own support circle', earned: false, color: 'indigo' }
  ];

  const insights = [
    {
      title: 'Your Best Day',
      description: 'Friday showed your highest wellness score this week!',
      action: 'Replicate Friday\'s routine',
      color: 'green'
    },
    {
      title: 'Stress Pattern',
      description: 'You tend to feel more stressed on Tuesdays and Wednesdays',
      action: 'Schedule extra self-care on these days',
      color: 'blue'
    },
    {
      title: 'Meditation Impact',
      description: 'Days with 15+ minutes of meditation show better mood scores',
      action: 'Aim for 15+ minutes daily',
      color: 'purple'
    }
  ];

  const getStatColor = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colors[color as keyof typeof colors];
  };

  const getAchievementColor = (color: string, earned: boolean) => {
    if (!earned) return 'from-gray-300 to-gray-400';
    
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">Wellness Dashboard</h1>
            <p className="text-indigo-100 text-lg">Track your mental health journey and celebrate progress</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">Day 23</div>
            <div className="text-indigo-100 text-sm">of your journey</div>
            <div className="flex items-center justify-center mt-2">
              <TrendingUp className="w-5 h-5 text-green-300 mr-1" />
              <span className="text-sm text-green-300">Improving</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className={`w-12 h-12 bg-gradient-to-r ${getStatColor(stat.color)} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Weekly Progress Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Weekly Progress Overview</h3>
        
        <div className="space-y-6">
          {weeklyProgress.map((day, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium text-gray-600">{day.day}</div>
              
              <div className="flex-1 grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Meditation</span>
                    <span className="text-blue-600 font-medium">{day.meditation}min</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                      style={{ width: `${(day.meditation / 30) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Mood</span>
                    <span className="text-green-600 font-medium">{day.mood}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                      style={{ width: `${(day.mood / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Stress</span>
                    <span className="text-red-600 font-medium">{day.stress}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-to-r from-red-400 to-red-500 rounded-full"
                      style={{ width: `${(day.stress / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Achievements */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-2 mb-6">
            <Award className="w-6 h-6 text-yellow-500" />
            <h3 className="text-xl font-semibold text-gray-900">Achievements</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {achievements.map(achievement => (
              <div
                key={achievement.id}
                className={`p-4 rounded-xl border-2 ${
                  achievement.earned 
                    ? 'border-transparent bg-gradient-to-r ' + getAchievementColor(achievement.color, true) + ' text-white'
                    : 'border-gray-200 bg-gray-50 text-gray-400'
                }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-4 h-4" />
                  <span className="font-medium text-sm">{achievement.title}</span>
                </div>
                <p className={`text-xs ${achievement.earned ? 'text-white/90' : 'text-gray-500'}`}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-2 mb-6">
            <Zap className="w-6 h-6 text-purple-500" />
            <h3 className="text-xl font-semibold text-gray-900">AI Insights</h3>
          </div>
          
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">{insight.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{insight.description}</p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  insight.color === 'green' ? 'bg-green-100 text-green-700' :
                  insight.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  <Target className="w-3 h-3 mr-1" />
                  {insight.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-900">Chat with AI</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
            <Brain className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-900">Meditate</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
            <Heart className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-gray-900">Log Mood</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
            <Users className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-gray-900">Join Group</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;