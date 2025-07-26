import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { mockData } from '../mock';

const Projects = () => {
  const { projects } = mockData;
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const ProjectCard = ({ project }) => (
    <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-200 hover:transform hover:scale-105 cursor-pointer">
      <CardHeader>
        <CardTitle className="text-white text-lg">{project.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-gray-700 text-gray-300 text-xs"
            >
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 3 && (
            <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
              +{project.techStack.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="ghost"
            asChild
            className="text-teal-400 hover:text-teal-300 hover:bg-gray-700"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
          <Button
            size="sm"
            variant="ghost"
            asChild
            className="text-teal-400 hover:text-teal-300 hover:bg-gray-700"
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </a>
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => handleProjectClick(project)}
            className="text-teal-400 hover:text-teal-300 hover:bg-gray-700"
          >
            Details
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="text-teal-400">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my academic journey and personal learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-teal-400">
                    {projects.length}
                  </div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-teal-400">
                    {new Set(projects.flatMap(p => p.techStack)).size}
                  </div>
                  <div className="text-gray-300">Technologies Used</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-teal-400">
                    {projects.filter(p => p.demo).length}
                  </div>
                  <div className="text-gray-300">Live Demos</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="bg-gray-800 border-gray-700 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white text-xl">{selectedProject.name}</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-white"
              >
                ×
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gray-700 text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="text-gray-300 space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4">
                <Button
                  asChild
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900"
                >
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Projects;