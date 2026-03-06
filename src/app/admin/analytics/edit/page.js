'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditAnalyticsRecord() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    reportName: '',
    dateRange: '',
    totalRevenue: '',
    totalOrders: '',
    activeFreelancers: '',
    avgRating: '',
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
      router.push('/admin/analytics');
    }, 2000);
  };

  const handleCancel = () => {
    router.push('/admin/analytics');
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mb-8">
        <button
          onClick={handleCancel}
          className="text-blue-600 hover:text-blue-700 mb-4 flex items-center gap-2"
        >
          ← Back to Analytics
        </button>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Edit Analytics Record</h1>
        <p className="text-gray-600">Update analytics data and metrics</p>
      </div>

      {showSuccess && (
        <div className="mb-6 bg-green-100 border-2 border-green-400 text-green-700 px-6 py-4 rounded-lg">
          ✓ Analytics record updated successfully!
        </div>
      )}

      <div className="bg-white border-2 border-gray-200 rounded-lg p-8 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-800 font-semibold mb-3">Report Name *</label>
              <input
                type="text"
                name="reportName"
                value={formData.reportName}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-green-600 transition"
                placeholder="Enter report name"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-3">Date Range *</label>
              <input
                type="text"
                name="dateRange"
                value={formData.dateRange}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-green-600 transition"
                placeholder="e.g., January 2025"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-800 font-semibold mb-3">Total Revenue *</label>
              <input
                type="number"
                name="totalRevenue"
                value={formData.totalRevenue}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-green-600 transition"
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-3">Total Orders *</label>
              <input
                type="number"
                name="totalOrders"
                value={formData.totalOrders}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-green-600 transition"
                placeholder="0"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-800 font-semibold mb-3">Active Freelancers *</label>
              <input
                type="number"
                name="activeFreelancers"
                value={formData.activeFreelancers}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-green-600 transition"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-3">Average Rating *</label>
              <input
                type="number"
                name="avgRating"
                value={formData.avgRating}
                onChange={handleChange}
                required
                step="0.1"
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-green-600 transition"
                placeholder="0.0"
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
              placeholder="Analytics description..."
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
              Update Analytics
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
    reportName: 'Monthly Analytics Report',
    dateRange: 'January 2025',
    metrics: {
      totalRevenue: 45000,
      totalOrders: 320,
      activeFreelancers: 125,
      avgRating: 4.7
    },
    description: 'Comprehensive monthly analytics and performance metrics'
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMetricChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      metrics: { ...prev.metrics, [name]: value }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Analytics settings updated successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800 rounded-lg shadow-xl p-8 border border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <BackIcon />
            <h1 className="text-3xl font-bold text-white">Edit Analytics</h1>
          </div>

          {message && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded text-green-300">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Report Name</label>
              <input
                type="text"
                name="reportName"
                value={formData.reportName}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Date Range</label>
              <input
                type="text"
                name="dateRange"
                value={formData.dateRange}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="border-t border-slate-700 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Total Revenue</label>
                  <input
                    type="number"
                    name="totalRevenue"
                    value={formData.metrics.totalRevenue}
                    onChange={handleMetricChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Total Orders</label>
                  <input
                    type="number"
                    name="totalOrders"
                    value={formData.metrics.totalOrders}
                    onChange={handleMetricChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Active Freelancers</label>
                  <input
                    type="number"
                    name="activeFreelancers"
                    value={formData.metrics.activeFreelancers}
                    onChange={handleMetricChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Avg Rating</label>
                  <input
                    type="number"
                    name="avgRating"
                    step="0.1"
                    value={formData.metrics.avgRating}
                    onChange={handleMetricChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
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
