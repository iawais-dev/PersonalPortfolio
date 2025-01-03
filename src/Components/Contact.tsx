'use client'
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex justify-center flex-col text-white py-16 px-6">
      {/* Container */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-6">Contact Me</h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl mb-8 leading-relaxed">
          Feel free to reach out for collaborations, feedback, or just a chat! I&apos;d love to connect.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Message Input */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-4 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-md hover:bg-yellow-300 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
