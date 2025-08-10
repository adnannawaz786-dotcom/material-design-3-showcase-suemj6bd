import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';

const ComponentsPage = () => {
  const [selectedTab, setSelectedTab] = useState('buttons');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [switchStates, setSwitchStates] = useState({
    switch1: false,
    switch2: true,
    switch3: false
  });

  const tabs = [
    { id: 'buttons', label: 'Buttons' },
    { id: 'cards', label: 'Cards' },
    { id: 'inputs', label: 'Inputs' },
    { id: 'navigation', label: 'Navigation' }
  ];

  const handleSwitchToggle = (switchId) => {
    setSwitchStates(prev => ({
      ...prev,
      [switchId]: !prev[switchId]
    }));
  };

  const showSnackbar = () => {
    setSnackbarOpen(true);
    setTimeout(() => setSnackbarOpen(false), 3000);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-surface-container-lowest">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-container p-6 shadow-sm"
        >
          <h1 className="text-3xl font-medium text-on-surface mb-2">Material Design 3 Components</h1>
          <p className="text-on-surface-variant">Explore our comprehensive component library</p>
        </motion.div>

        <div className="container mx-auto px-6 py-8">
          {/* Tabs */}
          <div className="flex space-x-1 bg-surface-container-high rounded-full p-1 mb-8 w-fit">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors relative ${
                  selectedTab === tab.id
                    ? 'text-on-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {selectedTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab === 'buttons' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Filled Buttons */}
                  <div className="bg-surface-container rounded-3xl p-6">
                    <h3 className="text-xl font-medium text-on-surface mb-4">Filled Buttons</h3>
                    <div className="space-y-4">
                      <motion.button 
                        className="bg-primary text-on-primary px-6 py-3 rounded-full font-medium shadow-sm"
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.15)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Primary Button
                      </motion.button>
                      <motion.button 
                        className="bg-secondary text-on-secondary px-6 py-3 rounded-full font-medium shadow-sm"
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.15)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Secondary Button
                      </motion.button>
                    </div>
                  </div>

                  {/* Outlined Buttons */}
                  <div className="bg-surface-container rounded-3xl p-6">
                    <h3 className="text-xl font-medium text-on-surface mb-4">Outlined Buttons</h3>
                    <div className="space-y-4">
                      <motion.button 
                        className="border border-outline text-primary px-6 py-3 rounded-full font-medium"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(var(--primary), 0.08)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Outlined Button
                      </motion.button>
                      <motion.button 
                        className="border border-outline text-on-surface px-6 py-3 rounded-full font-medium"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(var(--on-surface), 0.08)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Neutral Outlined
                      </motion.button>
                    </div>
                  </div>

                  {/* Floating Action Button */}
                  <div className="bg-surface-container rounded-3xl p-6">
                    <h3 className="text-xl font-medium text-on-surface mb-4">FAB</h3>
                    <div className="space-y-4">
                      <motion.button 
                        className="bg-primary-container text-on-primary-container w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1, boxShadow: "0 12px 24px rgba(0,0,0,0.2)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={showSnackbar}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'cards' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Elevated Card */}
                  <motion.div 
                    className="bg-surface-container-low rounded-3xl p-6 shadow-md"
                    whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}
                  >
                    <h3 className="text-xl font-medium text-on-surface mb-2">Elevated Card</h3>
                    <p className="text-on-surface-variant mb-4">This card has elevation and shadow effects following Material Design 3 principles.</p>
                    <motion.button 
                      className="text-primary font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </motion.div>

                  {/* Filled Card */}
                  <motion.div 
                    className="bg-surface-container-high rounded-3xl p-6"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-xl font-medium text-on-surface mb-2">Filled Card</h3>
                    <p className="text-on-surface-variant mb-4">A filled card with higher contrast background for emphasis.</p>
                    <motion.button 
                      className="bg-primary text-on-primary px-4 py-2 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Action
                    </motion.button>
                  </motion.div>

                  {/* Outlined Card */}
                  <motion.div 
                    className="bg-surface border border-outline rounded-3xl p-6"
                    whileHover={{ borderColor: 'var(--primary)', scale: 1.02 }}
                  >
                    <h3 className="text-xl font-medium text-on-surface mb-2">Outlined Card</h3>
                    <p className="text-on-surface-variant mb-4">A subtle card with outline border for clean separation.</p>
                    <motion.button 
                      className="border border-outline text-primary px-4 py-2 rounded-full text-sm font-medium"
                      whileHover={{ backgroundColor: 'rgba(var(--primary), 0.08)' }}
                    >
                      Explore
                    </motion.button>
                  </motion.div>
                </div>
              )}

              {selectedTab === 'inputs' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Text Fields */}
                  <div className="bg-surface-container rounded-3xl p-6">
                    <h3 className="text-xl font-medium text-on-surface mb-4">Text Fields</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-on-surface mb-2">Filled TextField</label>
                        <input 
                          type="text" 
                          className="w-full bg-surface-container-highest border-0 border-b-2 border-outline focus:border-primary rounded-t-lg px-4 py-3 text-on-surface placeholder-on-surface-variant focus:outline-none transition-colors"
                          placeholder="Enter text here"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-on-surface mb-2">Outlined TextField</label>
                        <input 
                          type="text" 
                          className="w-full bg-transparent border-2 border-outline focus:border-primary rounded-lg px-4 py-3 text-on-surface placeholder-on-surface-variant focus:outline-none transition-colors"
                          placeholder="Enter text here"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Switches and Sliders */}
                  <div className="bg-surface-container rounded-3xl p-6">
                    <h3 className="text-xl font-medium text-on-surface mb-4">Controls</h3>
                    <div className="space-y-6">
                      {/* Switches */}
                      <div>
                        <p className="text-sm font-medium text-on-surface mb-3">Switches</p>
                        {Object.entries(switchStates).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between mb-2">
                            <span className="text-on-surface-variant">Option {key.slice(-1)}</span>
                            <motion.button
                              className={`w-12 h-6 rounded-full p-1 transition-colors ${
                                value ? 'bg-primary' : 'bg-surface-container-highest'
                              }`}
                              onClick={() => handleSwitchToggle(key)}
                              whileTap={{ scale: 0.95 }}
                            >
                              <motion.div
                                className={`w-4 h-4 rounded-full transition-colors ${
                                  value ? 'bg-on-primary' : 'bg-outline'
                                }`}
                                animate={{ x: value ? 24 : 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              />
                            </motion.button>
                          </div>
                        ))}
                      </div>

                      {/* Slider */}
                      <div>
                        <p className="text-sm font-medium text-on-surface mb-3">Slider: {sliderValue}%</p>
                        <div className="relative">
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            onChange={(e) => setSliderValue(e.target.value)}
                            className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedTab === 'navigation' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Navigation Rail */}
                  <div className="bg-surface-container rounded-3xl p-6">
                    <h3 className="text-xl font-medium text-on-surface mb-4">Navigation Rail</h3>
                    <div className="flex space-x-1 bg-surface-container-high rounded-full p-1 w-fit">
                      {['Home', 'Search', 'Library'].map((item, index) => (
                        <motion.button
                          key={item}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            index === 0 ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant hover:text-on-surface'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="bg-surface-container rounded-3xl p-6">
                    <h3 className="text-xl font-medium text-on-surface mb-4">Menu Items</h3>
                    <div className="space-y-2">
                      {['Profile Settings', 'Notifications', 'Privacy', 'Help & Support'].map((item) => (
                        <motion.div
                          key={item}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-high cursor-pointer transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="text-on-surface font-medium">{item}</span>
                          <svg className="w-5 h-5 text-on-surface-variant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dialog */}
        <AnimatePresence>
          {dialogOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setDialogOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-surface-container-high rounded-3xl p-6 max-w-md mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-xl font-medium text-on-surface mb-4">Dialog Title</h3>
                <p className="text-on-surface-variant mb-6">This is a sample dialog following Material Design 3 principles.</p>
                <div className="flex justify-end space-x-4">
                  <motion.button
                    className="text-primary font-medium px-4 py-2 rounded-full"
                    whileHover={{ backgroundColor: 'rgba(var(--primary), 0.08)' }}
                    onClick={() => setDialogOpen(false)}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    className="bg-primary text-on-primary px-6 py-2 rounded-full font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setDialogOpen(false)}
                  >
                    Confirm
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Snackbar */}
        <AnimatePresence>
          {snackbarOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 left-6 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-lg z-50"
            >
              <p>Action completed successfully!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default ComponentsPage;