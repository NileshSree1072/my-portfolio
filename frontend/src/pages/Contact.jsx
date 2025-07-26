import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import ClickSpark from '../components/ClickSpark';
import { mockData } from '../mock';

const Contact = () => {
  const { personal } = mockData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const socialButtonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const formFieldVariants = {
    focus: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    blur: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-900 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Get In <span className="text-teal-400">Touch</span>
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-teal-400 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I'm always open to discussing new opportunities, collaborations, or innovative project ideas in AI, robotics, and software development.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 15 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Mail className="h-5 w-5 text-teal-400 mr-3" />
                      </motion.div>
                      <div>
                        <p className="text-gray-300">{personal.email}</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 15 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Phone className="h-5 w-5 text-teal-400 mr-3" />
                      </motion.div>
                      <div>
                        <p className="text-gray-300">{personal.phone}</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 15 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <MapPin className="h-5 w-5 text-teal-400 mr-3" />
                      </motion.div>
                      <div>
                        <p className="text-gray-300">{personal.location}</p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </ClickSpark>

            {/* Social Links */}
            <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white">Connect With Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <motion.a
                        href={personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-lg hover:bg-teal-600 transition-colors duration-200"
                        variants={socialButtonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Github className="h-6 w-6 text-white" />
                      </motion.a>
                      <motion.a
                        href={personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-lg hover:bg-teal-600 transition-colors duration-200"
                        variants={socialButtonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Linkedin className="h-6 w-6 text-white" />
                      </motion.a>
                      <motion.a
                        href={`mailto:${personal.email}`}
                        className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-lg hover:bg-teal-600 transition-colors duration-200"
                        variants={socialButtonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Mail className="h-6 w-6 text-white" />
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ClickSpark>

            {/* Quick Info */}
            <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:border-teal-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.h3 
                      className="text-white font-semibold mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      Let's Collaborate!
                    </motion.h3>
                    <motion.p 
                      className="text-gray-300 text-sm mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      I'm passionate about AI, robotics, and full-stack development. Currently pursuing B.Tech IT and always looking for innovative projects and learning opportunities.
                    </motion.p>
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <motion.div 
                        className="flex items-center text-green-400 text-sm"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-green-400 rounded-full mr-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        Available for internships
                      </motion.div>
                      <motion.div 
                        className="flex items-center text-green-400 text-sm"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-green-400 rounded-full mr-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                        />
                        Open to collaborations
                      </motion.div>
                      <motion.div 
                        className="flex items-center text-green-400 text-sm"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-green-400 rounded-full mr-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                        />
                        Interested in AI/ML projects
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </ClickSpark>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white">Send me a message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-300">
                            Your Name
                          </Label>
                          <motion.div
                            variants={formFieldVariants}
                            whileFocus="focus"
                            initial="blur"
                          >
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-400 transition-colors duration-200"
                            />
                          </motion.div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-300">
                            Email Address
                          </Label>
                          <motion.div
                            variants={formFieldVariants}
                            whileFocus="focus"
                            initial="blur"
                          >
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-400 transition-colors duration-200"
                            />
                          </motion.div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-300">
                          Subject
                        </Label>
                        <motion.div
                          variants={formFieldVariants}
                          whileFocus="focus"
                          initial="blur"
                        >
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="Let's discuss..."
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-400 transition-colors duration-200"
                          />
                        </motion.div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-300">
                          Message
                        </Label>
                        <motion.div
                          variants={formFieldVariants}
                          whileFocus="focus"
                          initial="blur"
                        >
                          <Textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Tell me about your project idea or opportunity..."
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-400 resize-none transition-colors duration-200"
                          />
                        </motion.div>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-teal-600 hover:bg-teal-700 text-white disabled:opacity-50 transition-all duration-200"
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              Sending...
                            </motion.div>
                          ) : (
                            <motion.div
                              className="flex items-center justify-center"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Send className="h-4 w-4 mr-2" />
                              Send Message
                            </motion.div>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </ClickSpark>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;