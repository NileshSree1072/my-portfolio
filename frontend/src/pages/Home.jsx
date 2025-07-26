import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../mock';

const Home = () => {
  const { personal } = mockData;

  const handleResumeDownload = () => {
    // Mock resume download functionality
    console.log('Resume download triggered');
    // In real implementation, this would download the actual resume
    alert('Resume download will be implemented with actual file');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                {personal.name}
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
              {personal.title}
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              {personal.tagline}
            </p>
            <p className="text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {personal.summary}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                onClick={handleResumeDownload}
                className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-700 border-gray-600 hover:border-teal-400 transition-colors duration-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Education</h3>
                <p className="text-gray-300 text-sm">B.Tech Information Technology</p>
                <p className="text-teal-400 font-medium">CGPA: 8.2/10</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-700 border-gray-600 hover:border-teal-400 transition-colors duration-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Projects</h3>
                <p className="text-gray-300 text-sm">6+ Projects Completed</p>
                <p className="text-teal-400 font-medium">Full-stack & ML</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-700 border-gray-600 hover:border-teal-400 transition-colors duration-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Certifications</h3>
                <p className="text-gray-300 text-sm">5+ Certifications</p>
                <p className="text-teal-400 font-medium">NPTEL, Coursera, AWS</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to work together?
          </h2>
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
            <Link to="/contact">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;