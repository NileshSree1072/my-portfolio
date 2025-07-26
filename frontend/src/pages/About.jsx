import React from 'react';
import { GraduationCap, Target, Heart, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import ClickSpark from '../components/ClickSpark';
import DecryptedText from '../components/DecryptedText';
import { mockData } from '../mock';

const About = () => {
  const { about } = mockData;

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <DecryptedText 
              text="About"
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
                text="Me"
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
          <div className="w-24 h-1 bg-teal-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Current Education */}
          <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
            <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <GraduationCap className="mr-3 h-6 w-6 text-teal-400" />
                  <DecryptedText 
                    text="Current Education"
                    speed={50}
                    maxIterations={8}
                    className="text-white"
                    encryptedClassName="text-gray-400"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  {about.education}
                </p>
                <div className="bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Institution</p>
                  <p className="text-lg font-semibold text-teal-400">
                    <DecryptedText 
                      text="Sri Sivasubramaniya Nadar College of Engineering"
                      speed={30}
                      maxIterations={6}
                      className="text-teal-400"
                      encryptedClassName="text-gray-500"
                    />
                  </p>
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
                  <DecryptedText 
                    text="Future Goals"
                    speed={50}
                    maxIterations={8}
                    className="text-white"
                    encryptedClassName="text-gray-400"
                  />
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
                <DecryptedText 
                  text="Academic Journey"
                  speed={50}
                  maxIterations={8}
                  className="text-white"
                  encryptedClassName="text-gray-400"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {about.previousEducation.map((edu, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      <DecryptedText 
                        text={edu.degree}
                        speed={40}
                        maxIterations={6}
                        className="text-white"
                        encryptedClassName="text-gray-400"
                      />
                    </h3>
                    <p className="text-teal-400 font-medium mb-2">
                      <DecryptedText 
                        text={edu.institution}
                        speed={35}
                        maxIterations={6}
                        className="text-teal-400"
                        encryptedClassName="text-gray-500"
                      />
                    </p>
                    <p className="text-gray-400 text-sm mb-2">{edu.duration}</p>
                    <div className="bg-gray-600 rounded-full px-3 py-1 inline-block">
                      <span className="text-teal-400 font-bold">
                        <DecryptedText 
                          text={edu.grade}
                          speed={60}
                          maxIterations={8}
                          className="text-teal-400"
                          encryptedClassName="text-gray-500"
                        />
                      </span>
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
                <DecryptedText 
                  text="Areas of Interest"
                  speed={50}
                  maxIterations={8}
                  className="text-white"
                  encryptedClassName="text-gray-400"
                />
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
                    <DecryptedText 
                      text={interest}
                      speed={40}
                      maxIterations={6}
                      className="text-gray-300"
                      encryptedClassName="text-gray-500"
                    />
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
                  <DecryptedText 
                    text="Personal Statement"
                    animateOn="view"
                    speed={60}
                    maxIterations={10}
                    sequential={true}
                    revealDirection="center"
                    className="text-white"
                    encryptedClassName="text-gray-500"
                  />
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto mb-6">
                  As a passionate B.Tech Information Technology student, I specialize in AI-powered solutions and autonomous systems. 
                  My journey has been marked by innovative projects like{' '}
                  <span className="text-teal-400 font-semibold">
                    <DecryptedText 
                      text="ApartiBot"
                      speed={50}
                      maxIterations={8}
                      className="text-teal-400"
                      encryptedClassName="text-gray-500"
                    />
                  </span>
                  {' '}(an autonomous security robot) and{' '}
                  <span className="text-teal-400 font-semibold">
                    <DecryptedText 
                      text="EzDelivery"
                      speed={50}
                      maxIterations={8}
                      className="text-teal-400"
                      encryptedClassName="text-gray-500"
                    />
                  </span>
                  {' '}(a full-stack grocery app). I believe in leveraging technology to solve real-world problems and have demonstrated 
                  this through my national-level recognition and consistent academic excellence.
                </p>
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">
                      <DecryptedText 
                        text="9.3"
                        speed={80}
                        maxIterations={10}
                        className="text-teal-400"
                        encryptedClassName="text-gray-500"
                      />
                    </div>
                    <div className="text-sm text-gray-400">CGPA (Diploma)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">
                      <DecryptedText 
                        text="6th"
                        speed={80}
                        maxIterations={10}
                        className="text-teal-400"
                        encryptedClassName="text-gray-500"
                      />
                    </div>
                    <div className="text-sm text-gray-400">National Rank</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">
                      <DecryptedText 
                        text="4"
                        speed={80}
                        maxIterations={10}
                        className="text-teal-400"
                        encryptedClassName="text-gray-500"
                      />
                    </div>
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