'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditSetting() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    settingKey: '',
    settingValue: '',
    description: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      router.push('/admin/settings');
    }, 2000);
  };

  const handleCancel = () => {
    router.push('/admin/settings');
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mb-8">
        <button
          onClick={handleCancel}
          className="text-blue-600 hover:text-blue-700 mb-4 flex items-center gap-2"
        >
          ← Back to Settings
        </button>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Edit Setting</h1>
        <p className="text-gray-600">Update platform settings</p>
      </div>

      {showSuccess && (
        <div className="mb-6 bg-green-100 border-2 border-green-400 text-green-700 px-6 py-4 rounded-lg">
          ✓ Setting updated successfully!
        </div>
      )}

      <div className="bg-white border-2 border-gray-200 rounded-lg p-8 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-800 font-semibold mb-3">Setting Key *</label>
              <input
                type="text"
                name="settingKey"
                value={formData.settingKey}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-green-600 transition"
                placeholder="e.g., platform_name"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-3">Setting Value *</label>
              <input
                type="text"
                name="settingValue"
                value={formData.settingValue}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-green-600 transition"
                placeholder="Enter setting value"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-3">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="6"
              className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-green-600 transition resize-none"
              placeholder="Setting description..."
            />
          </div>

          <div className="flex gap-4 justify-end pt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition"
            >
              Update Setting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
    platformName: 'Health Management Platform',
    currency: 'USD',
    timezone: 'UTC',
    platformCommission: 15,
    minimumJobAmount: 100,
    maxJobAmount: 50000,
    supportEmail: 'support@example.com',
    maintenanceMode: false,
    emailNotifications: true,
    twoFactorAuth: true,
    autoPayoutEnabled: true,
    payoutSchedule: 'Weekly',
    description: 'Global freelance marketplace for health management services'
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Settings updated successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800 rounded-lg shadow-xl p-8 border border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <BackIcon />
            <h1 className="text-3xl font-bold text-white">Edit Settings</h1>
          </div>

          {message && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded text-green-300">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-slate-700 pb-6">
              <h2 className="text-lg font-semibold text-white mb-4">General Settings</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Platform Name</label>
                <input
                  type="text"
                  name="platformName"
                  value={formData.platformName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Currency</label>
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>JPY</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Timezone</label>
                  <select
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                    <option>UTC</option>
                    <option>EST</option>
                    <option>CST</option>
                    <option>PST</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 mt-4">Support Email</label>
                <input
                  type="email"
                  name="supportEmail"
                  value={formData.supportEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="border-b border-slate-700 pb-6">
              <h2 className="text-lg font-semibold text-white mb-4">Financial Settings</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Platform Commission (%)</label>
                  <input
                    type="number"
                    name="platformCommission"
                    value={formData.platformCommission}
                    onChange={handleChange}
                    min="0"
                    max="100"
                    step="0.1"
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Minimum Job Amount ($)</label>
                  <input
                    type="number"
                    name="minimumJobAmount"
                    value={formData.minimumJobAmount}
                    onChange={handleChange}
                    step="0.01"
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Maximum Job Amount ($)</label>
                <input
                  type="number"
                  name="maxJobAmount"
                  value={formData.maxJobAmount}
                  onChange={handleChange}
                  step="0.01"
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Payout Schedule</label>
                <select
                  name="payoutSchedule"
                  value={formData.payoutSchedule}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Bi-weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
            </div>

            <div className="border-b border-slate-700 pb-6">
              <h2 className="text-lg font-semibold text-white mb-4">Security & Features</h2>
              
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="emailNotifications"
                    checked={formData.emailNotifications}
                    onChange={handleChange}
                    className="w-4 h-4 bg-slate-700 border border-slate-600 rounded"
                  />
                  <span className="text-gray-300">Email Notifications</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="twoFactorAuth"
                    checked={formData.twoFactorAuth}
                    onChange={handleChange}
                    className="w-4 h-4 bg-slate-700 border border-slate-600 rounded"
                  />
                  <span className="text-gray-300">Two-Factor Authentication</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="autoPayoutEnabled"
                    checked={formData.autoPayoutEnabled}
                    onChange={handleChange}
                    className="w-4 h-4 bg-slate-700 border border-slate-600 rounded"
                  />
                  <span className="text-gray-300">Auto Payout Enabled</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="maintenanceMode"
                    checked={formData.maintenanceMode}
                    onChange={handleChange}
                    className="w-4 h-4 bg-slate-700 border border-slate-600 rounded"
                  />
                  <span className="text-gray-300">Maintenance Mode</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition"
              >
                <SaveIcon />
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => window.history.back()}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded font-medium transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
