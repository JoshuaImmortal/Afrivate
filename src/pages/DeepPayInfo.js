import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DeepPayInfo = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const faqs = [
    {
      question: "What is DeepPay Protection?",
      answer: "DeepPay Protection is our advanced security system that safeguards your transactions using AI-powered fraud detection, real-time monitoring, and multi-layer encryption to ensure your payments are always secure."
    },
    {
      question: "How does DeepPay work?",
      answer: "DeepPay analyzes transaction patterns, verifies user identity through multiple factors, and uses machine learning to detect suspicious activities in real-time, preventing fraud before it happens."
    },
    {
      question: "Is DeepPay Protection free?",
      answer: "Yes, DeepPay Protection is included at no additional cost for all verified users. It's our commitment to keeping your financial transactions secure."
    },
    {
      question: "What happens if fraud is detected?",
      answer: "If suspicious activity is detected, the transaction is automatically flagged for review. You'll receive an immediate notification, and our security team will investigate to ensure your account remains protected."
    },
    {
      question: "Can I disable DeepPay Protection?",
      answer: "For your security, DeepPay Protection cannot be disabled as it's a core security feature. This ensures all your transactions remain protected at all times."
    }
  ];

  const features = [
    {
      icon: "🔒",
      title: "AI-Powered Detection",
      description: "Advanced machine learning algorithms detect and prevent fraudulent transactions in real-time."
    },
    {
      icon: "⚡",
      title: "Instant Alerts",
      description: "Receive immediate notifications about suspicious activities and transaction attempts."
    },
    {
      icon: "🛡️",
      title: "Multi-Layer Security",
      description: "Multiple security layers including encryption, biometric verification, and behavioral analysis."
    },
    {
      icon: "📊",
      title: "Risk Assessment",
      description: "Continuous risk assessment and scoring to maintain the highest security standards."
    },
    {
      icon: "🌐",
      title: "Global Coverage",
      description: "Protection available for transactions worldwide with local compliance and regulations."
    },
    {
      icon: "🔍",
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring and support to ensure your account is always protected."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            DeepPay Protection
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Advanced AI-powered security that protects your transactions 24/7 with real-time fraud detection and instant alerts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get Protected
            </Link>
            <Link
              to="/kyc-form"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Complete KYC
            </Link>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center mb-12">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 mx-2 rounded-lg font-medium transition duration-300 ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-3 mx-2 rounded-lg font-medium transition duration-300 ${
                activeTab === 'features'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-3 mx-2 rounded-lg font-medium transition duration-300 ${
                activeTab === 'faq'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              FAQ
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-96">
            {activeTab === 'overview' && (
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Next-Generation Payment Security
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      DeepPay Protection uses cutting-edge artificial intelligence and machine learning to provide unparalleled security for your financial transactions.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Real-time fraud detection
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Instant security alerts
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Multi-factor authentication
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        24/7 account monitoring
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Protected by DeepPay
                      </h3>
                      <p className="text-gray-600">
                        Your transactions are secured with industry-leading protection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Advanced Security Features
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover the powerful features that make DeepPay Protection the most advanced security solution for your financial transactions.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-lg text-gray-600">
                    Find answers to common questions about DeepPay Protection
                  </p>
                </div>
                
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Protected?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust DeepPay Protection for their financial security. Complete your KYC verification to activate protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kyc-form"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Complete KYC Now
            </Link>
            <Link
              to="/dashboard"
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeepPayInfo; 