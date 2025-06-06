import React from 'react';
import { GitBranch as BrandTelegram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                <BrandTelegram size={32} className="text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <a 
              href="https://t.me/Xarri_proger"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300"
            >
              <BrandTelegram size={20} />
              Contact me on Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;