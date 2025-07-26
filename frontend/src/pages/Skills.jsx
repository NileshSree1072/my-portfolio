import React from 'react';
import { Code, Wrench, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import ClickSpark from '../components/ClickSpark';
import DecryptedText from '../components/DecryptedText';
import CodingProfiles from '../components/CodingProfiles';
import { mockData } from '../mock';

const Skills = () => {
  const { skills } = mockData;

  const SkillSection = ({ title, items, icon: Icon, color }) => (
    <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
      <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-300 transform hover:scale-105">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Icon className={`mr-3 h-6 w-6 ${color}`} />
            <DecryptedText 
              text={title}
              speed={50}
              maxIterations={8}
              className="text-white"
              encryptedClassName="text-gray-400"
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {items.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">
                    <DecryptedText 
                      text={skill.name}
                      speed={40}
                      maxIterations={6}
                      className="text-gray-300"
                      encryptedClassName="text-gray-500"
                    />
                  </span>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    <DecryptedText 
                      text={`${skill.level}%`}
                      speed={60}
                      maxIterations={8}
                      className="text-gray-300"
                      encryptedClassName="text-gray-500"
                    />
                  </Badge>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-2 bg-gray-700"
                  style={{
                    background: '#374151'
                  }}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </ClickSpark>
  );

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                text="Skills"
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
              text="Technical skills I've developed through academic projects, personal learning, and hands-on experience in AI and software development."
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

        <div className="grid lg:grid-cols-3 gap-8">
          <SkillSection
            title="Programming Languages"
            items={skills.languages}
            icon={Code}
            color="text-blue-400"
          />
          
          <SkillSection
            title="Frameworks & Libraries"
            items={skills.frameworks}
            icon={Wrench}
            color="text-green-400"
          />
          
          <SkillSection
            title="Tools & Technologies"
            items={skills.tools}
            icon={Database}
            color="text-purple-400"
          />
        </div>

        {/* Skill Categories Overview */}
        <div className="mt-16">
          <ClickSpark sparkColor='#14b8a6' sparkSize={10} sparkRadius={18} sparkCount={8}>
            <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  <DecryptedText 
                    text="Technical Proficiency Overview"
                    animateOn="view"
                    speed={40}
                    maxIterations={8}
                    sequential={true}
                    revealDirection="center"
                    className="text-white"
                    encryptedClassName="text-gray-500"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-blue-400">
                      <DecryptedText 
                        text={skills.languages.length.toString()}
                        speed={80}
                        maxIterations={10}
                        className="text-blue-400"
                        encryptedClassName="text-gray-500"
                      />
                    </div>
                    <div className="text-gray-300">Programming Languages</div>
                    <div className="text-sm text-gray-400">Strong foundation in multiple languages</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-green-400">
                      <DecryptedText 
                        text={skills.frameworks.length.toString()}
                        speed={80}
                        maxIterations={10}
                        className="text-green-400"
                        encryptedClassName="text-gray-500"
                      />
                    </div>
                    <div className="text-gray-300">Frameworks & Libraries</div>
                    <div className="text-sm text-gray-400">Full-stack development experience</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-purple-400">
                      <DecryptedText 
                        text={skills.tools.length.toString()}
                        speed={80}
                        maxIterations={10}
                        className="text-purple-400"
                        encryptedClassName="text-gray-500"
                      />
                    </div>
                    <div className="text-gray-300">Tools & Technologies</div>
                    <div className="text-sm text-gray-400">Cloud and database expertise</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ClickSpark>
        </div>

        {/* Coding Profiles Section */}
        <div className="mt-16">
          <CodingProfiles />
        </div>

        {/* Specialization Areas */}
        <div className="mt-16">
          <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
            <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:border-teal-400 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  <DecryptedText 
                    text="Specialization Areas"
                    animateOn="view"
                    speed={60}
                    maxIterations={10}
                    sequential={true}
                    revealDirection="center"
                    className="text-white"
                    encryptedClassName="text-gray-500"
                  />
                </h3>
                <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                  My expertise spans across AI chatbots, autonomous robotics, and full-stack web development. 
                  I'm particularly passionate about creating intelligent systems that solve real-world problems.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge className="bg-teal-600 hover:bg-teal-700 text-white transform hover:scale-105 transition-all duration-200">
                    <DecryptedText 
                      text="AI & Machine Learning"
                      speed={40}
                      maxIterations={6}
                      className="text-white"
                      encryptedClassName="text-gray-300"
                    />
                  </Badge>
                  <Badge className="bg-teal-600 hover:bg-teal-700 text-white transform hover:scale-105 transition-all duration-200">
                    <DecryptedText 
                      text="Robotics & Automation"
                      speed={40}
                      maxIterations={6}
                      className="text-white"
                      encryptedClassName="text-gray-300"
                    />
                  </Badge>
                  <Badge className="bg-teal-600 hover:bg-teal-700 text-white transform hover:scale-105 transition-all duration-200">
                    <DecryptedText 
                      text="Full-Stack Development"
                      speed={40}
                      maxIterations={6}
                      className="text-white"
                      encryptedClassName="text-gray-300"
                    />
                  </Badge>
                  <Badge className="bg-teal-600 hover:bg-teal-700 text-white transform hover:scale-105 transition-all duration-200">
                    <DecryptedText 
                      text="Database Design"
                      speed={40}
                      maxIterations={6}
                      className="text-white"
                      encryptedClassName="text-gray-300"
                    />
                  </Badge>
                  <Badge className="bg-teal-600 hover:bg-teal-700 text-white transform hover:scale-105 transition-all duration-200">
                    <DecryptedText 
                      text="Cloud Computing"
                      speed={40}
                      maxIterations={6}
                      className="text-white"
                      encryptedClassName="text-gray-300"
                    />
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </ClickSpark>
        </div>
      </div>
    </div>
  );
};

export default Skills;