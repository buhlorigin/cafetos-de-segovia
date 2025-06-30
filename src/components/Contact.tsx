
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: 'export'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-6">
            <span className="text-amber-700">Contact</span> & Export Inquiries
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Ready to source premium Nicaraguan coffee? Get in touch for samples, 
            pricing, and export information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-stone-800 mb-6">
              Send us an inquiry
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition-colors"
                >
                  <option value="export">Export Inquiry</option>
                  <option value="samples">Sample Request</option>
                  <option value="partnership">Partnership</option>
                  <option value="general">General Information</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition-colors"
                  placeholder="Tell us about your coffee needs, volume requirements, and any specific questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-4 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-200"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-stone-700 mb-1">Export Manager</h4>
                  <p className="text-stone-600">Maria Segovia</p>
                  <p className="text-amber-700">export@cafetosdesegovia.com</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-stone-700 mb-1">Office</h4>
                  <p className="text-stone-600">Nueva Segovia, Nicaragua</p>
                  <p className="text-stone-600">+505 2345 6789</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-stone-700 mb-1">Business Hours</h4>
                  <p className="text-stone-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-stone-600">Central Standard Time (CST)</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-stone-800 mb-4">
                Export Documentation
              </h3>
              <p className="text-stone-600 mb-4">
                We provide complete export documentation including:
              </p>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                  Quality certificates and cup scores
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                  Farm traceability reports
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                  Processing and shipping documentation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                  Custom sample preparation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
