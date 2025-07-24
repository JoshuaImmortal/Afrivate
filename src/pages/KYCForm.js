import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';
import SelectInput from '../components/SelectInput';

const KYCForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    // Address Information
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    // Identity Documents
    idType: '',
    idNumber: '',
    idExpiry: '',
    // Financial Information
    occupation: '',
    employer: '',
    annualIncome: '',
    sourceOfFunds: '',
    // Additional Information
    purpose: '',
    riskLevel: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});

  // Basic validation for required fields
  const validateStep = () => {
    const stepErrors = {};
    if (currentStep === 1) {
      if (!formData.firstName) stepErrors.firstName = 'First name is required';
      if (!formData.lastName) stepErrors.lastName = 'Last name is required';
      if (!formData.email) stepErrors.email = 'Email is required';
    }
    if (currentStep === 5) {
      if (!formData.purpose) stepErrors.purpose = 'Purpose is required';
      if (!formData.riskLevel) stepErrors.riskLevel = 'Risk level is required';
      if (!formData.agreeToTerms) stepErrors.agreeToTerms = 'You must agree to the terms';
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    if (validateStep() && currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      // Handle form submission
      alert('Form submitted successfully!');
      console.log('Form submitted:', formData);
    }
  };

  // Step renderers using reusable components
  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
        {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
        <TextInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
        {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
        {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
        <TextInput
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <TextInput
          label="Date of Birth"
          name="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
        />
        <TextInput
          label="Nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Address Information</h2>
      
      <div className="space-y-6">
        <TextInput
          label="Street Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
        {errors.address && <span className="text-red-500 text-xs">{errors.address}</span>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TextInput
            label="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
          {errors.city && <span className="text-red-500 text-xs">{errors.city}</span>}
          <TextInput
            label="State/Province"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
          {errors.state && <span className="text-red-500 text-xs">{errors.state}</span>}
          <TextInput
            label="ZIP/Postal Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            required
            aria-required="true"
          />
          {errors.zipCode && <span className="text-red-500 text-xs">{errors.zipCode}</span>}
        </div>
        
        <TextInput
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
        {errors.country && <span className="text-red-500 text-xs">{errors.country}</span>}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Identity Documents</h2>
      
      <div className="space-y-6">
        <SelectInput
          label="ID Type"
          name="idType"
          value={formData.idType}
          onChange={handleInputChange}
          required
          aria-required="true"
          options={[
            { value: '', label: 'Select ID Type' },
            { value: 'passport', label: 'Passport' },
            { value: 'drivers_license', label: 'Driver\'s License' },
            { value: 'national_id', label: 'National ID' },
            { value: 'other', label: 'Other' },
          ]}
        />
        {errors.idType && <span className="text-red-500 text-xs">{errors.idType}</span>}
        <TextInput
          label="ID Number"
          name="idNumber"
          value={formData.idNumber}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
        {errors.idNumber && <span className="text-red-500 text-xs">{errors.idNumber}</span>}
        <TextInput
          label="ID Expiry Date"
          name="idExpiry"
          type="date"
          value={formData.idExpiry}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
        {errors.idExpiry && <span className="text-red-500 text-xs">{errors.idExpiry}</span>}
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-2">Document Upload</h3>
          <p className="text-sm text-blue-700 mb-4">
            Please upload a clear copy of your ID document. Supported formats: JPG, PNG, PDF (max 5MB)
          </p>
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput
          label="Occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
        {errors.occupation && <span className="text-red-500 text-xs">{errors.occupation}</span>}
        <TextInput
          label="Employer/Company"
          name="employer"
          value={formData.employer}
          onChange={handleInputChange}
          required
          aria-required="true"
        />
        {errors.employer && <span className="text-red-500 text-xs">{errors.employer}</span>}
        <SelectInput
          label="Annual Income"
          name="annualIncome"
          value={formData.annualIncome}
          onChange={handleInputChange}
          required
          aria-required="true"
          options={[
            { value: '', label: 'Select Income Range' },
            { value: 'under_25k', label: 'Under $25,000' },
            { value: '25k_50k', label: '$25,000 - $50,000' },
            { value: '50k_100k', label: '$50,000 - $100,000' },
            { value: '100k_250k', label: '$100,000 - $250,000' },
            { value: 'over_250k', label: 'Over $250,000' },
          ]}
        />
        {errors.annualIncome && <span className="text-red-500 text-xs">{errors.annualIncome}</span>}
        <SelectInput
          label="Source of Funds"
          name="sourceOfFunds"
          value={formData.sourceOfFunds}
          onChange={handleInputChange}
          required
          aria-required="true"
          options={[
            { value: '', label: 'Select Source' },
            { value: 'employment', label: 'Employment' },
            { value: 'business', label: 'Business' },
            { value: 'investment', label: 'Investment' },
            { value: 'inheritance', label: 'Inheritance' },
            { value: 'other', label: 'Other' },
          ]}
        />
        {errors.sourceOfFunds && <span className="text-red-500 text-xs">{errors.sourceOfFunds}</span>}
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
      <div className="space-y-6">
        <SelectInput
          label="Purpose of Account"
          name="purpose"
          value={formData.purpose}
          onChange={handleInputChange}
          required
          aria-required="true"
          options={[
            { value: '', label: 'Select Purpose' },
            { value: 'personal', label: 'Personal Use' },
            { value: 'business', label: 'Business' },
            { value: 'investment', label: 'Investment' },
            { value: 'trading', label: 'Trading' },
            { value: 'other', label: 'Other' },
          ]}
        />
        {errors.purpose && <span className="text-red-500 text-xs">{errors.purpose}</span>}
        <SelectInput
          label="Risk Tolerance Level"
          name="riskLevel"
          value={formData.riskLevel}
          onChange={handleInputChange}
          required
          aria-required="true"
          options={[
            { value: '', label: 'Select Risk Level' },
            { value: 'low', label: 'Low Risk' },
            { value: 'medium', label: 'Medium Risk' },
            { value: 'high', label: 'High Risk' },
          ]}
        />
        {errors.riskLevel && <span className="text-red-500 text-xs">{errors.riskLevel}</span>}
        <div className="flex items-start">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            required
            aria-required="true"
            aria-label="Agree to terms"
          />
          <label className="ml-3 text-sm text-yellow-800">
            I confirm that all information provided is accurate and complete. I understand that providing false information may result in account suspension or legal action.
          </label>
        </div>
        {errors.agreeToTerms && <span className="text-red-500 text-xs">{errors.agreeToTerms}</span>}
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      case 5:
        return renderStep5();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">KYC Verification</h1>
            <p className="text-gray-600">Complete your Know Your Customer verification to access all features</p>
          </div>
          {/* Step Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {step < 5 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Step {currentStep} of 5
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8" aria-label="KYC Form">
            {renderCurrentStep()}
            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-2 rounded-lg font-medium ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-disabled={currentStep === 1}
              >
                Previous
              </button>
              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
                >
                  Submit KYC
                </button>
              )}
            </div>
          </form>
          {/* Back to Dashboard */}
          <div className="mt-8 text-center">
            <Link to="/dashboard" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCForm; 