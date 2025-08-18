    import React, { useState } from 'react'; 
    import { Search, Bell, Calendar, ChevronRight, Plus } from 'lucide-react'; 
    import user1 from '../assets/icons/user1.svg'; 
    import user2 from '../assets/icons/user2.svg'; 
    import user3 from '../assets/icons/user3.svg'; 
    import user4 from '../assets/icons/user6.svg';
    import user5 from '../assets/icons/freand1.svg'; 
    import user6 from '../assets/icons/user4.svg'; 
    import user7 from '../assets/icons/user5.svg';
    import user8 from '../assets/icons/freand3.svg';
    import freand4 from '../assets/icons/freand4.svg'; 
    import five from '../assets/icons/five.svg'; 
    import projectIcon1 from '../assets/icons/Image.svg'; 
    import projectIcon2 from '../assets/icons/Image (1).svg';
    import projectIcon3 from '../assets/icons/Image (3).svg';
    import mainUserPhoto from '../assets/icons/photo.svg';

    const DashboardPage = () => {
    const workloadUsers = [
        { name: 'Shawn Stone', role: 'UI/UX Designer', status: 'Today', avatar: user1 },
        { name: 'Randy Delgado', role: 'UI/UX Designer', status: 'Today', avatar: user2 },
        { name: 'Emily Tyler', role: 'Copywriter', status: 'Today', avatar: user3 },
        { name: 'Louis Castro', role: 'Copywriter', status: 'Today', avatar: user4 },
        { name: 'Blake Silva', role: 'iOS Developer', status: 'Today', avatar: user5 },
        { name: 'Joel Phillips', role: 'UI/UX Designer', status: 'Today', avatar: user6 },
        { name: 'Wayne Marsh', role: 'Copywriter', status: 'Today', avatar: user7 },
        { name: 'Oscar Holloway', role: 'UI/UX Designer', status: 'Today', avatar: user8 }
    ];
    const projects = [
        {
        id: 'PN0001265',
        name: 'Medical App (iOS native)',
        created: 'Created Sep 12, 2020',
        priority: 'Medium',
        priorityColor: 'text-yellow-500',
        allTasks: 34,
        activeTasks: 13,
        assignees: [user1, user2, user3, freand4],
        icon: projectIcon1
        },
        {
        id: 'PN0001227', 
        name: 'Food Delivery Service',
        created: 'Created Sep 10, 2020',
        priority: 'Medium',
        priorityColor: 'text-yellow-500',
        allTasks: 50,
        activeTasks: 24,
        assignees: [user1, user2, user3],
        icon: projectIcon2
        },
        {
        id: 'PN0001230',
        name: 'Food Delivery Service',
        created: 'Created May 28, 2020',
        priority: 'Low',
        priorityColor: 'text-green-500',
        allTasks: 23,
        activeTasks: 20,
        assignees: [user1, user2, user3, five],
        icon: projectIcon3
        }
    ];

    const events = [
        {
        title: 'Presentation of the new department',
        time: 'Today | 5:00 PM',
        duration: '4h',
        color: 'bg-blue-100 border-blue-200'
        },
        {
        title: "Anna's Birthday",
        time: 'Today | 6:00 PM', 
        duration: '4h',
        color: 'bg-purple-100 border-purple-200'
        },
        {
        title: "Ray's Birthday",
        time: 'Tomorrow | 2:00 PM',
        duration: '4h', 
        color: 'bg-green-100 border-green-200'
        }
    ];

    const activities = [
        {
        user: 'Oscar Holloway',
        role: 'UI/UX Designer',
        action: 'Updated the status of Mind Map task to In Progress',
        avatar: user8
        },
        {
        user: 'Emily Tyler', 
        role: 'Copywriter',
        action: 'Attached files to the task',
        avatar: user3
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
        <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                type="text" 
                placeholder="Search" 
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            </div>
            <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 text-gray-600" />
            <div className="flex items-center space-x-2">
                <img 
                src={mainUserPhoto} 
                alt="Evan Yates" 
                className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium">Evan Yates</span>
            </div>
            </div>
        </div>
        <div className="flex justify-between items-center mb-8">
            <div>
            <p className="text-gray-500 text-sm mb-1">Welcome back, Evan!</p>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
            <Calendar className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium">Nov 16, 2020 - Dec 16, 2020</span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Workload</h2>
                <button className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-700">
                    View all <ChevronRight className="w-4 h-4 ml-1" />
                </button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                {workloadUsers.map((user, index) => (
                    <div key={index} className="text-center">
                    <div className="relative mb-3">
                        <img 
                        src={user.avatar} 
                        alt={user.name}
                        className="w-16 h-16 rounded-full mx-auto object-cover"
                        />
                        <div className="absolute -bottom-1 right-1/2 transform translate-x-1/2 bg-white border-2 border-white rounded-full">
                        </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{user.name}</h3>
                    <p className="text-gray-500 text-xs mb-2">{user.role}</p>
                    <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                        {user.status}
                    </span>
                    </div>
                ))}
                </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Projects</h2>
                <button className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-700">
                    View all <ChevronRight className="w-4 h-4 ml-1" />
                </button>
                </div>
                <div className="space-y-4">
                {projects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br rounded-lg flex items-center justify-center">
                        <img 
                            src={project.icon} 
                            alt="Project Icon" 
                            className="w-30 h-20"
                        />
                        </div>
                        <div>
                        <div className="flex items-center space-x-2 mb-1">
                            <span className="text-xs text-gray-500">{project.id}</span>
                            <span className={`text-xs font-medium ${project.priorityColor}`}>
                            {project.priority}
                            </span>
                        </div>
                        <h3 className="font-semibold text-gray-900">{project.name}</h3>
                        <p className="text-sm text-gray-500">{project.created}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-8">
                        <div className="text-center">
                        <div className="text-sm text-gray-500">All tasks</div>
                        <div className="font-semibold text-gray-900">{project.allTasks}</div>
                        </div>
                        <div className="text-center">
                        <div className="text-sm text-gray-500">Active tasks</div>
                        <div className="font-semibold text-gray-900">{project.activeTasks}</div>
                        </div>
                        <div className="text-center">
                        <div className="text-sm text-gray-500">Assignees</div>
                        <div className="flex -space-x-1 mt-1 justify-center">
                            {project.assignees.map((assignee, index) => (
                            <img 
                                key={index} 
                                src={assignee} 
                                alt={`Assignee ${index + 1}`}
                                className="w-6 h-6 rounded-full border-2 border-white object-cover"
                            />
                            ))}
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
            <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Nearest Events</h2>
                <button className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-700">
                    View all <ChevronRight className="w-4 h-20 ml-1" />
                </button>
                </div>
                <div className="space-y-4">
                {events.map((event, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${event.color}`}>
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm">{event.title}</h3>
                        <span className="text-xs text-gray-500">{event.duration}</span>
                    </div>
                    <p className="text-xs text-gray-600">{event.time}</p>
                    </div>
                ))}
                </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Activity Stream</h2>
                </div>
                <div className="space-y-4">
                {activities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                    <img 
                        src={activity.avatar} 
                        alt={activity.user}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm">{activity.user}</h3>
                        <span className="text-xs text-gray-500">{activity.role}</span>
                        </div>
                        <p className="text-sm text-gray-600">{activity.action}</p>
                    </div>
                    </div>
                ))}
                <button className="w-full text-center text-blue-600 text-sm font-medium hover:text-blue-700 mt-4">
                    View more
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default DashboardPage;