import React, { useState } from 'react';
import { Search, Bell, Settings, Edit2, MapPin, Calendar, Filter } from 'lucide-react';
import userPhoto from '../assets/icons/photo.svg';
import friend1 from '../assets/icons/freand1.svg';
import friend2 from '../assets/icons/freand2.svg';
import friend3 from '../assets/icons/freand3.svg';
import friend4 from '../assets/icons/freand4.svg';
import projectImage1 from '../assets/icons/Image.svg';
import projectImage2 from '../assets/icons/Image (1).svg';
import projectImage3 from '../assets/icons/Image (2).svg';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('Projects');

  const projects = [
    {
      id: 'PN0001265',
      name: 'Medical App (iOS native)',
      created: 'Created Sep 12, 2020',
      priority: 'Medium',
      allTasks: 34,
      activeTasks: 13,
      assignees: [friend1, friend2, friend3, friend4],
      projectImage: projectImage1
    },
    {
      id: 'PN0001227',
      name: 'Food Delivery Service',
      created: 'Created Sep 10, 2020',
      priority: 'Medium',
      allTasks: 50,
      activeTasks: 24,
      assignees: [friend1, friend2, friend3],
      projectImage: projectImage2
    },
    {
      id: 'PN0001230',
      name: 'Internal Project',
      created: 'Created May 28, 2020',
      priority: 'Low',
      allTasks: 23,
      activeTasks: 20,
      assignees: [friend1, friend2, friend3, friend4],
      projectImage: projectImage3
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Medium': return 'text-yellow-500';
      case 'Low': return 'text-green-500';
      case 'High': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search" 
              className="pl-10 pr-20 py-1 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 text-gray-600" />
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-semibold">
              <img 
                src={userPhoto} 
                alt="Evan Yates" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-sm font-medium ">Evan Yates</span>
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="w-80">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
              <Edit2  className="w-5 h-5 text-gray-600" />
            </div>
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 mb-4 bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
                <img 
                  src={userPhoto} 
                  alt="Evan Yates" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">Evan Yates</h2>
              <p className="text-gray-500 text-sm">UI/UX Designer</p>
            </div>
            <hr className="mb-6" />
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Main Info</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Position</label>
                  <input 
                    type="text" 
                    value="UI/UX Designer" 
                    className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Company</label>
                  <input 
                    type="text" 
                    value="Cadabra" 
                    className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Location</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value="NYC, New York, USA" 
                      className="w-full p-2 pr-8 border border-gray-200 rounded-lg text-sm"
                    />
                    <MapPin className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Birthday Date</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value="May 19, 1996" 
                      className="w-full p-2 pr-8 border border-gray-200 rounded-lg text-sm"
                    />
                    <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Email</label>
                  <input 
                    type="email" 
                    value="evanyates@gmail.com" 
                    className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Mobile Number</label>
                  <input 
                    type="tel" 
                    value="+1 675 346 23-10" 
                    className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500 mb-1 block">Skype</label>
                  <input 
                    type="text" 
                    value="Evan 2256" 
                    className="w-full p-2 border border-gray-200 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              {['Projects', 'Team', 'My vacations'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6  py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
              </button>
              <select className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Current Projects</option>
                <option>All Projects</option>
                <option>Completed Projects</option>
              </select>
            </div>
          </div>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br rounded-lg flex items-center justify-center text-white font-bold">
                      <img 
                        src={project.projectImage} 
                        alt="Project Icon" 
                        className="w-19
                         h-18 object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs text-gray-500">{project.id}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{project.created}</span>
                        <span className={`font-medium ${getPriorityColor(project.priority)}`}>
                          ↗ {project.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900 mb-1">Project Data</div>
                    <div className="flex space-x-40 text-sm">
                      <div>
                        <div className="text-gray-500">All tasks</div>
                        <div className="font-semibold text-gray-900">{project.allTasks}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Active tasks</div>
                        <div className="font-semibold text-gray-900">{project.activeTasks}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Assignees</div>
                        <div className="flex -space-x-1 mt-1">
                          {project.assignees.map((assignee, index) => (
                            <img 
                              key={index} 
                              src={assignee} 
                              alt={`Assignee ${index + 1}`}
                              className="w-10 h-10 rounded-full border-1 border-white object-cover"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;