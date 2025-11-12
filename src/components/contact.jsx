import React from "react";

const ContactSection = () => (
  <section className="bg-gradient-to-b from-[#0f1329] to-[#0a0e27] py-20 px-6">
    <div className="max-w-[1200px] mx-auto">
      <h2 className="text-4xl text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-400 font-bold">
        Get In Touch
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Contact Form */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
          <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
          <form>
            <div className="mb-6">
              <label className="block text-gray-400 mb-2">Full Name</label>
              <input type="text" className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal-400 focus:bg-white/10" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 mb-2">Email Address</label>
              <input type="email" className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal-400 focus:bg-white/10" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 mb-2">Subject</label>
              <input type="text" className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-teal-400 focus:bg-white/10" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea className="w-full p-4 bg-white/5 border border-white/10 rounded-lg text-white min-h-[120px] focus:outline-none focus:border-teal-400 focus:bg-white/10"></textarea>
            </div>
            <button className="w-full bg-teal-400 text-black font-bold py-3 rounded-lg hover:bg-teal-500 transition">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="text-2xl font-bold mb-6">Contact Information</div>
          <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-teal-400 transition cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-teal-400 to-blue-400 text-xl rounded-lg">📧</div>
            <div>
              <h4 className="text-white font-semibold">Email Address</h4>
              <p className="text-gray-400">hello@graphpage.com<br />support@graphpage.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-teal-400 transition cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-teal-400 to-blue-400 text-xl rounded-lg">📞</div>
            <div>
              <h4 className="text-white font-semibold">Phone Number</h4>
              <p className="text-gray-400">+1 (555) 123-4567<br />Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;