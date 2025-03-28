import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-[#FF204E] focus:outline-none focus:ring-2 focus:ring-[#FF204E]/50"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-[#FF204E] focus:outline-none focus:ring-2 focus:ring-[#FF204E]/50"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-[#FF204E] focus:outline-none focus:ring-2 focus:ring-[#FF204E]/50"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-[#FF204E] focus:outline-none focus:ring-2 focus:ring-[#FF204E]/50"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-[#FF204E] hover:bg-[#A0153E] text-white px-6 py-3 rounded-lg transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;