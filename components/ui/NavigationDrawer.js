import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Palette, Info, Menu, ChevronRight } from 'lucide-react';

const NavigationDrawer = ({ isOpen, onClose, onNavigate }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const navigationItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      path: '/',
      description: 'Material Design showcase'
    },
    {
      id: 'components',
      label: 'Components',
      icon: Palette,
      path: '/components',
      description: 'UI component library'
    },
    {
      id: 'about',
      label: 'About',
      icon: Info,
      path: '/about',
      description: 'About Material Design 3'
    }
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item.id);
    setTimeout(() => {
      onNavigate(item.path);
      onClose();
      setSelectedItem(null);
    }, 150);
  };

  const handleKeyDown = (e, item) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleItemClick(item);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const drawerVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  const staggerContainer = {
    open: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed left-0 top-0 h-full w-80 bg-surface-container-low border-r border-outline-variant z-50 shadow-xl"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-outline-variant">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Menu className="w-4 h-4 text-on-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-on-surface">
                      Material Design 3
                    </h2>
                    <p className="text-sm text-on-surface-variant">
                      Component Showcase
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-surface-container-high transition-colors"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5 text-on-surface-variant" />
                </button>
              </div>

              {/* Navigation Items */}
              <motion.nav
                className="flex-1 p-4"
                variants={staggerContainer}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <ul className="space-y-2">
                  {navigationItems.map((item) => {
                    const IconComponent = item.icon;
                    const isSelected = selectedItem === item.id;

                    return (
                      <motion.li key={item.id} variants={itemVariants}>
                        <button
                          onClick={() => handleItemClick(item)}
                          onKeyDown={(e) => handleKeyDown(e, item)}
                          className={`
                            w-full flex items-center space-x-4 p-4 rounded-xl
                            transition-all duration-200 group
                            ${isSelected 
                              ? 'bg-secondary-container text-on-secondary-container' 
                              : 'hover:bg-surface-container-high text-on-surface'
                            }
                          `}
                          aria-label={`Navigate to ${item.label}`}
                        >
                          <div className={`
                            p-2 rounded-lg transition-colors
                            ${isSelected 
                              ? 'bg-secondary text-on-secondary' 
                              : 'bg-surface-container-highest text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary'
                            }
                          `}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          
                          <div className="flex-1 text-left">
                            <div className="font-medium">
                              {item.label}
                            </div>
                            <div className={`
                              text-sm transition-colors
                              ${isSelected 
                                ? 'text-on-secondary-container/70' 
                                : 'text-on-surface-variant'
                              }
                            `}>
                              {item.description}
                            </div>
                          </div>

                          <ChevronRight className={`
                            w-5 h-5 transition-all duration-200
                            ${isSelected 
                              ? 'text-on-secondary-container translate-x-1' 
                              : 'text-on-surface-variant group-hover:translate-x-1'
                            }
                          `} />
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.nav>

              {/* Footer */}
              <div className="p-6 border-t border-outline-variant">
                <div className="text-xs text-on-surface-variant text-center">
                  Material Design 3 Showcase
                  <br />
                  Built with Next.js & Tailwind CSS
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NavigationDrawer;