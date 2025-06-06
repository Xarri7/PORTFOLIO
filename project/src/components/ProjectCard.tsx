import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demoUrl: string;
  repoUrl: string;
}

interface ProjectCardProps {
  project: Project;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-1 text-xs font-medium bg-indigo-600/90 text-white rounded-md"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium bg-gray-700/90 text-white rounded-md">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">{project.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
          </div>
          
          <button 
            className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center hover:underline"
          >
            View Details
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;