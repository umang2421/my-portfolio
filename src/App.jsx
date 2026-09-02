import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Download, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mljengya", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const skills = [
    { 
      category: "Frontend & Web", 
      items: ["React.js", "JavaScript", "HTML5 & CSS3", "Tailwind CSS"] 
    },
    { 
      category: "Programming", 
      items: ["Java", "C & C++", "Data Structures", "Object-Oriented Design"] 
    },
    { 
      category: "Analytics & Tools", 
      items: ["Business Analytics", "Git & GitHub", "REST APIs", "User Authentication"] 
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#d4af37] selection:text-black">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md flex justify-between items-center px-6 md:px-16 py-5 border-b border-gray-900">
        <div className="text-xl font-black tracking-widest text-[#d4af37] uppercase">
          Umesh Verma.
        </div>
        <div className="hidden md:flex gap-10 text-xs tracking-[0.2em] text-gray-400 font-semibold uppercase">
          <a href="#about" className="hover:text-[#d4af37] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#d4af37] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#d4af37] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a>
        </div>
        <a 
          href="#contact" 
          className="text-xs font-bold tracking-widest text-[#d4af37] border border-[#d4af37]/40 px-4 py-2 hover:bg-[#d4af37] hover:text-black transition-all duration-300"
        >
          LET'S TALK ↗
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-center px-6 md:px-16 min-h-screen pt-20 border-b border-gray-900 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#d4af37] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 max-w-5xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[#d4af37]"></span>
            <span className="text-[#d4af37] tracking-[0.3em] text-xs md:text-sm font-semibold uppercase">
              Hello, I am Umesh Verma
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.95] mb-8">
            I Build <br />
            <span className="text-gray-400">
              Digital Experiences
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm tracking-wider text-gray-400 uppercase font-medium mb-12">
            <span>Frontend Developer</span>
            <span className="text-[#d4af37]">•</span>
            <span>Java / C++ Programmer</span>
            <span className="text-[#d4af37]">•</span>
            <span>MBA (Business Analytics)</span>
          </div>

          <div className="flex flex-wrap gap-5">
            <a 
              href="#projects" 
              className="flex items-center gap-3 bg-white text-black px-7 py-4 text-xs font-black tracking-widest uppercase hover:bg-[#d4af37] hover:text-black transition-all duration-300"
            >
              Explore My Work <ArrowRight size={16} />
            </a>
            <a 
              href="https://github.com/umang2421" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 border border-gray-700 px-7 py-4 text-xs font-black tracking-widest uppercase hover:border-[#d4af37] text-gray-300 hover:text-white transition-all duration-300"
            >
              GitHub Profile ↗
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="px-6 md:px-16 py-28 border-b border-gray-900">
        <div className="max-w-5xl">
          <span className="text-[#d4af37] tracking-[0.3em] text-xs font-bold uppercase block mb-4">
            01 / Background
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-8">
            I don't just write code. <br />
            <span className="text-gray-400">I build what's next.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Passionate software developer with a B.Tech in Computer Science Engineering and pursuing an MBA in Business Analytics. Experienced in building responsive e-commerce web applications, physics-based browser games, and structured UI components with clean architecture.
          </p>
          <div className="flex gap-4">
            <a 
              href="/resume.pdf" 
              download="Umesh_Verma_Resume.pdf"
              className="inline-flex items-center gap-2 border border-[#d4af37] text-[#d4af37] px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#d4af37] hover:text-black transition-colors cursor-pointer"
            >
              <Download size={14} /> Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 md:px-16 py-28 border-b border-gray-900">
        <span className="text-[#d4af37] tracking-[0.3em] text-xs font-bold uppercase block mb-4">
          02 / Expertise
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-16">
          Skills & Technologies.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <div key={idx} className="p-8 border border-gray-900 bg-[#0d0d0d] hover:border-gray-700 transition-colors">
              <h3 className="text-lg font-bold text-[#d4af37] uppercase tracking-wider mb-6 pb-3 border-b border-gray-900">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((skill, sIdx) => (
                  <li key={sIdx} className="text-sm text-gray-300 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-16 py-28 border-b border-gray-900">
        <span className="text-[#d4af37] tracking-[0.3em] text-xs font-bold uppercase block mb-4">
          03 / Portfolio
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-16">
          Featured Work.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AgriGrow */}
          <div className="p-8 md:p-10 border border-gray-900 bg-[#0d0d0d] flex flex-col justify-between hover:border-[#d4af37]/60 transition-all group">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37] block mb-3">E-Commerce Platform</span>
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 group-hover:text-[#d4af37] transition-colors">
                AgriGrow Store
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Agricultural online marketplace built with HTML, CSS, and JavaScript. Features a customized 6-slide carousel (plants, flowers, seeds, fertilizers), interactive cart management, dynamic product filtering, and simulated checkout.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["JavaScript", "HTML5", "CSS3", "Cart Management"].map((t, i) => (
                  <span key={i} className="text-[10px] tracking-wider font-semibold uppercase px-2.5 py-1 bg-gray-900 border border-gray-800 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <a 
              href="https://umang2421.github.io/agrigrow-store/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d4af37] hover:translate-x-1 transition-transform"
            >
              Launch Live Project <ArrowRight size={14} />
            </a>
          </div>

          {/* IIT Hyderabad */}
          <div className="p-8 md:p-10 border border-gray-900 bg-[#0d0d0d] flex flex-col justify-between hover:border-[#d4af37]/60 transition-all group">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37] block mb-3">Internship Project</span>
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 group-hover:text-[#d4af37] transition-colors">
                IIT Hyderabad E-Commerce
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                E-commerce demo application developed during an internship program at IIT Hyderabad. Features secure user authentication login, categorized product search & filters, shopping cart, and clean responsive layout.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Authentication", "Search & Filters", "Responsive UI", "Web Architecture"].map((t, i) => (
                  <span key={i} className="text-[10px] tracking-wider font-semibold uppercase px-2.5 py-1 bg-gray-900 border border-gray-800 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <a 
              href="https://github.com/umang2421" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d4af37] hover:translate-x-1 transition-transform"
            >
              View Repository <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-16 py-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="text-[#d4af37] tracking-[0.3em] text-xs font-bold uppercase block mb-4">
              04 / Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-6">
              Let's create <br />something solid.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Available for full-time frontend engineering roles, business analytics, web development, and tech collaborations.
            </p>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#d4af37]" />
                <span>umangverma24aug@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#d4af37]" />
                <span>+91 7309530081</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#d4af37]" />
                <span>Varanasi, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input 
                type="text" 
                name="name"
                required
                placeholder="YOUR NAME" 
                className="w-full bg-[#0d0d0d] border border-gray-800 px-4 py-3 text-xs tracking-wider uppercase focus:outline-none focus:border-[#d4af37]"
              />
            </div>
            <div>
              <input 
                type="email" 
                name="email"
                required
                placeholder="YOUR EMAIL" 
                className="w-full bg-[#0d0d0d] border border-gray-800 px-4 py-3 text-xs tracking-wider uppercase focus:outline-none focus:border-[#d4af37]"
              />
            </div>
            <div>
              <textarea 
                rows="4" 
                name="message"
                required
                placeholder="YOUR MESSAGE" 
                className="w-full bg-[#0d0d0d] border border-gray-800 px-4 py-3 text-xs tracking-wider uppercase focus:outline-none focus:border-[#d4af37]"
              ></textarea>
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-green-400 text-xs tracking-wider uppercase">
                <CheckCircle2 size={16} /> Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="text-red-400 text-xs tracking-wider uppercase">
                Failed to send message. Please try again or email directly.
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full bg-[#d4af37] text-black font-black py-3 text-xs tracking-widest uppercase hover:bg-white transition-colors cursor-pointer disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message ↗'}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-900 px-6 md:px-16 py-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <span>© {new Date().getFullYear()} Umesh Verma. All rights reserved.</span>
        <div className="flex gap-6 tracking-widest uppercase text-gray-400">
          <a href="https://github.com/umang2421" target="_blank" rel="noreferrer" className="hover:text-[#d4af37]">GitHub</a>
          <a href="http://surl.li/rkqkp" target="_blank" rel="noreferrer" className="hover:text-[#d4af37]">LinkedIn</a>
          <a href="#about" className="hover:text-[#d4af37]">Back to Top ↑</a>
        </div>
      </footer>

    </div>
  );
}