import React, { useState } from "react";
import { Search, Bell, Calendar, ChevronRight, Plus } from "lucide-react";
import user1 from "../assets/icons/user1.svg";
import user2 from "../assets/icons/user2.svg";
import user3 from "../assets/icons/user3.svg";
import user4 from "../assets/icons/user6.svg";
import user5 from "../assets/icons/freand1.svg";
import user6 from "../assets/icons/user4.svg";
import user7 from "../assets/icons/user5.svg";
import user8 from "../assets/icons/freand3.svg";
import freand4 from "../assets/icons/freand4.svg";
import five from "../assets/icons/five.svg";
import projectIcon1 from "../assets/icons/Image.svg";
import projectIcon2 from "../assets/icons/Image (1).svg";
import projectIcon3 from "../assets/icons/Image (3).svg";
import mainUserPhoto from "../assets/icons/photo.svg";
import activityIcon1 from "../assets/icons/activity1.svg";
import activityIcon2 from "../assets/icons/activity2.svg";

const DashboardPage = () => {
  const workloadUsers = [
    {
      name: "Shawn Stone",
      role: "UI/UX Designer",
      status: "Middle",
      avatar: user1,
    },
    {
      name: "Randy Delgado",
      role: "UI/UX Designer",
      status: "Junior",
      avatar: user2,
    },
    {
      name: "Emily Tyler",
      role: "Copywriter",
      status: "Middle",
      avatar: user3,
    },
    {
      name: "Louis Castro",
      role: "Copywriter",
      status: "Senior",
      avatar: user4,
    },
    {
      name: "Blake Silva",
      role: "iOS Developer",
      status: "Senior",
      avatar: user5,
    },
    {
      name: "Joel Phillips",
      role: "UI/UX Designer",
      status: "Middle",
      avatar: user6,
    },
    {
      name: "Wayne Marsh",
      role: "Copywriter",
      status: "Junior",
      avatar: user7,
    },
    {
      name: "Oscar Holloway",
      role: "UI/UX Designer",
      status: "Middle",
      avatar: user8,
    },
  ];

  const projects = [
    {
      id: "PN0001265",
      name: "Medical App (iOS native)",
      created: "🗓️Created Sep 12, 2020",
      priority: "Medium",
      priorityColor: "text-orange-500",
      allTasks: 34,
      activeTasks: 13,
      assignees: [user1, user2, user3, freand4],
      icon: projectIcon1,
    },
    {
      id: "PN0001221",
      name: "Food Delivery Service",
      created: "🗓️Created Sep 10, 2020",
      priority: "Medium",
      priorityColor: "text-orange-500",
      allTasks: 50,
      activeTasks: 24,
      assignees: [user1, user2, user3],
      icon: projectIcon2,
    },
    {
      id: "PN0001290",
      name: "Food Delivery Service",
      created: "🗓️Created May 28, 2020",
      priority: "Low",
      priorityColor: "text-green-500",
      allTasks: 23,
      activeTasks: 20,
      assignees: [user1, user2, user3, five],
      icon: projectIcon3,
    },
  ];

  const events = [
    {
      title: "Presentation of the new department",
      time: "Today | 5:00 PM",
      duration: "4h",
      color: "bg-blue-50 border-l-4 border-l-blue-400",
      arrow: "↗",
    },
    {
      title: "Anna's Birthday",
      time: "Today | 6:00 PM",
      duration: "4h",
      color: "bg-purple-50 border-l-4 border-l-purple-400",
      arrow: "↓",
    },
    {
      title: "Ray's Birthday",
      time: "Tomorrow | 2:00 PM",
      duration: "4h",
      color: "bg-green-50 border-l-4 border-l-green-400",
      arrow: "↓",
    },
  ];

  const activities = [
    {
      user: "Oscar Holloway",
      role: "UI/UX Designer",
      avatar: user8,
      actions: [
        {
          action: "Updated the status of Mind Map task to In Progress",
          icon: activityIcon1,
          iconBg: "bg-blue-50",
        },
        {
          action: "Attached files to the task",
          icon: activityIcon2,
          iconBg: "bg-purple-50",
        },
      ],
    },
    {
      user: "Emily Tyler",
      role: "Copywriter",
      avatar: user3,
      actions: [
        {
          action: "Updated the status of Mind Map task to In Progress",
          icon: activityIcon1,
          iconBg: "bg-blue-50",
        },
      ],
    },
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
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
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
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
          <Calendar className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium">
            Nov 16, 2020 - Dec 16, 2020
          </span>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {workloadUsers.map((user, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:scale-[1.02] transition"
                >
                  <div className="relative mb-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-blue-400 p-1"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {user.name}
                  </h3>
                  <p className="text-gray-500 text-xs mb-2">{user.role}</p>
                  <span className="inline-block px-3 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium">
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
                <div
                  key={project.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center space-x-4">
                    <div>
                      <img
                        src={project.icon}
                        alt="Project Icon"
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs text-gray-500">
                          {project.id}
                        </span>
                        <span
                          className={`text-xs font-medium ${project.priorityColor}`}
                        >
                          ↗ {project.priority}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {project.name}
                      </h3>
                      <p className="text-xs text-gray-500">{project.created}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">
                        Project Data
                      </div>
                      <div className="text-xs text-gray-500">All tasks</div>
                      <div className="font-semibold text-gray-900">
                        {project.allTasks}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">
                        Active tasks
                      </div>
                      <div className="font-semibold text-gray-900">
                        {project.activeTasks}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-1">
                        Assignees
                      </div>
                      <div className="flex -space-x-1 justify-center">
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
              <h2 className="text-xl font-bold text-gray-900">
                Nearest Events
              </h2>
              <button className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-700">
                View all <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${event.color} relative`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {event.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">
                        {event.duration}
                      </span>
                      <span className="text-lg">{event.arrow}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">{event.time}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Activity Stream
              </h2>
            </div>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <img
                      src={activity.avatar}
                      alt={activity.user}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {activity.user}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {activity.role}
                      </span>
                    </div>
                  </div>
                  {activity.actions.map((actionItem, actionIndex) => (
                    <div
                      key={actionIndex}
                      className="flex items-start space-x-3 ml-0"
                    >
                      <div
                        className={`w-8 h-8 ${actionItem.iconBg} rounded-lg flex items-center justify-center`}
                      >
                        <img
                          src={actionItem.icon}
                          alt="Activity Icon"
                          className="w-4 h-4"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 font-medium">
                          {actionItem.action}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
              <button className="w-full text-center text-blue-600 text-sm font-medium hover:text-blue-700 mt-6">
                View more ↓
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
