'use client';

import { useState } from 'react';
import Link from 'next/link';

const SaveIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path>
  </svg>
);

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    fullName: 'Sarah Ahmed',
    email: 'sarah@example.com',
    phone: '+49 123 456 7890',
    location: 'Berlin, Germany',
    emailNotifications: true,
    smsNotifications: false,
    jobAlerts: true,
    payoutAlerts: true,
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account preferences and notifications</p>
        </div>
        <Link href="/freelancer/settings/add">
          <button className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"></path></svg>
            Update Setting
          </button>
        </Link>
      </div>

      {/* Save Message */}
      {saved && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          ✓ Settings saved successfully!
        </div>
      )}

      {/* Settings Tabs */}
      <div className="bg-white rounded-lg border-2 border-gray-200 p-8">
        <div className="space-y-8">
          {/* Account Settings */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={settings.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={settings.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={settings.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Notification Settings */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Notification Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-600">Receive updates via email</p>
                </div>
                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={settings.emailNotifications}
                  onChange={handleChange}
                  className="w-5 h-5 text-green-600 rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">SMS Notifications</p>
                  <p className="text-sm text-gray-600">Receive updates via SMS (requires verification)</p>
                </div>
                <input
                  type="checkbox"
                  name="smsNotifications"
                  checked={settings.smsNotifications}
                  onChange={handleChange}
                  className="w-5 h-5 text-green-600 rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Job Alerts</p>
                  <p className="text-sm text-gray-600">Get notified about new jobs in your region</p>
                </div>
                <input
                  type="checkbox"
                  name="jobAlerts"
                  checked={settings.jobAlerts}
                  onChange={handleChange}
                  className="w-5 h-5 text-green-600 rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Payout Alerts</p>
                  <p className="text-sm text-gray-600">Get notified about payment status updates</p>
                </div>
                <input
                  type="checkbox"
                  name="payoutAlerts"
                  checked={settings.payoutAlerts}
                  onChange={handleChange}
                  className="w-5 h-5 text-green-600 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Security Settings */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Change Password</p>
                  <p className="text-sm text-gray-600">Update your account password</p>
                </div>
                <button className="px-4 py-2 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-50 transition-colors font-semibold">
                  Change
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-600">Add extra security to your account</p>
                </div>
                <button className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-semibold">
                  Enable
                </button>
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Danger Zone */}
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-6">Danger Zone</h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Delete Account</h3>
              <p className="text-gray-600 mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-semibold">
                Delete Account
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            <SaveIcon />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
