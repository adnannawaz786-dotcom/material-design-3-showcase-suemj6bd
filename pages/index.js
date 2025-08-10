import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';

export default function Home() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [fabExpanded, setFabExpanded] = useState(false);
  const [chipSelected, setChipSelected] = useState('all');
  const [switchStates, setSwitchStates] = useState({
    notifications: true,
    darkMode: false,
    location: true
  });

  const cards = [
    {
      id: 1,
      title: 'Material Design 3',
      subtitle: 'Design System',
      content: 'The latest evolution of Material Design with dynamic color, improved accessibility, and new components.',
      image: '/api/placeholder/300/200',
      category: 'design'
    },
    {
      id: 2,
      title: 'Component Library',
      subtitle: 'UI Elements',
      content: 'Comprehensive collection of Material Design 3 components built with modern web technologies.',
      image: '/api/placeholder/300/200',
      category: 'development'
    },
    {
      id: 3,
      title: 'Interactive Showcase',
      subtitle: 'Live Examples',
      content: 'Explore interactive examples of buttons, cards, navigation, and other Material Design components.',
      image: '/api/placeholder/300/200',
      category: 'showcase'
    }
  ];

  const chips = [
    { id: 'all', label: 'All' },
    { id: 'design', label: 'Design' },
    { id: 'development', label: 'Development' },
    { id: 'showcase', label: 'Showcase' }
  ];

  const filteredCards = chipSelected === 'all' 
    ? cards 
    : cards.filter(card => card.category === chipSelected);

  const toggleSwitch = (key) => {
    setSwitchStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative py-20 px-6 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6"
            >
              Material Design 3
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Experience the next generation of Material Design with dynamic theming, 
              enhanced accessibility, and beautiful interactive components.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(124, 58, 237, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:bg-purple-700 transition-colors"
              >
                Explore Components
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors"
              >
                View Documentation
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Filter Chips */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="px-6 mb-8"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {chips.map((chip) => (
                <motion.button
                  key={chip.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setChipSelected(chip.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    chipSelected === chip.id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {chip.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Cards Grid */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="px-6 mb-16"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredCards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    onClick={() => setSelectedCard(card)}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                  >
                    <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-purple-600 font-medium mb-3">{card.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed">{card.content}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.section>

        {/* Interactive Components Demo */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="px-6 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Interactive Components</h2>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Switches */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">Settings</h3>
                  <div className="space-y-4">
                    {Object.entries(switchStates).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="capitalize text-gray-700">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleSwitch(key)}
                          className={`relative w-12 h-6 rounded-full transition-colors ${
                            value ? 'bg-purple-600' : 'bg-gray-300'
                          }`}
                        >
                          <motion.div
                            animate={{ x: value ? 24 : 0 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md"
                          />
                        </motion.button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Indicators */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">Progress</h3>
                  <div className="space-y-6">
                    {[25, 50, 75].map((progress, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Task {index + 1}</span>
                          <span className="text-purple-600 font-medium">{progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ delay: 1.5 + index * 0.2, duration: 1 }}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Floating Action Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, duration: 0.3 }}
          className="fixed bottom-6 right-6"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setFabExpanded(!fabExpanded)}
            className="w-14 h-14 bg-purple-600 text-white rounded-full shadow-lg flex items-center justify-center"
          >
            <motion.span
              animate={{ rotate: fabExpanded ? 45 : 0 }}
              className="text-2xl"
            >
              +
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6 z-50"
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-3xl max-w-md w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedCard.title}</h3>
                  <p className="text-purple-600 font-medium mb-4">{selectedCard.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{selectedCard.content}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCard(null)}
                    className="w-full py-3 bg-purple-600 text-white rounded-full font-semibold"
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}