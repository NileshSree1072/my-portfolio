import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Trophy, Target, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const CodingProfiles = () => {
  const [activeProfile, setActiveProfile] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const badgeVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const profiles = [
    {
      id: 'leetcode',
      platform: 'LeetCode',
      username: 'S Nilesh',
      image: 'https://customer-assets.emergentagent.com/job_cert-connect-frame/artifacts/0risv1pi_image.png',
      stats: {
        problemsSolved: '171',
        easy: '104',
        moderate: '59',
        hard: '8',
        badges: '1 Master + 9 Specialist + 13 Achiever'
      },
      highlights: [
        'DSA Master Badge',
        '171+ Problems Solved',
        '9 DSA Topics Specialist',
        '13 Topic Achiever'
      ],
      color: 'from-orange-500 to-yellow-500',
      icon: <Code className="h-6 w-6" />,
      description: 'Demonstrates strong problem-solving skills and algorithmic thinking through consistent LeetCode practice.'
    },
    {
      id: 'codingninjas',
      platform: 'Coding Ninjas',
      username: 'Bolt',
      image: 'https://customer-assets.emergentagent.com/job_cert-connect-frame/artifacts/1v6jye17_image.png',
      stats: {
        submissions: '201',
        currentStreak: '3 days',
        longestStreak: '23 days',
        college: 'SSN College of Engineering'
      },
      highlights: [
        '201 Problem Submissions',
        '23 Days Max Streak',
        'Active Problem Solver',
        'College Monthly Badge'
      ],
      color: 'from-blue-500 to-purple-500',
      icon: <Target className="h-6 w-6" />,
      description: 'Active competitive programmer with consistent daily practice and strong streak maintenance.'
    }
  ];

  return (
    <motion.div 
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Section Header */}
      <motion.div 
        className="text-center mb-8"
        variants={cardVariants}
      >
        <div className="flex items-center justify-center mb-4">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Trophy className="h-8 w-8 text-teal-400 mr-3" />
          </motion.div>
          <h2 className="text-3xl font-bold text-white">Coding Profiles</h2>
        </div>
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My coding journey and achievements across different competitive programming platforms
        </motion.p>
      </motion.div>

      {/* Profiles Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.id}
            variants={cardVariants}
            whileHover="hover"
            onMouseEnter={() => setActiveProfile(profile.id)}
            onMouseLeave={() => setActiveProfile(null)}
          >
            <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-300 overflow-hidden h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-white">
                  <div className="flex items-center">
                    <motion.div
                      className={`p-2 rounded-lg bg-gradient-to-r ${profile.color} mr-3`}
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {profile.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold">{profile.platform}</h3>
                      <p className="text-gray-400 text-sm font-normal">@{profile.username}</p>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ExternalLink className="h-5 w-5 text-gray-400 hover:text-teal-400" />
                  </motion.div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Description */}
                <motion.p 
                  className="text-gray-300 text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {profile.description}
                </motion.p>

                {/* Highlights */}
                <motion.div 
                  className="space-y-3"
                  variants={containerVariants}
                >
                  <h4 className="text-white font-semibold flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-teal-400" />
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {profile.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        variants={badgeVariants}
                        whileHover="hover"
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-gray-700 text-gray-300 text-xs hover:bg-teal-600 hover:text-white transition-colors cursor-default"
                        >
                          {highlight}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Stats Preview */}
                <motion.div 
                  className="bg-gray-900 rounded-lg p-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-teal-400" />
                    Quick Stats
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {Object.entries(profile.stats).slice(0, 4).map(([key, value], idx) => (
                      <motion.div 
                        key={key}
                        className="text-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + (idx * 0.1) }}
                      >
                        <div className="text-teal-400 font-semibold">{value}</div>
                        <div className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Action Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-600 text-gray-300 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-200"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Full Profile
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div 
        className="mt-12 text-center"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <motion.h3 
              className="text-2xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Combined Coding Achievement
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-4 gap-6"
              variants={containerVariants}
            >
              <motion.div 
                className="text-center"
                variants={badgeVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-teal-400 mb-2">370+</div>
                <div className="text-gray-300">Total Submissions</div>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={badgeVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-green-400 mb-2">171</div>
                <div className="text-gray-300">Problems Solved</div>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={badgeVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-yellow-400 mb-2">23</div>
                <div className="text-gray-300">Max Streak (Days)</div>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={badgeVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
                <div className="text-gray-300">Badges Earned</div>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default CodingProfiles;