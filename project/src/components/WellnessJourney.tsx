import React, { useState } from 'react';
import { Brain, Heart, Sunrise, Moon, Music, BookOpen, Target, Calendar, Play, Pause, CheckCircle, Star } from 'lucide-react';

interface Activity {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'meditation' | 'breathing' | 'journal' | 'music' | 'exercise';
  completed: boolean;
  icon: typeof Brain;
}

const WellnessJourney: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('today');
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const todayActivities: Activity[] = [
    {
      id: '1',
      title: 'Morning Mindfulness',
      description: 'Start your day with a 10-minute guided meditation to set positive intentions',
      duration: '10 min',
      type: 'meditation',
      completed: true,
      icon: Sunrise
    },
    {
      id: '2',
      title: 'Exam Stress Relief',
      description: 'Special breathing technique to calm pre-exam anxiety',
      duration: '5 min',
      type: 'breathing',
      completed: false,
      icon: Brain
    },
    {
      id: '3',
      title: 'Gratitude Journaling',
      description: 'Write down three things you\'re grateful for today',
      duration: '8 min',
      type: 'journal',
      completed: false,
      icon: BookOpen
    },
    {
      id: '4',
      title: 'Cultural Healing Music',
      description: 'Relaxing Indian classical music for inner peace',
      duration: '15 min',
      type: 'music',
      completed: false,
      icon: Music
    }
  ];

  const weeklyGoals = [
    { id: '1', title: 'Daily Meditation', progress: 5, target: 7, color: 'blue' },
    { id: '2', title: 'Mood Tracking', progress: 6, target: 7, color: 'green' },
    { id: '3', title: 'Breathing Exercises', progress: 4, target: 5, color: 'purple' },
    { id: '4', title: 'Peer Support Chat', progress: 2, target: 3, color: 'orange' }
  ];

  const moodData = [
    { day: 'Mon', mood: 7, stress: 6 },
    { day: 'Tue', mood: 6, stress: 7 },
    { day: 'Wed', mood: 8, stress: 4 },
    { day: 'Thu', mood: 7, stress: 5 },
    { day: 'Fri', mood: 9, stress: 3 },
    { day: 'Sat', mood: 8, stress: 4 },
    { day: 'Sun', mood: 8, stress: 3 }
  ];

  const toggleActivity = (id: string) => {
    // In a real app, this would update the database
    console.log('Activity toggled:', id);
  };

  const togglePlaying = (id: string) => {
    setIsPlaying(isPlaying === id ? null : id);
  };

  const getProgressColor = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="max-w-6xl mx-auto p-4 lg:p-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">Your Wellness Journey</h1>
            <p className="text-blue-100 text-lg">Personalized activities to support your mental health</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">78</div>
            <div className="text-blue-100 text-sm">Wellness Score</div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-300' : 'text-blue-300'}`} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
        {[
          { id: 'today', label: 'Today\'s Activities', icon: Calendar },
          { id: 'goals', label: 'Weekly Goals', icon: Target },
          { id: 'mood', label: 'Mood Tracking', icon: Heart }
        ].map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setCurrentTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Today's Activities */}
      {currentTab === 'today' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {todayActivities.map(activity => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activity.completed 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    }`}>
                      {activity.completed ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                      <p className="text-sm text-gray-600">{activity.duration}</p>
                    </div>
                  </div>
                  {activity.type === 'music' && (
                    <button
                      onClick={() => togglePlaying(activity.id)}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      {isPlaying === activity.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4">{activity.description}</p>
                
                {!activity.completed && (
                  <button
                    onClick={() => toggleActivity(activity.id)}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                  >
                    Start Activity
                  </button>
                )}
                
                {activity.completed && (
                  <div className="flex items-center justify-center py-3 bg-green-50 text-green-700 rounded-xl">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Completed
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Weekly Goals */}
      {currentTab === 'goals' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {weeklyGoals.map(goal => (
            <div key={goal.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                <span className="text-sm text-gray-600">{goal.progress}/{goal.target}</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div
                  className={`h-3 bg-gradient-to-r ${getProgressColor(goal.color)} rounded-full transition-all duration-300`}
                  style={{ width: `${(goal.progress / goal.target) * 100}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Progress this week</span>
                <span className={`font-semibold ${goal.progress === goal.target ? 'text-green-600' : 'text-blue-600'}`}>
                  {Math.round((goal.progress / goal.target) * 100)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mood Tracking */}
      {currentTab === 'mood' && (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Weekly Mood & Stress Levels</h3>
          
          <div className="space-y-4">
            {moodData.map((data, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 text-sm font-medium text-gray-600">{data.day}</div>
                
                <div className="flex-1 flex items-center space-x-4">
                  <div className="flex items-center space-x-2 flex-1">
                    <span className="text-sm text-gray-600 w-12">Mood</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                        style={{ width: `${(data.mood / 10) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-green-600 w-8">{data.mood}/10</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 flex-1">
                    <span className="text-sm text-gray-600 w-12">Stress</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 bg-gradient-to-r from-red-400 to-red-500 rounded-full"
                        style={{ width: `${(data.stress / 10) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-red-600 w-8">{data.stress}/10</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-xl">
            <p className="text-sm text-blue-700">
              <strong>Insight:</strong> Your mood has been improving this week! Keep up the great work with your wellness activities.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WellnessJourney;