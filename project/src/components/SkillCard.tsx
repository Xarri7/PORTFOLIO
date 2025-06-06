import React from 'react';
import { ReactNode } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  category: string;
  icon: ReactNode;
  skills: Skill[];
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, icon, skills, delay }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg mr-3">
            <div className="text-indigo-600 dark:text-indigo-400">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category}</h3>
        </div>
        
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;