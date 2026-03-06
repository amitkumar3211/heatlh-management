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
    siteName: 'FreelanceHub',
    contactEmail: 'admin@freelancehub.com',
    supportPhone: '+49 123 456 7890',
    currency: 'EUR',
    timezone: 'CET',
    paymentGateway: 'Stripe',
    travelCostRate: '0.30',
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
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
          <p className="text-gray-600">Configure system and business settings</p>
        </div>
        {/* <Link href="/admin/settings/add">
          <button className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"></path></svg>
            Add Setting
          </button>
        </Link> */}
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
          {/* General Settings */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">General Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Site Name
                </label>
                <input
                  type="text"
                  name="siteName"
                  value={settings.siteName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Admin Email
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={settings.contactEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Support Phone
                </label>
                <input
                  type="tel"
                  name="supportPhone"
                  value={settings.supportPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Timezone
                </label>
                <select
                  name="timezone"
                  value={settings.timezone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                >
                  <option value="CET">Central European Time (CET)</option>
                  <option value="CEST">Central European Summer Time (CEST)</option>
                  <option value="GMT">Greenwich Mean Time (GMT)</option>
                </select>
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Business Settings */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Currency
                </label>
                <select
                  name="currency"
                  value={settings.currency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                >
                  <option value="EUR">Euro (€)</option>
                  <option value="USD">US Dollar ($)</option>
                  <option value="GBP">British Pound (£)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Travel Cost Rate (per km)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name="travelCostRate"
                    value={settings.travelCostRate}
                    onChange={handleChange}
                    step="0.01"
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                  />
                  <span className="text-gray-600 font-semibold">€/km</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Payment Gateway
                </label>
                <select
                  name="paymentGateway"
                  value={settings.paymentGateway}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                >
                  <option value="Stripe">Stripe</option>
                  <option value="PayPal">PayPal</option>
                  <option value="Wise">Wise</option>
                </select>
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
                  <p className="font-semibold text-gray-900">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-600">Add extra security to your account</p>
                </div>
                <button className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-semibold">
                  Enable
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Change Password</p>
                  <p className="text-sm text-gray-600">Update your account password</p>
                </div>
                <button className="px-4 py-2 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-50 transition-colors font-semibold">
                  Change
                </button>
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Notification Settings */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Notification Settings</h2>
            <div className="space-y-4">
              {[
                { title: 'New Order Alerts', description: 'Get notified when new orders are created' },
                { title: 'Payment Alerts', description: 'Get notified for payment status updates' },
                { title: 'Freelancer Alerts', description: 'Get notified when freelancers submit work' },
                { title: 'Email Digest', description: 'Receive daily summary of activities' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-green-600 rounded cursor-pointer" />
                </div>
              ))}
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
