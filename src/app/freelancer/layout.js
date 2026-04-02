'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRequireClientAuth } from '@/lib/auth/requireClientAuth';
import { clearAuth } from '@/store/authSlice';
import { logoutViaApi } from '@/lib/auth/tokenStorage';

const DashboardIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"></path>
    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" clipRule="evenodd"></path>
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A2.97 2.97 0 009.944 13H6.06A2.969 2.969 0 004 10.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm5 4a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path>
    <path d="M4 12.611A2.969 2.969 0 009.944 15h4.012A2.97 2.97 0 0016 12.611V12a1 1 0 11-2 0v.611a.969.969 0 01-.936.389H5.936A.969.969 0 015 12.611V12a1 1 0 01-1 0v.611z"></path>
  </svg>
);

const FileIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"></path>
  </svg>
);

const CreditCardIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4z"></path>
    <path fillRule="evenodd" d="M2 8a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8zm4 3a1 1 0 000 2h4a1 1 0 000-2H6z" clipRule="evenodd"></path>
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

export default function FreelancerLayout({ children }) {
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  useRequireClientAuth({ role: 'freelancer' });

  const handleLogout = async () => {
    await logoutViaApi();
    dispatch(clearAuth());
    window.location.href = '/login';
  };

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
                F
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
            href="/freelancer/dashboard"
            label="Dashboard"
            icon={<DashboardIcon />}
            sidebarOpen={sidebarOpen}
          />
          <NavLink
            href="/freelancer/jobs"
            label="My Jobs"
            icon={<BriefcaseIcon />}
            sidebarOpen={sidebarOpen}
          />
          <NavLink
            href="/freelancer/invoices"
            label="Invoices"
            icon={<FileIcon />}
            sidebarOpen={sidebarOpen}
          />
          <NavLink
            href="/freelancer/payouts"
            label="Payouts"
            icon={<CreditCardIcon />}
            sidebarOpen={sidebarOpen}
          />
          <NavLink
            href="/freelancer/settings"
            label="Settings"
            icon={<SettingsIcon />}
            sidebarOpen={sidebarOpen}
          />
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-800 px-4 py-4 space-y-2">
          <Link
            href="/freelancer/profile"
            className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-300 hover:bg-green-600 hover:text-white transition-colors duration-200 flex items-center gap-3"
          >
            <ProfileIcon />
            {sidebarOpen && 'Profile'}
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200 flex items-center gap-3"
          >
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
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-300 transition-colors duration-200 hover:bg-green-600 hover:text-white active:bg-green-700"
    >
      {icon}
      {sidebarOpen && <span className="text-sm font-medium">{label}</span>}
    </Link>
  );
}
