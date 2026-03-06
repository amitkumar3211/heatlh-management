'use client';

import { useState } from 'react';
import Link from 'next/link';

const EditIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
  </svg>
);

const SaveIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path>
  </svg>
);

const UploadIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
  </svg>
);

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Sarah Ahmed',
    email: 'sarah@example.com',
    phone: '+49 123 456 7890',
    location: 'Berlin, Germany',
    region: 'North Region',
    bio: 'Professional freelancer with 5+ years of experience in product evaluation and market research.',
    qualifications: ['Product Evaluation', 'Market Research', 'Customer Feedback', 'Survey Participation'],
    bankAccount: 'DE89 3704 0044 0532 0130 00',
    bankName: 'Sample Bank',
  });

  const [newQualification, setNewQualification] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddQualification = () => {
    if (newQualification.trim()) {
      setProfile((prev) => ({
        ...prev,
        qualifications: [...prev.qualifications, newQualification],
      }));
      setNewQualification('');
    }
  };

  const handleRemoveQualification = (index) => {
    setProfile((prev) => ({
      ...prev,
      qualifications: prev.qualifications.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your profile and qualifications</p>
        </div>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            <EditIcon />
            Edit Profile
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
            {!isEditing ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Full Name</span>
                  <span className="font-semibold text-gray-900">{profile.fullName}</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Email</span>
                  <span className="font-semibold text-gray-900">{profile.email}</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Phone</span>
                  <span className="font-semibold text-gray-900">{profile.phone}</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Location</span>
                  <span className="font-semibold text-gray-900">{profile.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Assigned Region</span>
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                    {profile.region}
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={profile.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Bio</label>
                  <textarea
                    name="bio"
                    value={profile.bio}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                  ></textarea>
                </div>
              </div>
            )}
          </div>

          {/* Qualifications */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Qualifications</h2>
            <div className="space-y-4">
              {profile.qualifications.map((qualification, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <span className="font-medium text-gray-900">{qualification}</span>
                  {isEditing && (
                    <button
                      onClick={() => handleRemoveQualification(index)}
                      className="text-red-600 hover:text-red-700 font-semibold"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}

              {isEditing && (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newQualification}
                    onChange={(e) => setNewQualification(e.target.value)}
                    placeholder="Add a new qualification..."
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleAddQualification();
                      }
                    }}
                  />
                  <button
                    onClick={handleAddQualification}
                    className="px-4 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-semibold"
                  >
                    Add
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Banking Information */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Banking Information</h2>
            {!isEditing ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Bank Name</span>
                  <span className="font-semibold text-gray-900">{profile.bankName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Account Number (IBAN)</span>
                  <span className="font-semibold text-gray-900">{profile.bankAccount}</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Bank Name</label>
                  <input
                    type="text"
                    name="bankName"
                    value={profile.bankName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Bank Account (IBAN)</label>
                  <input
                    type="text"
                    name="bankAccount"
                    value={profile.bankAccount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {isEditing && (
            <div className="flex gap-4">
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <SaveIcon />
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Picture */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6 text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-4xl mx-auto mb-4">
              {profile.fullName.charAt(0)}
            </div>
            {isEditing && (
              <button className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                <UploadIcon />
                Upload Photo
              </button>
            )}
          </div>

          {/* Account Status */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Account Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Status</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Member Since</span>
                <span className="font-semibold text-gray-900 text-sm">Jan 15, 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Jobs Completed</span>
                <span className="font-semibold text-gray-900 text-sm">18</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">Rating</span>
                <span className="font-semibold text-yellow-600 text-sm">4.9/5 ⭐</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
