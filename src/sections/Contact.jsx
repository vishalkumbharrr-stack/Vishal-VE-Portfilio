import { useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const form = useRef();

  // तुमचा WhatsApp नंबर (देशाच्या कोडसह - 91)
  const WHATSAPP_NUMBER = "919607177067"; 

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();

    // फॉर्ममधील माहिती गोळा करा
    const formData = new FormData(form.current);
    const name = formData.get('from_name');
    const mobile = formData.get('from_mobile'); // Email च्या जागी Mobile केले
    const projectType = formData.get('project_type');
    const timeline = formData.get('timeline');
    const message = formData.get('message');

    // WhatsApp साठी मेसेज तयार करा (%0A म्हणजे नवीन ओळ)
    const text = `*New Project Enquiry*%0A%0A` +
                 `*Name:* ${name}%0A` +
                 `*Mobile:* ${mobile}%0A` + // इथे Mobile टाकले आहे
                 `*Project Type:* ${projectType}%0A` +
                 `*Timeline:* ${timeline}%0A%0A` +
                 `*Details:*%0A${message}`;

    // WhatsApp लिंक उघडा
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="pt-32 pb-20 max-w-6xl mx-auto px-6">
      <SectionHeading title="Get In" highlight="Touch" subtitle="Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-[#0b0f19] border border-white/10 rounded-2xl p-6 space-y-5">
            <h3 className="text-lg font-bold text-white mb-2">Contact Information</h3>
            {[
              { icon: Mail, label: "Email", value: "vishalkumbharrr@gmail.com", color: "bg-blue-600" },
              { icon: Phone, label: "WhatsApp", value: "+91 9607177067", color: "bg-emerald-500" },
              { icon: MapPin, label: "Location", value: "Available Worldwide (Remote)", color: "bg-purple-600" },
              { icon: Clock, label: "Availability", value: "Flexible with time zones", color: "bg-orange-500" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center text-white shrink-0`}><item.icon size={18} /></div>
                <div>
                  <p className="text-[11px] text-gray-400">{item.label}</p>
                  <p className="text-xs font-semibold text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="bg-[#0b0f19] border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white">Why Choose Me?</h3>
            {[
              { title: "Quick Turnaround", desc: "Fast delivery without compromising quality", dot: "bg-blue-500" },
              { title: "Professional Quality", desc: "Cinematic edits with attention to detail", dot: "bg-purple-500" },
              { title: "Clear Communication", desc: "Regular updates and transparent process", dot: "bg-emerald-500" },
            ].map((reason, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className={`w-2 h-2 rounded-full ${reason.dot} mt-1.5 shrink-0`} />
                <div>
                  <h4 className="text-xs font-bold text-white">{reason.title}</h4>
                  <p className="text-[11px] text-gray-400">{reason.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-7 bg-[#0b0f19] border border-white/10 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-white mb-6">Send Message</h3>
          
          <form ref={form} onSubmit={sendWhatsAppMessage} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-300 mb-2">Name *</label>
                <input type="text" name="from_name" required placeholder="Your name" className="w-full bg-[#131826] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-accent-blue" />
              </div>
              <div>
                <label className="block text-xs text-gray-300 mb-2">Mobile Number *</label>
                {/* Email च्या जागी Mobile Number चा इनपुट टाकला आहे */}
                <input type="tel" name="from_mobile" required placeholder="+91 98765 43210" className="w-full bg-[#131826] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-accent-blue" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-300 mb-2">Project Type</label>
              <select name="project_type" className="w-full bg-[#131826] border border-white/10 rounded-xl px-4 py-3 text-xs text-gray-300 focus:outline-none focus:border-accent-blue">
                <option>Select project type</option>
                <option>YouTube Video Editing</option>
                <option>Motion Graphics & Promo</option>
                <option>Shorts / Reels</option>
                <option>Documentary / Course</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-300 mb-2">Timeline</label>
              <input type="text" name="timeline" placeholder="e.g., 1 week, ASAP" className="w-full bg-[#131826] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-accent-blue" />
            </div>
            <div>
              <label className="block text-xs text-gray-300 mb-2">Project Details *</label>
              <textarea rows="4" name="message" required placeholder="Tell me about your project..." className="w-full bg-[#131826] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-accent-blue resize-none" />
            </div>
            
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }} 
              className="w-full bg-white text-black font-bold text-xs py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg hover:bg-gray-200 transition-all cursor-pointer"
            >
              <Send size={14} /> Send on WhatsApp
            </motion.button>
            
            <p className="text-center text-[11px] text-gray-400 pt-2">
              You will be redirected to WhatsApp to send the message.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}