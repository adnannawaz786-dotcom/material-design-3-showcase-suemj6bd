import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Share } from 'lucide-react';

const FloatingActionButton = ({ 
  variant = 'primary',
  size = 'default',
  icon: IconComponent,
  extended = false,
  label,
  onClick,
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg hover:shadow-xl';
  
  const variants = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500',
    secondary: 'bg-teal-600 hover:bg-teal-700 text-white focus:ring-teal-500',
    surface: 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-500',
    tertiary: 'bg-amber-100 hover:bg-amber-200 text-amber-900 focus:ring-amber-500'
  };

  const sizes = {
    small: extended ? 'h-10 px-4 text-sm rounded-2xl' : 'h-10 w-10 rounded-2xl',
    default: extended ? 'h-14 px-6 text-base rounded-2xl' : 'h-14 w-14 rounded-2xl',
    large: extended ? 'h-16 px-8 text-lg rounded-3xl' : 'h-16 w-16 rounded-3xl'
  };

  const iconSizes = {
    small: 'h-4 w-4',
    default: 'h-5 w-5',
    large: 'h-6 w-6'
  };

  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed pointer-events-none' 
    : 'cursor-pointer';

  const Icon = IconComponent || Plus;

  return (
    <motion.button
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${disabledClasses}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17
      }}
      {...props}
    >
      <Icon className={`${iconSizes[size]} ${extended && label ? 'mr-2' : ''}`} />
      {extended && label && (
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.2 }}
          className="whitespace-nowrap"
        >
          {label}
        </motion.span>
      )}
    </motion.button>
  );
};

const FABGroup = ({ children, position = 'bottom-right', className = '' }) => {
  const positions = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-6 right-6',
    'top-left': 'fixed top-6 left-6'
  };

  return (
    <div className={`${positions[position]} z-50 ${className}`}>
      <div className="flex flex-col-reverse items-end space-y-reverse space-y-3">
        {children}
      </div>
    </div>
  );
};

const ExtendedFAB = ({ icon: IconComponent, label, ...props }) => {
  return (
    <FloatingActionButton
      icon={IconComponent}
      label={label}
      extended={true}
      {...props}
    />
  );
};

const SmallFAB = ({ icon: IconComponent, ...props }) => {
  return (
    <FloatingActionButton
      icon={IconComponent}
      size="small"
      {...props}
    />
  );
};

const LargeFAB = ({ icon: IconComponent, ...props }) => {
  return (
    <FloatingActionButton
      icon={IconComponent}
      size="large"
      {...props}
    />
  );
};

// Example usage components
const FABExamples = () => {
  return (
    <div className="space-y-8">
      {/* Basic FABs */}
      <div className="flex items-center space-x-4">
        <FloatingActionButton />
        <FloatingActionButton variant="secondary" icon={Edit} />
        <FloatingActionButton variant="surface" icon={Share} />
        <FloatingActionButton variant="tertiary" icon={Plus} />
      </div>

      {/* Size variations */}
      <div className="flex items-center space-x-4">
        <SmallFAB />
        <FloatingActionButton />
        <LargeFAB />
      </div>

      {/* Extended FABs */}
      <div className="flex flex-col space-y-4">
        <ExtendedFAB label="Create" icon={Plus} />
        <ExtendedFAB label="Edit" icon={Edit} variant="secondary" />
        <ExtendedFAB label="Share" icon={Share} variant="surface" />
      </div>

      {/* FAB Group example */}
      <FABGroup>
        <SmallFAB icon={Share} variant="surface" />
        <SmallFAB icon={Edit} variant="secondary" />
        <FloatingActionButton icon={Plus} />
      </FABGroup>
    </div>
  );
};

export default FloatingActionButton;
export { FABGroup, ExtendedFAB, SmallFAB, LargeFAB, FABExamples };