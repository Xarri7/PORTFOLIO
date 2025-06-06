import React from 'react';
import SkillCard from './SkillCard';
import { 
  Code, 
  Server, 
  Database, 
  Layers, 
  TestTube, 
  GitBranch 
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillSets = [
    {
      category: "Frontend",
      icon: <Code size={24} />,
      skills: [
        { name: "React.js", level: 60 },
        { name: "TypeScript", level: 55 },
        { name: "HTML5/CSS3", level: 65 },
        { name: "Tailwind CSS", level: 60 },
        { name: "JavaScript", level: 60 },
      ]
    },
    {
      category: "Backend",
      icon: <Server size={24} />,
      skills: [
        { name: "Node.js", level: 55 },
        { name: "Express.js", level: 50 },
        { name: "REST APIs", level: 55 },
        { name: "MongoDB", level: 50 },
        { name: "PostgreSQL", level: 45 },
      ]
    },
    {
      category: "Tools",
      icon: <GitBranch size={24} />,
      skills: [
        { name: "Git/GitHub", level: 60 },
        { name: "VS Code", level: 65 },
        { name: "Terminal", level: 55 },
        { name: "npm", level: 60 },
        { name: "Postman", level: 50 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm continuously learning and improving my skills in web development.
            Here's my current technical knowledge.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillSets.map((skillSet, index) => (
            <SkillCard
              key={skillSet.category}
              category={skillSet.category}
              icon={skillSet.icon}
              skills={skillSet.skills}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;