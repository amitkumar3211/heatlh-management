'use client';

import { useState } from 'react';
import Link from 'next/link';

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
  </svg>
);

const PlusIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"></path>
  </svg>
);

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"></path>
  </svg>
);

const EditIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

export default function FreelancersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const freelancers = [
    {
      id: 1,
      name: 'Sarah Ahmed',
      email: 'sarah@example.com',
      region: 'North Region',
      rating: 4.9,
      reviews: 24,
      status: 'Active',
      joinedDate: '2024-01-15',
      completedJobs: 18,
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike@example.com',
      region: 'East Region',
      rating: 4.7,
      reviews: 19,
      status: 'Active',
      joinedDate: '2024-02-20',
      completedJobs: 12,
    },
    {
      id: 3,
      name: 'Jessica Park',
      email: 'jessica@example.com',
      region: 'South Region',
      rating: 4.8,
      reviews: 15,
      status: 'Active',
      joinedDate: '2024-03-10',
      completedJobs: 8,
    },
    {
      id: 4,
      name: 'Alex Brown',
      email: 'alex@example.com',
      region: 'West Region',
      rating: 4.6,
      reviews: 11,
      status: 'Pending Approval',
      joinedDate: '2026-02-28',
      completedJobs: 0,
    },
  ];

  const filteredFreelancers = freelancers.filter((freelancer) => {
    const matchesSearch = freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      freelancer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || freelancer.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Pending Approval':
        return 'bg-yellow-100 text-yellow-700';
      case 'Inactive':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Freelancers</h1>
            <p className="text-gray-600">Manage and onboard freelancers</p>
          </div>
          <Link href="/admin/freelancers/add">
            <button className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              <PlusIcon />
              Add Freelancer
            </button>
          </Link>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex gap-4 flex-col md:flex-row">
        <div className="flex-1 relative">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
        >
          <option value="all">All Status</option>
          <option value="Active">Active</option>
          <option value="Pending Approval">Pending Approval</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Freelancers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFreelancers.map((freelancer) => (
          <div
            key={freelancer.id}
            className="bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-green-600 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    {freelancer.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{freelancer.name}</h3>
                    <p className="text-sm text-gray-600">{freelancer.email}</p>
                  </div>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusColor(freelancer.status)}`}
              >
                {freelancer.status}
              </span>
            </div>

            <div className="space-y-3 mb-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Region:</span>
                <span className="font-semibold text-gray-900">{freelancer.region}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Completed Jobs:</span>
                <span className="font-semibold text-gray-900">{freelancer.completedJobs}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Rating:</span>
                <div className="flex items-center gap-1">
                  <StarIcon />
                  <span className="font-semibold text-gray-900">{freelancer.rating}</span>
                  <span className="text-gray-600">({freelancer.reviews})</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Joined:</span>
                <span className="font-semibold text-gray-900">{freelancer.joinedDate}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Link href={`/admin/freelancers/edit`} className="flex-1">
                <button className="w-full p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-2 font-semibold">
                  <EyeIcon />
                  View
                </button>
              </Link>
              <Link href={`/admin/freelancers/edit`} className="flex-1">
                <button className="w-full p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors flex items-center justify-center gap-2 font-semibold">
                  <EditIcon />
                  Edit
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredFreelancers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No freelancers found</p>
        </div>
      )}
    </div>
  );
}
