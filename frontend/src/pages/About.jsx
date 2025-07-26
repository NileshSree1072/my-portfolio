import React from 'react';
import { GraduationCap, Target, Heart, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import ClickSpark from '../components/ClickSpark';
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
          {/* Current Education */}
          <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
            <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <GraduationCap className="mr-3 h-6 w-6 text-teal-400" />
                  Current Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {about.education}
                </p>
                <div className="bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Institution</p>
                  <p className="text-lg font-semibold text-teal-400">Sri Sivasubramaniya Nadar College of Engineering</p>
                  <p className="text-sm text-gray-400 mt-2">Duration: August 2024 - May 2027</p>
                </div>
              </CardContent>
            </Card>
          </ClickSpark>

          {/* Future Goals */}
          <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
            <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-300 transform hover:scale-105">
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
          </ClickSpark>
        </div>

        {/* Previous Education */}
        <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
          <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-300 mt-12">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Award className="mr-3 h-6 w-6 text-teal-400" />
                Academic Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {about.previousEducation.map((edu, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{edu.degree}</h3>
                    <p className="text-teal-400 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.duration}</p>
                    <div className="bg-gray-600 rounded-full px-3 py-1 inline-block">
                      <span className="text-teal-400 font-bold">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ClickSpark>

        {/* Areas of Interest */}
        <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
          <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-300 mt-12">
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
                    className="bg-gray-700 text-gray-300 hover:bg-teal-600 hover:text-white transition-all duration-200 p-3 justify-center transform hover:scale-105"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </ClickSpark>

        {/* Personal Statement */}
        <div className="mt-16 text-center">
          <ClickSpark sparkColor='#14b8a6' sparkSize={10} sparkRadius={18} sparkCount={8}>
            <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:border-teal-400 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Personal Statement
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                  As a passionate B.Tech Information Technology student, I specialize in AI-powered solutions and autonomous systems. 
                  My journey has been marked by innovative projects like ApartiBot (an autonomous security robot) and EzDelivery 
                  (a full-stack grocery app). I believe in leveraging technology to solve real-world problems and have demonstrated 
                  this through my national-level recognition and consistent academic excellence. I'm constantly exploring new frontiers 
                  in artificial intelligence, robotics, and web development, always aiming to create impactful solutions that make a difference.
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">9.3</div>
                    <div className="text-sm text-gray-400">CGPA (Diploma)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">6th</div>
                    <div className="text-sm text-gray-400">National Rank</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">4</div>
                    <div className="text-sm text-gray-400">Major Projects</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ClickSpark>
        </div>
      </div>
    </div>
  );
};

export default About;