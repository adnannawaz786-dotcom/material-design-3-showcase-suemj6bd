import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Search, MoreVert, ArrowBack } from 'lucide-react';

const TopAppBar = ({ 
  title = 'Material Design 3',
  variant = 'center-aligned', // 'small', 'center-aligned', 'medium', 'large'
  showNavigation = true,
  showActions = true,
  onNavigationClick,
  onSearchClick,
  onMenuClick,
  scrolled = false,
  className = ''
}) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const baseClasses = 'relative w-full bg-surface text-on-surface transition-all duration-300 z-50';
  const elevationClasses = scrolled 
    ? 'shadow-md bg-surface-container' 
    : 'shadow-sm';

  const getHeightClasses = () => {
    switch (variant) {
      case 'small':
        return 'h-16';
      case 'medium':
        return 'h-28';
      case 'large':
        return 'h-36';
      default:
        return 'h-16';
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearchClick) {
      onSearchClick(searchQuery);
    }
  };

  const renderSmallAppBar = () => (
    <div className="flex items-center h-16 px-4">
      {showNavigation && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onNavigationClick || onMenuClick}
          className="mr-4 p-2 rounded-full hover:bg-on-surface/8 transition-colors"
          aria-label="Navigation"
        >
          <Menu size={24} />
        </motion.button>
      )}
      
      <div className="flex-1">
        <h1 className="text-xl font-medium text-on-surface">{title}</h1>
      </div>

      {showActions && (
        <div className="flex items-center space-x-1">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsSearchActive(true)}
            className="p-2 rounded-full hover:bg-on-surface/8 transition-colors"
            aria-label="Search"
          >
            <Search size={24} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full hover:bg-on-surface/8 transition-colors"
            aria-label="More options"
          >
            <MoreVert size={24} />
          </motion.button>
        </div>
      )}
    </div>
  );

  const renderCenterAlignedAppBar = () => (
    <div className="flex items-center h-16 px-4">
      {showNavigation && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onNavigationClick || onMenuClick}
          className="mr-4 p-2 rounded-full hover:bg-on-surface/8 transition-colors"
          aria-label="Navigation"
        >
          <Menu size={24} />
        </motion.button>
      )}
      
      <div className="flex-1 text-center">
        <h1 className="text-xl font-medium text-on-surface">{title}</h1>
      </div>

      {showActions && (
        <div className="flex items-center space-x-1">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsSearchActive(true)}
            className="p-2 rounded-full hover:bg-on-surface/8 transition-colors"
            aria-label="Search"
          >
            <Search size={24} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full hover:bg-on-surface/8 transition-colors"
            aria-label="More options"
          >
            <MoreVert size={24} />
          </motion.button>
        </div>
      )}
    </div>
  );

  const renderMediumAppBar = () => (
    <div className="h-28 px-4">
      <div className="flex items-center h-16">
        {showNavigation && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onNavigationClick || onMenuClick}
            className="mr-4 p-2 rounded-full hover:bg-on-surface/8 transition-colors"
            aria-label="Navigation"
          >
            <Menu size={24} />
          </motion.button>
        )}
        
        <div className="flex-1"></div>

        {showActions && (
          <div className="flex items-center space-x-1">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchActive(true)}
              className="p-2 rounded-full hover:bg-on-surface/8 transition-colors"
              aria-label="Search"
            >
              <Search size={24} />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-on-surface/8 transition-colors"
              aria-label="More options"
            >
              <MoreVert size={24} />
            </motion.button>
          </div>
        )}
      </div>
      
      <div className="flex items-end h-12 pb-3">
        <h1 className="text-2xl font-medium text-on-surface">{title}</h1>
      </div>
    </div>
  );

  const renderLargeAppBar = () => (
    <div className="h-36 px-4">
      <div className="flex items-center h-16">
        {showNavigation && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onNavigationClick || onMenuClick}
            className="mr-4 p-2 rounded-full hover:bg-on-surface/8 transition-colors"
            aria-label="Navigation"
          >
            <Menu size={24} />
          </motion.button>
        )}
        
        <div className="flex-1"></div>

        {showActions && (
          <div className="flex items-center space-x-1">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchActive(true)}
              className="p-2 rounded-full hover:bg-on-surface/8 transition-colors"
              aria-label="Search"
            >
              <Search size={24} />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full hover:bg-on-surface/8 transition-colors"
              aria-label="More options"
            >
              <MoreVert size={24} />
            </motion.button>
          </div>
        )}
      </div>
      
      <div className="flex items-end h-20 pb-4">
        <h1 className="text-3xl font-medium text-on-surface">{title}</h1>
      </div>
    </div>
  );

  const renderSearchBar = () => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute inset-0 bg-surface-container flex items-center px-4 z-10"
    >
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsSearchActive(false);
          setSearchQuery('');
        }}
        className="mr-4 p-2 rounded-full hover:bg-on-surface/8 transition-colors"
        aria-label="Close search"
      >
        <ArrowBack size={24} />
      </motion.button>
      
      <form onSubmit={handleSearchSubmit} className="flex-1">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="w-full bg-transparent text-on-surface placeholder-on-surface/60 outline-none text-lg"
          autoFocus
        />
      </form>
      
      {searchQuery && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setSearchQuery('')}
          className="ml-2 p-2 rounded-full hover:bg-on-surface/8 transition-colors"
          aria-label="Clear search"
        >
          <span className="text-xl">×</span>
        </motion.button>
      )}
    </motion.div>
  );

  const renderAppBarContent = () => {
    switch (variant) {
      case 'small':
        return renderSmallAppBar();
      case 'center-aligned':
        return renderCenterAlignedAppBar();
      case 'medium':
        return renderMediumAppBar();
      case 'large':
        return renderLargeAppBar();
      default:
        return renderCenterAlignedAppBar();
    }
  };

  return (
    <motion.header
      layout
      className={`${baseClasses} ${elevationClasses} ${getHeightClasses()} ${className}`}
    >
      {renderAppBarContent()}
      
      <AnimatePresence>
        {isSearchActive && renderSearchBar()}
      </AnimatePresence>
    </motion.header>
  );
};

export default TopAppBar;