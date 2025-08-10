import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';

const AboutPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Design Lead',
      avatar: 'SC',
      bio: 'Passionate about creating intuitive user experiences with Material Design principles.',
      skills: ['UI/UX Design', 'Material Design', 'Prototyping']
    },
    {
      id: 2,
      name: 'Alex Rivera',
      role: 'Frontend Developer',
      avatar: 'AR',
      bio: 'Specializes in modern web technologies and component-driven development.',
      skills: ['React', 'Next.js', 'TypeScript']
    },
    {
      id: 3,
      name: 'Jordan Kim',
      role: 'Product Manager',
      avatar: 'JK',
      bio: 'Focused on delivering exceptional user experiences through thoughtful product strategy.',
      skills: ['Product Strategy', 'User Research', 'Analytics']
    }
  ];

  const values = [
    {
      icon: '🎨',
      title: 'Design Excellence',
      description: 'We believe in the power of beautiful, functional design that follows Material Design principles.'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Fast, responsive experiences that work seamlessly across all devices and platforms.'
    },
    {
      icon: '🔧',
      title: 'Innovation',
      description: 'Constantly exploring new technologies and methodologies to push boundaries.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Working together to create solutions that make a meaningful impact.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-24 pb-16 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full mx-auto mb-8 flex items-center justify-center"
            >
              <span className="text-white text-3xl font-bold">M3</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              About Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"> Mission</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're dedicated to showcasing the power and beauty of Material Design 3, 
              creating experiences that are both visually stunning and incredibly functional.
            </p>
          </div>
        </motion.section>

        {/* Story Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  Material Design 3 represents the evolution of Google's design language, 
                  bringing together the best of Material Design with new innovations in 
                  personalization, accessibility, and adaptive design.
                </p>
                <p className="mb-6">
                  Our showcase demonstrates how these principles can be applied to create 
                  interfaces that are not only beautiful but also intuitive and inclusive. 
                  Every component, animation, and interaction is carefully crafted to 
                  exemplify the Material Design philosophy.
                </p>
                <p>
                  We believe that great design should be accessible to everyone, and our 
                  mission is to inspire developers and designers to embrace these principles 
                  in their own projects.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedCard(member)}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">{member.avatar}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 mt-4 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h2>
              <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                Ready to bring Material Design 3 to your next project? 
                We'd love to help you create something extraordinary.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Modal for team member details */}
        <AnimatePresence>
          {selectedCard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl p-8 max-w-md w-full"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{selectedCard.avatar}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{selectedCard.name}</h3>
                  <p className="text-purple-600 font-medium mb-4">{selectedCard.role}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{selectedCard.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {selectedCard.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default AboutPage;