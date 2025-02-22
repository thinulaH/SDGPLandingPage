import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  occupation: string;
  message: string;
}

const BetaSignup = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    occupation: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await addDoc(collection(db, 'beta-signups'), {
        ...formData,
        timestamp: new Date()
      });
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        occupation: '',
        message: ''
      });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting your form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-purple-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Join the SnickerSnap Beta</h1>
        <p className="text-center text-gray-600 mb-12">
          Be among the first to experience SnickerSnap and help shape the future of learning!
        </p>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">
                I am a...
              </label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                placeholder="Parent / Teacher / Educational Professional"
                value={formData.occupation}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            {error && (
              <p className="text-red-600 text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition-all flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <Send className="w-5 h-5" />
              {isLoading ? 'Submitting...' : 'Join the Beta'}
            </button>

            {submitted && (
              <p className="text-green-600 text-center animate-fade-in">
                Thank you for your interest! Your application has been submitted successfully.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BetaSignup;