import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen p-4 md:p-8 gap-4">
      <div className="max-w-6xl mx-auto ">
        <p className='pb-5 text-gray-600 font-semibold'>Home / <span className='text-black'>Contact</span></p>
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Left Column - Contact Information */}
          <div className="w-full bg-white rounded-lg shadow-md md:w-1/3 p-6 md:p-8">
            {/* Call To Us Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold ml-3">Call To Us</h2>
              </div>
              <p className="text-gray-600 mb-2">We are available 24/7, 7 days a week.</p>
              <p className="text-gray-800">Phone: +880161111222</p>
            </div>
            <hr className='bg-black text-black mb-5 ' />

            {/* Write To US Section */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold ml-3">Write To US</h2>
              </div>
              <p className="text-gray-600 mb-2">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-gray-800 mb-1">customer@exclusive.com</p>
              <p className="text-gray-800">support@exclusive.com</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full bg-white rounded-lg shadow-md md:w-2/3 p-6 md:p-8">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full p-3 bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full p-3 bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone *"
                  className="w-full p-3 bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full p-3 bg-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-primary mb-4"
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-primary hover:bg-red-500 text-white px-6 py-3 rounded transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
