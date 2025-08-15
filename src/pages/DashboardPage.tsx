import React, { useState } from "react";
import evanSvg from "../assets/icons/evan.svg";
import friend1Svg from "../assets/icons/freand1.svg";
import friend2Svg from "../assets/icons/freand2.svg";
import friend3Svg from "../assets/icons/freand3.svg";
import friend4Svg from "../assets/icons/freand4.svg";
import illustration3Svg from "../assets/icons/Illustration 3.svg";

const DashboardPage = () => {
  const [selectedView, setSelectedView] = useState("list");

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Time tracker - personal account</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-sm text-gray-500 mb-1">Project Number</div>
                <div className="font-semibold text-gray-900">PM0001245</div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
              </button>
            </div>
            <div className="mb-6">
              <div className="text-sm font-semibold text-gray-900 mb-2">
                Description
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                App for maintaining your medical record, making appointments
                with a doctor, storing prescriptions
              </p>
            </div>
            <div className="mb-6">
              <div className="text-sm font-semibold text-gray-900 mb-2">
                Reporter
              </div>
              <div className="flex items-center gap-2">
                <img src={evanSvg} alt="Evan Tates" className="w-10 h-10 rounded-full" />
                <span className="text-sm text-gray-700">Evan Tates</span>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-sm font-semibold text-gray-900 mb-2">
                Assignees
              </div>
              <div className="flex gap-0">
                <img src={friend1Svg} alt="Assignee 1" className="w-10 h-10 rounded-full" />
                <img src={friend2Svg} alt="Assignee 2" className="w-10 h-10 rounded-full" />
                <img src={friend3Svg} alt="Assignee 3" className="w-10 h-10 rounded-full" />
                <img src={friend4Svg} alt="Assignee 4" className="w-10 h-10 rounded-full" />
              </div>
            </div>
            <div className="mb-6">
              <div className="text-sm font-semibold text-gray-900 mb-2">
                Priority
              </div>
              <div className="flex items-center gap-2">
                <div className="text-yellow-500 text-lg">🔝</div>
                <span className="text-sm text-gray-700">Medium</span>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-sm font-semibold text-gray-900 mb-2">
                Dead Line
              </div>
              <div className="text-sm text-gray-700">Feb 23, 2020</div>
            </div>
            <div className="mb-6">
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z" />
                </svg>
                Created May 28, 2020
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-sm h-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Tasks</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedView("list")}
                  className={`p-2 border border-gray-200 rounded hover:bg-gray-50 ${
                    selectedView === "list" ? "bg-gray-50" : ""
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                  </svg>
                </button>
                <button
                  onClick={() => setSelectedView("grid")}
                  className={`p-2 border border-gray-200 rounded hover:bg-gray-50 ${
                    selectedView === "grid" ? "bg-gray-50" : ""
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-100 h-full">
              <div className="w-70 h-100 mx-auto mb-8">
                <img src={illustration3Svg} alt="No tasks" className="w-full h-full" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                There are no tasks in this project yet
              </h3>
              <p className="text-gray-500 text-sm mb-6">Let's add them</p>
              <button className="bg-[#3F8CFF] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#2b7ae4] transition-colors">
                <svg
                  width="20"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;