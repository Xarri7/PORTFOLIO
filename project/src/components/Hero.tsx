import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative pt-20 pb-16 px-4 md:px-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="animate-fadeUp">
              <div className="inline-block mb-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                Full Stack Developer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Xarri</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                I'm a passionate beginner full stack developer, eager to learn and create responsive web applications. Let's build something amazing together.
              </p>
              
              <div className="relative inline-block mb-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative px-6 py-3 bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-700 rounded-lg leading-none">
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">@Xarri_proger</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:contact@example.com" 
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fadeIn">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Code Editor" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;