import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';
import SelectInput from '../components/SelectInput';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [profileData, setProfileData] = useState({
    // Personal Information
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-05-15',
    nationality: 'United States',
    // Address Information
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
    // Security Settings
    twoFactorEnabled: true,
    emailNotifications: true,
    smsNotifications: false,
    // Preferences
    language: 'English',
    timezone: 'UTC-5',
    currency: 'USD'
  });
  const [errors, setErrors] = useState({});

  // Basic validation for required fields
  const validateTab = () => {
    const tabErrors = {};
    if (activeTab === 'personal') {
      if (!profileData.firstName) tabErrors.firstName = 'First name is required';
      if (!profileData.lastName) tabErrors.lastName = 'Last name is required';
      if (!profileData.email) tabErrors.email = 'Email is required';
    }
    if (activeTab === 'address') {
      if (!profileData.address) tabErrors.address = 'Address is required';
      if (!profileData.city) tabErrors.city = 'City is required';
      if (!profileData.state) tabErrors.state = 'State is required';
      if (!profileData.zipCode) tabErrors.zipCode = 'ZIP code is required';
      if (!profileData.country) tabErrors.country = 'Country is required';
    }
    setErrors(tabErrors);
    return Object.keys(tabErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    if (validateTab()) {
      alert('Profile updated successfully!');
      console.log('Profile updated:', profileData);
      // Handle profile update
    }
  };

  // Renderers for each tab using reusable components
  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput
          label="First Name"
          name="firstName"
          value={profileData.firstName}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
        {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
        <TextInput
          label="Last Name"
          name="lastName"
          value={profileData.lastName}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
        {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          value={profileData.email}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
        {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
        <TextInput
          label="Phone Number"
          name="phone"
          type="tel"
          value={profileData.phone}
          onChange={handleInputChange}
        />
        <TextInput
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          value={profileData.dateOfBirth}
          onChange={handleInputChange}
        />
        <TextInput
          label="Nationality"
          name="nationality"
          value={profileData.nationality}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );

  const renderAddressInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Address Information</h2>
      <div className="space-y-6">
        <TextInput
          label="Street Address"
          name="address"
          value={profileData.address}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
        {errors.address && <span className="text-red-500 text-xs">{errors.address}</span>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TextInput
            label="City"
            name="city"
            value={profileData.city}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
          {errors.city && <span className="text-red-500 text-xs">{errors.city}</span>}
          <TextInput
            label="State/Province"
            name="state"
            value={profileData.state}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
          {errors.state && <span className="text-red-500 text-xs">{errors.state}</span>}
          <TextInput
            label="ZIP/Postal Code"
            name="zipCode"
            value={profileData.zipCode}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
          {errors.zipCode && <span className="text-red-500 text-xs">{errors.zipCode}</span>}
        </div>
        <TextInput
          label="Country"
          name="country"
          value={profileData.country}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
        {errors.country && <span className="text-red-500 text-xs">{errors.country}</span>}
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Settings</h2>
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="twoFactorEnabled"
              checked={profileData.twoFactorEnabled}
              onChange={handleInputChange}
              className="sr-only peer"
              aria-checked={profileData.twoFactorEnabled}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h3 className="font-medium text-gray-900">Email Notifications</h3>
            <p className="text-sm text-gray-600">Receive important updates via email</p>
          </div>
          <input
            type="checkbox"
            name="emailNotifications"
            checked={profileData.emailNotifications}
            onChange={handleInputChange}
            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            aria-checked={profileData.emailNotifications}
          />
        </div>
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h3 className="font-medium text-gray-900">SMS Notifications</h3>
            <p className="text-sm text-gray-600">Receive important updates via SMS</p>
          </div>
          <input
            type="checkbox"
            name="smsNotifications"
            checked={profileData.smsNotifications}
            onChange={handleInputChange}
            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            aria-checked={profileData.smsNotifications}
          />
        </div>
      </div>
    </div>
  );

  const renderPreferences = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Preferences</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SelectInput
          label="Language"
          name="language"
          value={profileData.language}
          onChange={handleInputChange}
          options={[
            { value: 'English', label: 'English' },
            { value: 'Spanish', label: 'Spanish' },
            { value: 'French', label: 'French' },
            { value: 'German', label: 'German' },
            { value: 'Chinese', label: 'Chinese' },
          ]}
        />
        <SelectInput
          label="Timezone"
          name="timezone"
          value={profileData.timezone}
          onChange={handleInputChange}
          options={[
            { value: 'UTC-5', label: 'Eastern Time (UTC-5)' },
            { value: 'UTC-6', label: 'Central Time (UTC-6)' },
            { value: 'UTC-7', label: 'Mountain Time (UTC-7)' },
            { value: 'UTC-8', label: 'Pacific Time (UTC-8)' },
            { value: 'UTC+0', label: 'UTC' },
            { value: 'UTC+1', label: 'Central European Time (UTC+1)' },
          ]}
        />
        <SelectInput
          label="Currency"
          name="currency"
          value={profileData.currency}
          onChange={handleInputChange}
          options={[
            { value: 'USD', label: 'USD ($)' },
            { value: 'EUR', label: 'EUR (€)' },
            { value: 'GBP', label: 'GBP (£)' },
            { value: 'JPY', label: 'JPY (¥)' },
            { value: 'CAD', label: 'CAD (C$)' },
          ]}
        />
      </div>
    </div>
  );

  const renderCurrentTab = () => {
    switch (activeTab) {
      case 'personal':
        return renderPersonalInfo();
      case 'address':
        return renderAddressInfo();
      case 'security':
        return renderSecuritySettings();
      case 'preferences':
        return renderPreferences();
      default:
        return renderPersonalInfo();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Profile Tabs">
              {[
                { id: 'personal', name: 'Personal Info', icon: '👤' },
                { id: 'address', name: 'Address', icon: '📍' },
                { id: 'security', name: 'Security', icon: '🔒' },
                { id: 'preferences', name: 'Preferences', icon: '⚙️' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  aria-current={activeTab === tab.id ? 'page' : undefined}
                >
                  <span className="mr-2" aria-hidden="true">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
          {/* Tab Content */}
          <div className="p-6">
            {renderCurrentTab()}
            {/* Save Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <Link
                  to="/dashboard"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  ← Back to Dashboard
                </Link>
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 