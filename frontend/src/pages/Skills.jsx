import React from 'react';
import { Code, Wrench, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { mockData } from '../mock';

const Skills = () => {
  const { skills } = mockData;

  const SkillSection = ({ title, items, icon: Icon, color }) => (
    <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-colors duration-200">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <Icon className={`mr-3 h-6 w-6 ${color}`} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                  {skill.level}%
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
  );

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="text-teal-400">Skills</span>
          </h1>
          <div className="w-24 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technical skills I've developed during my journey as a B.Tech IT student.
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
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-center">
                Technical Proficiency Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-400">
                    {skills.languages.length}
                  </div>
                  <div className="text-gray-300">Programming Languages</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-400">
                    {skills.frameworks.length}
                  </div>
                  <div className="text-gray-300">Frameworks & Libraries</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-400">
                    {skills.tools.length}
                  </div>
                  <div className="text-gray-300">Tools & Technologies</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Path */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Continuous Learning
              </h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                I'm constantly expanding my skill set through online courses, personal projects, 
                and hands-on experience. My learning approach focuses on understanding fundamentals 
                and applying them to real-world problems.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-teal-600 hover:bg-teal-700 text-white">
                  Currently Learning: Docker
                </Badge>
                <Badge className="bg-teal-600 hover:bg-teal-700 text-white">
                  Next: Kubernetes
                </Badge>
                <Badge className="bg-teal-600 hover:bg-teal-700 text-white">
                  Future: AWS Certification
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;