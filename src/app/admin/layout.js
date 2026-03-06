'use client';

import { useState } from 'react';

const DashboardIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"></path>
    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" clipRule="evenodd"></path>
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
  </svg>
);

const FolderIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 6a2 2 0 012-2h4l2-2h4a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
  </svg>
);

const ChartIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
  </svg>
);

const LogoutIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path>
  </svg>
);

const ProfileIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
  </svg>
);

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-black text-white transition-all duration-300 flex flex-col overflow-hidden border-r border-gray-800`}
      >
        {/* Logo/Header */}
        <div className="flex items-center justify-between border-b border-gray-800 px-6 py-6">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center font-bold text-black">
                A
              </div>
              <h2 className="text-xl font-bold text-white">FreelanceHub</h2>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-lg p-2 text-gray-400 hover:bg-green-600 hover:text-white transition-colors duration-200"
            aria-label="Toggle sidebar"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 px-4 py-6">
          <NavLink
            href="/admin/dashboard"
            label="Dashboard"
            icon={<DashboardIcon />}
            sidebarOpen={sidebarOpen}
          />
          <NavLink
            href="/admin/orders"
            label="Orders"
            icon={<FolderIcon />}
            sidebarOpen={sidebarOpen}
          />
          <NavLink
            href="/admin/freelancers"
            label="Freelancers"
            icon={<UsersIcon />}
            sidebarOpen={sidebarOpen}
          />
          <NavLink
            href="/admin/invoices"
            label="Invoices"
            icon={<ChartIcon />}
            sidebarOpen={sidebarOpen}
          />
          <NavLink
            href="/admin/analytics"
            label="Analytics"
            icon={<ChartIcon />}
            sidebarOpen={sidebarOpen}
          />
          <NavLink
            href="/admin/settings"
            label="Settings"
            icon={<SettingsIcon />}
            sidebarOpen={sidebarOpen}
          />
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-800 px-4 py-4 space-y-2">
          <button className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-300 hover:bg-green-600 hover:text-white transition-colors duration-200 flex items-center gap-3">
            <ProfileIcon />
            {sidebarOpen && 'Profile'}
          </button>
          <button className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200 flex items-center gap-3">
            <LogoutIcon />
            {sidebarOpen && 'Logout'}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-white">{children}</main>
    </div>
  );
}

function NavLink({ href, label, icon, sidebarOpen }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-300 transition-colors duration-200 hover:bg-green-600 hover:text-white active:bg-green-700"
    >
      {icon}
      {sidebarOpen && <span className="text-sm font-medium">{label}</span>}
    </a>
  );
}
