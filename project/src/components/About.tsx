import React from 'react';
import { Code, Globe, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm an enthusiastic full stack developer who's passionate about learning and building web applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300">
              As a beginner in web development, I'm excited about creating responsive, user-friendly interfaces and learning about server-side architecture. I'm constantly expanding my knowledge and staying up-to-date with modern technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I believe in writing clean, maintainable code and I'm always eager to learn new technologies. When I'm not coding, you can find me reading tech blogs, following tutorials, or working on personal projects.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Education</h3>
                <p className="text-gray-600 dark:text-gray-300">Currently learning web development</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Focus</h3>
                <p className="text-gray-600 dark:text-gray-300">Full Stack Development</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-800 rounded-lg mr-4">
                  <Code size={24} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Eager to Learn</h3>
                  <p className="text-gray-600 dark:text-gray-300">Committed to improving my coding skills every day.</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-800 rounded-lg mr-4">
                  <Users size={24} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Team Player</h3>
                  <p className="text-gray-600 dark:text-gray-300">Open to collaboration and learning from others.</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-800 rounded-lg mr-4">
                  <Globe size={24} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Problem Solver</h3>
                  <p className="text-gray-600 dark:text-gray-300">Enthusiastic about solving coding challenges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;