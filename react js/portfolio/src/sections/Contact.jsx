import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, MapPin, Phone, Mail } from 'lucide-react';
import SectionLayout from '../components/SectionLayout';

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // Using dummy IDs for layout, user would replace these
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
    
    // Simulate API call for demo since EmailJS needs real credentials
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      formRef.current.reset();
      
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <SectionLayout id="contact" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full"></div>
        <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'm currently open to new freelance 
          opportunities and full-time roles. Let's build something awesome together!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass dark:glass-dark p-8 rounded-2xl flex items-start gap-4"
          >
            <div className="p-4 bg-primary-500/10 text-primary-500 rounded-xl">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Email</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-2">Drop me a line anytime</p>
              <a href="mailto:hello@example.com" className="text-primary-500 hover:underline font-medium">
                hello@example.com
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass dark:glass-dark p-8 rounded-2xl flex items-start gap-4"
          >
            <div className="p-4 bg-blue-500/10 text-blue-500 rounded-xl">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Phone</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-2">Mon-Fri from 9am to 6pm.</p>
              <a href="tel:+1234567890" className="text-blue-500 hover:underline font-medium">
                +1 (234) 567-890
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass dark:glass-dark p-8 rounded-2xl flex items-start gap-4"
          >
            <div className="p-4 bg-purple-500/10 text-purple-500 rounded-xl">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Location</h3>
              <p className="text-slate-600 dark:text-slate-400">
                San Francisco, CA<br/>Open to remote work worldwide
              </p>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass dark:glass-dark p-8 rounded-3xl"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                className="w-full px-4 py-3 bg-white/50 dark:bg-black/20 border border-slate-300 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all dark:text-white"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                className="w-full px-4 py-3 bg-white/50 dark:bg-black/20 border border-slate-300 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all dark:text-white"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-white/50 dark:bg-black/20 border border-slate-300 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none dark:text-white"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <Send size={20} /> Send Message
                </>
              )}
            </button>

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 bg-green-500/10 text-green-500 border border-green-500/20 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl flex items-center gap-3"
                >
                  <AlertCircle size={20} />
                  <span>Failed to send the message. Please try again.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </SectionLayout>
  );
}
