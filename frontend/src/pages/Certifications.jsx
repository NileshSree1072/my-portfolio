import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { mockData } from '../mock';

const Certifications = () => {
  const { certifications, achievements } = mockData;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
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
        stiffness: 300,
        damping: 20
      }
    }
  };

  const statsVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5
      }
    }
  };

  const CertificationCard = ({ cert, index }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-200 h-full">
        <CardHeader>
          <CardTitle className="flex items-start justify-between text-white">
            <div className="flex items-center">
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Award className="h-6 w-6 text-teal-400 mr-3 flex-shrink-0" />
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold">{cert.name}</h3>
                <p className="text-gray-400 text-sm font-normal">{cert.issuer}</p>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-300">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">{cert.date}</span>
            </div>
            <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
              {cert.credentialId}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const AchievementCard = ({ achievement, index }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15 }}
    >
      <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-200 h-full">
        <CardContent className="p-6">
          <div className="flex items-start">
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Trophy className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{achievement.description}</p>
              <div className="flex items-center text-gray-400">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-xs">{achievement.date}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const AnimatedCounter = ({ endValue, suffix = "", duration = 2 }) => {
    return (
      <motion.div
        className="text-3xl font-bold text-teal-400"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.5
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {endValue}{suffix}
        </motion.span>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Certifications & <span className="text-teal-400">Achievements</span>
          </h1>
          <div className="w-24 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My continuous learning journey through various certifications and notable achievements.
          </p>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-teal-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} />
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Trophy className="h-8 w-8 text-yellow-400 mr-3" />
            <h2 className="text-3xl font-bold text-white">Achievements</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <Card className="bg-gray-800 border-gray-700 mb-16">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-teal-400">
                  {certifications.length}
                </div>
                <div className="text-gray-300">Certifications</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-yellow-400">
                  {achievements.length}
                </div>
                <div className="text-gray-300">Achievements</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-400">
                  500+
                </div>
                <div className="text-gray-300">Problems Solved</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-400">
                  5+
                </div>
                <div className="text-gray-300">Open Source Contributions</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              I believe in lifelong learning and continuously updating my skills. 
              I'm always working towards new certifications and participating in 
              competitive programming and open source contributions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-teal-600 hover:bg-teal-700 text-white">
                Next Goal: Google Cloud Certification
              </Badge>
              <Badge className="bg-teal-600 hover:bg-teal-700 text-white">
                Target: 1000+ LeetCode Problems
              </Badge>
              <Badge className="bg-teal-600 hover:bg-teal-700 text-white">
                Plan: More Open Source Contributions
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Certifications;