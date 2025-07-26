import React, { useState } from 'react';
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
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In <span className="text-teal-400">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or innovative project ideas in AI, robotics, and software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
              <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-teal-400 mr-3" />
                    <div>
                      <p className="text-gray-300">{personal.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-teal-400 mr-3" />
                    <div>
                      <p className="text-gray-300">{personal.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-teal-400 mr-3" />
                    <div>
                      <p className="text-gray-300">{personal.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ClickSpark>

            {/* Social Links */}
            <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
              <Card className="bg-gray-800 border-gray-700 hover:border-teal-400 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-lg hover:bg-teal-600 transition-all duration-200 transform hover:scale-110"
                    >
                      <Github className="h-6 w-6 text-white" />
                    </a>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-lg hover:bg-teal-600 transition-all duration-200 transform hover:scale-110"
                    >
                      <Linkedin className="h-6 w-6 text-white" />
                    </a>
                    <a
                      href={`mailto:${personal.email}`}
                      className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-lg hover:bg-teal-600 transition-all duration-200 transform hover:scale-110"
                    >
                      <Mail className="h-6 w-6 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </ClickSpark>

            {/* Quick Info */}
            <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
              <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:border-teal-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-4">Let's Collaborate!</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    I'm passionate about AI, robotics, and full-stack development. Currently pursuing B.Tech IT and always looking for innovative projects and learning opportunities.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-green-400 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      Available for internships
                    </div>
                    <div className="flex items-center text-green-400 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      Open to collaborations
                    </div>
                    <div className="flex items-center text-green-400 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      Interested in AI/ML projects
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ClickSpark>
          </div>

          {/* Contact Form */}
          <ClickSpark sparkColor='#14b8a6' sparkSize={8} sparkRadius={15} sparkCount={6}>
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
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">
                        Email Address
                      </Label>
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
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-300">
                      Subject
                    </Label>
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
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Message
                    </Label>
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
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white disabled:opacity-50 transform hover:scale-105 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ClickSpark>
        </div>
      </div>
    </div>
  );
};

export default Contact;