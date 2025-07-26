import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import LetterGlitch from '../components/LetterGlitch';
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
    <motion.div 
      className="min-h-screen bg-gray-900 py-20 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
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
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Certifications & <span className="text-teal-400">Achievements</span>
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-teal-400 mx-auto mb-6"
            variants={itemVariants}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            My continuous learning journey through various certifications and notable achievements.
          </motion.p>
        </motion.div>

        {/* Certifications Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex items-center mb-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Award className="h-8 w-8 text-teal-400 mr-3" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="flex items-center mb-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Trophy className="h-8 w-8 text-yellow-400 mr-3" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white">Achievements</h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <motion.div 
                className="grid md:grid-cols-4 gap-6 text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="space-y-2"
                  variants={statsVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <AnimatedCounter endValue={certifications.length} />
                  <div className="text-gray-300">Certifications</div>
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  variants={statsVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-yellow-400">
                    <AnimatedCounter endValue={achievements.length} />
                  </div>
                  <div className="text-gray-300">Achievements</div>
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  variants={statsVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-green-400">
                    <AnimatedCounter endValue="500" suffix="+" />
                  </div>
                  <div className="text-gray-300">Problems Solved</div>
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  variants={statsVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-blue-400">
                    <AnimatedCounter endValue="5" suffix="+" />
                  </div>
                  <div className="text-gray-300">Open Source Contributions</div>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600">
            <CardContent className="p-8 text-center">
              <motion.h3 
                className="text-2xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Continuous Learning Journey
              </motion.h3>
              <motion.p 
                className="text-gray-300 mb-6 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                I believe in lifelong learning and continuously updating my skills. 
                I'm always working towards new certifications and participating in 
                competitive programming and open source contributions.
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge className="bg-teal-600 hover:bg-teal-700 text-white">
                    Next Goal: Google Cloud Certification
                  </Badge>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge className="bg-teal-600 hover:bg-teal-700 text-white">
                    Target: 1000+ LeetCode Problems
                  </Badge>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge className="bg-teal-600 hover:bg-teal-700 text-white">
                    Plan: More Open Source Contributions
                  </Badge>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Certifications;