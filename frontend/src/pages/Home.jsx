import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import LetterGlitch from '../components/LetterGlitch';
import ClickSpark from '../components/ClickSpark';
import DecryptedText from '../components/DecryptedText';
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
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Matrix-style background with LetterGlitch */}
      <div className="absolute inset-0 opacity-20">
        <LetterGlitch
          glitchColors={['#14b8a6', '#06b6d4', '#3b82f6']}
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Hero Section with ClickSpark */}
      <ClickSpark
        sparkColor='#14b8a6'
        sparkSize={12}
        sparkRadius={20}
        sparkCount={10}
        duration={600}
      >
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                  <DecryptedText 
                    text={personal.name}
                    animateOn="view"
                    speed={80}
                    maxIterations={15}
                    sequential={true}
                    revealDirection="center"
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
                    encryptedClassName="text-gray-500"
                  />
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                <DecryptedText 
                  text={`${personal.title} • B.Tech IT`}
                  animateOn="view"
                  speed={60}
                  maxIterations={12}
                  sequential={true}
                  revealDirection="start"
                  className="text-gray-300"
                  encryptedClassName="text-gray-600"
                />
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                <DecryptedText 
                  text={personal.tagline}
                  animateOn="view"
                  speed={40}
                  maxIterations={8}
                  sequential={true}
                  revealDirection="start"
                  className="text-gray-400"
                  encryptedClassName="text-gray-600"
                />
              </p>
              <p className="text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                {personal.summary}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white transform hover:scale-105 transition-all duration-200">
                  <Link to="/projects">
                    <DecryptedText 
                      text="View Projects"
                      speed={30}
                      maxIterations={6}
                      className="text-white"
                      encryptedClassName="text-gray-300"
                    />
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleResumeDownload}
                  className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-200"
                >
                  <Download className="mr-2 h-4 w-4" />
                  <DecryptedText 
                    text="Download Resume"
                    speed={35}
                    maxIterations={6}
                    className="text-teal-400"
                    encryptedClassName="text-gray-500"
                  />
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-200 transform hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-200 transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-200 transform hover:scale-110"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </ClickSpark>

      {/* Quick Overview */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 bg-opacity-80">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
              <Card className="bg-gray-700 border-gray-600 hover:border-teal-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    <DecryptedText 
                      text="Education"
                      speed={50}
                      maxIterations={8}
                      className="text-white"
                      encryptedClassName="text-gray-400"
                    />
                  </h3>
                  <p className="text-gray-300 text-sm">B.Tech Information Technology</p>
                  <p className="text-teal-400 font-medium">
                    <DecryptedText 
                      text="SSN College of Engineering"
                      speed={40}
                      maxIterations={6}
                      className="text-teal-400"
                      encryptedClassName="text-gray-500"
                    />
                  </p>
                  <p className="text-gray-400 text-xs mt-2">Previous: 9.3 CGPA in Diploma</p>
                </CardContent>
              </Card>
            </ClickSpark>
            
            <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
              <Card className="bg-gray-700 border-gray-600 hover:border-teal-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    <DecryptedText 
                      text="Projects"
                      speed={50}
                      maxIterations={8}
                      className="text-white"
                      encryptedClassName="text-gray-400"
                    />
                  </h3>
                  <p className="text-gray-300 text-sm">4 Major Projects</p>
                  <p className="text-teal-400 font-medium">
                    <DecryptedText 
                      text="AI • Robotics • Web Apps"
                      speed={40}
                      maxIterations={6}
                      className="text-teal-400"
                      encryptedClassName="text-gray-500"
                    />
                  </p>
                  <p className="text-gray-400 text-xs mt-2">Including ApartiBot & EzDelivery</p>
                </CardContent>
              </Card>
            </ClickSpark>
            
            <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
              <Card className="bg-gray-700 border-gray-600 hover:border-teal-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    <DecryptedText 
                      text="Achievements"
                      speed={50}
                      maxIterations={8}
                      className="text-white"
                      encryptedClassName="text-gray-400"
                    />
                  </h3>
                  <p className="text-gray-300 text-sm">6th Place National Level</p>
                  <p className="text-teal-400 font-medium">
                    <DecryptedText 
                      text="Code Ninjas Dominator"
                      speed={40}
                      maxIterations={6}
                      className="text-teal-400"
                      encryptedClassName="text-gray-500"
                    />
                  </p>
                  <p className="text-gray-400 text-xs mt-2">Innovation in Robotics</p>
                </CardContent>
              </Card>
            </ClickSpark>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ClickSpark sparkColor='#14b8a6' sparkSize={10} sparkRadius={18} sparkCount={8}>
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              <DecryptedText 
                text="Ready to collaborate on innovative projects?"
                animateOn="view"
                speed={30}
                maxIterations={8}
                sequential={true}
                revealDirection="center"
                className="text-white"
                encryptedClassName="text-gray-500"
              />
            </h2>
            <p className="text-gray-300 mb-8">
              I'm passionate about AI, robotics, and full-stack development. Let's build something amazing together!
            </p>
            <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white transform hover:scale-105 transition-all duration-200">
              <Link to="/contact">
                <DecryptedText 
                  text="Get In Touch"
                  speed={40}
                  maxIterations={6}
                  className="text-white"
                  encryptedClassName="text-gray-300"
                />
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </ClickSpark>
    </div>
  );
};

export default Home;