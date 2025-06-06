import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment processing.",
      image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["React", "Firebase", "Tailwind CSS"],
      category: "frontend",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com"
    },
    {
      id: 3,
      title: "API Service",
      description: "A RESTful API service for handling user authentication and data management.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["Express.js", "PostgreSQL", "JWT", "Docker"],
      category: "backend",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website with dark mode and animations.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      category: "frontend",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com"
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description: "A chat application with real-time messaging and user presence.",
      image: "https://images.pexels.com/photos/1181275/pexels-photo-1181275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["React", "Socket.io", "Express", "MongoDB"],
      category: "fullstack",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com"
    },
    {
      id: 6,
      title: "Content Management System",
      description: "A custom CMS for managing digital content with user roles and permissions.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tags: ["React", "Node.js", "PostgreSQL", "GraphQL"],
      category: "fullstack",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Here are some of my recent projects. Each one was built to solve specific problems
            and showcase different skills.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;