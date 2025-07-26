import React from 'react';
import { GraduationCap, Target, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { mockData } from '../mock';

const About = () => {
  const { about } = mockData;

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="text-teal-400">Me</span>
          </h1>
          <div className="w-24 h-1 bg-teal-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Academic Background */}
          <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-colors duration-200">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <GraduationCap className="mr-3 h-6 w-6 text-teal-400" />
                Academic Background
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                {about.education}
              </p>
              <div className="bg-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">Current CGPA</p>
                <p className="text-2xl font-bold text-teal-400">{about.cgpa}</p>
              </div>
            </CardContent>
          </Card>

          {/* Future Goals */}
          <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-colors duration-200">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Target className="mr-3 h-6 w-6 text-teal-400" />
                Future Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                {about.goals}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Interests Section */}
        <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-colors duration-200 mt-12">
          <CardHeader>
            <CardTitle className="flex items-center text-white">
              <Heart className="mr-3 h-6 w-6 text-teal-400" />
              Areas of Interest
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {about.interests.map((interest, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-gray-700 text-gray-300 hover:bg-teal-600 hover:text-white transition-colors duration-200 p-3 justify-center"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Personal Statement */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Personal Statement
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                As a passionate B.Tech Information Technology student, I believe in the power of technology 
                to solve real-world problems. My journey in programming started with curiosity and has evolved 
                into a deep commitment to creating meaningful solutions. I'm constantly learning new technologies, 
                participating in hackathons, and contributing to open-source projects. My goal is to become a 
                skilled software engineer who can make a positive impact through innovative technology solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;