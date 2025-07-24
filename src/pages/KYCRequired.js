import React from 'react';
import { Link } from 'react-router-dom';

const KYCRequired = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            KYC Verification Required
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-8">
            To access all features and ensure the security of your account, please complete your Know Your Customer (KYC) verification process.
          </p>

          {/* Benefits List */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-blue-900 mb-4">Complete KYC to unlock:</h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-center text-sm text-blue-800">
                <svg className="w-4 h-4 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Full transaction limits
              </li>
              <li className="flex items-center text-sm text-blue-800">
                <svg className="w-4 h-4 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                DeepPay Protection
              </li>
              <li className="flex items-center text-sm text-blue-800">
                <svg className="w-4 h-4 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Advanced security features
              </li>
              <li className="flex items-center text-sm text-blue-800">
                <svg className="w-4 h-4 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Priority customer support
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              to="/kyc-form"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 block"
            >
              Complete KYC Now
            </Link>
            
            <Link
              to="/deeppay-info"
              className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 block"
            >
              Learn About DeepPay
            </Link>
            
            <Link
              to="/dashboard"
              className="w-full text-blue-600 py-3 px-6 rounded-lg font-medium hover:text-blue-700 transition duration-300 block"
            >
              Back to Dashboard
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              KYC verification typically takes 2-3 business days to complete. You'll receive email notifications throughout the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCRequired; 