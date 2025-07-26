import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import ClickSpark from '../components/ClickSpark';
import DecryptedText from '../components/DecryptedText';
import LetterGlitch from '../components/LetterGlitch';
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
    <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
      <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-300 transform hover:scale-105 cursor-pointer h-full">
        <CardHeader>
          <CardTitle className="text-white text-lg flex items-center justify-between">
            <DecryptedText 
              text={project.name}
              speed={50}
              maxIterations={8}
              className="text-white"
              encryptedClassName="text-gray-400"
            />
            <div className="flex items-center text-sm text-gray-400">
              <Calendar className="h-4 w-4 mr-1" />
              <DecryptedText 
                text={project.year}
                speed={60}
                maxIterations={8}
                className="text-gray-400"
                encryptedClassName="text-gray-600"
              />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-1">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gray-700 text-gray-300 text-xs hover:bg-teal-600 hover:text-white transition-colors duration-200"
              >
                <DecryptedText 
                  text={tech}
                  speed={40}
                  maxIterations={6}
                  className="text-gray-300"
                  encryptedClassName="text-gray-500"
                />
              </Badge>
            ))}
            {project.techStack.length > 3 && (
              <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                <DecryptedText 
                  text={`+${project.techStack.length - 3} more`}
                  speed={50}
                  maxIterations={6}
                  className="text-gray-300"
                  encryptedClassName="text-gray-500"
                />
              </Badge>
            )}
          </div>
          
          <div className="flex gap-2 mt-auto">
            <Button
              size="sm"
              variant="ghost"
              asChild
              className="text-teal-400 hover:text-teal-300 hover:bg-gray-700 transition-all duration-200"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                <DecryptedText 
                  text="Code"
                  speed={60}
                  maxIterations={6}
                  className="text-teal-400"
                  encryptedClassName="text-gray-500"
                />
              </a>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              asChild
              className="text-teal-400 hover:text-teal-300 hover:bg-gray-700 transition-all duration-200"
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                <DecryptedText 
                  text="Demo"
                  speed={60}
                  maxIterations={6}
                  className="text-teal-400"
                  encryptedClassName="text-gray-500"
                />
              </a>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => handleProjectClick(project)}
              className="text-teal-400 hover:text-teal-300 hover:bg-gray-700 transition-all duration-200"
            >
              <DecryptedText 
                text="Details"
                speed={60}
                maxIterations={6}
                className="text-teal-400"
                encryptedClassName="text-gray-500"
              />
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </ClickSpark>
  );

  return (
    <div className="min-h-screen bg-gray-900 py-20 relative">
      {/* Letter Glitch Background */}
      <div className="absolute inset-0 opacity-10 z-0">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <DecryptedText 
              text="My"
              animateOn="view"
              speed={80}
              maxIterations={12}
              sequential={true}
              revealDirection="center"
              className="text-white"
              encryptedClassName="text-gray-500"
            />
            {' '}
            <span className="text-teal-400">
              <DecryptedText 
                text="Projects"
                animateOn="view"
                speed={80}
                maxIterations={12}
                sequential={true}
                revealDirection="center"
                className="text-teal-400"
                encryptedClassName="text-gray-600"
              />
            </span>
          </h1>
          <div className="w-24 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            <DecryptedText 
              text="Innovative projects showcasing my expertise in AI, robotics, and full-stack development. Each project represents a solution to real-world problems."
              animateOn="view"
              speed={20}
              maxIterations={5}
              sequential={true}
              revealDirection="start"
              className="text-gray-300"
              encryptedClassName="text-gray-600"
            />
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Featured Project Highlight */}
        <div className="mt-16">
          <ClickSpark sparkColor='#14b8a6' sparkSize={10} sparkRadius={18} sparkCount={8}>
            <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:border-teal-400 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-yellow-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">
                    <DecryptedText 
                      text="Featured Achievement"
                      animateOn="view"
                      speed={50}
                      maxIterations={8}
                      sequential={true}
                      revealDirection="center"
                      className="text-white"
                      encryptedClassName="text-gray-500"
                    />
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                  <strong className="text-teal-400">
                    <DecryptedText 
                      text="ApartiBot"
                      speed={60}
                      maxIterations={8}
                      className="text-teal-400"
                      encryptedClassName="text-gray-500"
                    />
                  </strong> earned 6th place in a National Level Competition at 
                  Sri Manakula Vinayagar Engineering College, showcasing advanced autonomous systems and AI integration.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-teal-400">
                      <DecryptedText 
                        text={projects.length.toString()}
                        speed={80}
                        maxIterations={10}
                        className="text-teal-400"
                        encryptedClassName="text-gray-500"
                      />
                    </div>
                    <div className="text-gray-300">Major Projects</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-teal-400">
                      <DecryptedText 
                        text={new Set(projects.flatMap(p => p.techStack)).size.toString()}
                        speed={80}
                        maxIterations={10}
                        className="text-teal-400"
                        encryptedClassName="text-gray-500"
                      />
                    </div>
                    <div className="text-gray-300">Technologies Used</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-teal-400">
                      <DecryptedText 
                        text="40%"
                        speed={80}
                        maxIterations={10}
                        className="text-teal-400"
                        encryptedClassName="text-gray-500"
                      />
                    </div>
                    <div className="text-gray-300">Efficiency Improvement</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ClickSpark>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <ClickSpark sparkColor='#14b8a6' sparkSize={6} sparkRadius={12} sparkCount={4}>
            <Card className="bg-gray-800 border-gray-700 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white text-xl">
                  <DecryptedText 
                    text={selectedProject.name}
                    speed={50}
                    maxIterations={8}
                    className="text-white"
                    encryptedClassName="text-gray-400"
                  />
                </CardTitle>
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
                <div className="flex items-center mb-4">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-400 text-sm">
                    <DecryptedText 
                      text={selectedProject.year}
                      speed={60}
                      maxIterations={8}
                      className="text-gray-400"
                      encryptedClassName="text-gray-600"
                    />
                  </span>
                </div>
                
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
                        className="bg-gray-700 text-gray-300 hover:bg-teal-600 hover:text-white transition-colors duration-200"
                      >
                        <DecryptedText 
                          text={tech}
                          speed={40}
                          maxIterations={6}
                          className="text-gray-300"
                          encryptedClassName="text-gray-500"
                        />
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
                    className="bg-teal-600 hover:bg-teal-700 text-white transform hover:scale-105 transition-all duration-200"
                  >
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-200"
                  >
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ClickSpark>
        </div>
      )}
    </div>
  );
};

export default Projects;