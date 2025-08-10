import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

const Chip = React.forwardRef(({
  className,
  variant = 'filled',
  size = 'medium',
  color = 'primary',
  label,
  avatar,
  icon,
  onDelete,
  onClick,
  disabled = false,
  selected = false,
  children,
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeClasses = {
    small: 'h-8 px-3 text-xs',
    medium: 'h-10 px-4 text-sm',
    large: 'h-12 px-5 text-base'
  };

  const variantClasses = {
    filled: {
      primary: selected 
        ? 'bg-purple-600 text-white shadow-md hover:bg-purple-700 focus:ring-purple-500'
        : 'bg-purple-100 text-purple-800 hover:bg-purple-200 focus:ring-purple-500',
      secondary: selected
        ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:ring-blue-500'
        : 'bg-blue-100 text-blue-800 hover:bg-blue-200 focus:ring-blue-500',
      success: selected
        ? 'bg-green-600 text-white shadow-md hover:bg-green-700 focus:ring-green-500'
        : 'bg-green-100 text-green-800 hover:bg-green-200 focus:ring-green-500',
      warning: selected
        ? 'bg-amber-600 text-white shadow-md hover:bg-amber-700 focus:ring-amber-500'
        : 'bg-amber-100 text-amber-800 hover:bg-amber-200 focus:ring-amber-500',
      error: selected
        ? 'bg-red-600 text-white shadow-md hover:bg-red-700 focus:ring-red-500'
        : 'bg-red-100 text-red-800 hover:bg-red-200 focus:ring-red-500'
    },
    outlined: {
      primary: selected
        ? 'border-2 border-purple-600 bg-purple-50 text-purple-700 shadow-sm hover:bg-purple-100 focus:ring-purple-500'
        : 'border border-purple-300 text-purple-700 hover:border-purple-400 hover:bg-purple-50 focus:ring-purple-500',
      secondary: selected
        ? 'border-2 border-blue-600 bg-blue-50 text-blue-700 shadow-sm hover:bg-blue-100 focus:ring-blue-500'
        : 'border border-blue-300 text-blue-700 hover:border-blue-400 hover:bg-blue-50 focus:ring-blue-500',
      success: selected
        ? 'border-2 border-green-600 bg-green-50 text-green-700 shadow-sm hover:bg-green-100 focus:ring-green-500'
        : 'border border-green-300 text-green-700 hover:border-green-400 hover:bg-green-50 focus:ring-green-500',
      warning: selected
        ? 'border-2 border-amber-600 bg-amber-50 text-amber-700 shadow-sm hover:bg-amber-100 focus:ring-amber-500'
        : 'border border-amber-300 text-amber-700 hover:border-amber-400 hover:bg-amber-50 focus:ring-amber-500',
      error: selected
        ? 'border-2 border-red-600 bg-red-50 text-red-700 shadow-sm hover:bg-red-100 focus:ring-red-500'
        : 'border border-red-300 text-red-700 hover:border-red-400 hover:bg-red-50 focus:ring-red-500'
    },
    elevated: {
      primary: 'bg-white text-purple-700 shadow-md hover:shadow-lg border border-purple-200 focus:ring-purple-500',
      secondary: 'bg-white text-blue-700 shadow-md hover:shadow-lg border border-blue-200 focus:ring-blue-500',
      success: 'bg-white text-green-700 shadow-md hover:shadow-lg border border-green-200 focus:ring-green-500',
      warning: 'bg-white text-amber-700 shadow-md hover:shadow-lg border border-amber-200 focus:ring-amber-500',
      error: 'bg-white text-red-700 shadow-md hover:shadow-lg border border-red-200 focus:ring-red-500'
    }
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed pointer-events-none';
  const clickableClasses = onClick ? 'cursor-pointer' : '';

  const iconSize = size === 'small' ? 14 : size === 'medium' ? 16 : 18;
  const avatarSize = size === 'small' ? 'w-6 h-6' : size === 'medium' ? 'w-7 h-7' : 'w-8 h-8';

  const chipVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 },
    tap: { scale: 0.98 }
  };

  const deleteVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant][color],
        disabled && disabledClasses,
        clickableClasses,
        className
      )}
      variants={chipVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileTap={!disabled ? "tap" : undefined}
      onClick={!disabled ? onClick : undefined}
      {...props}
    >
      {avatar && (
        <motion.div
          className={cn('rounded-full overflow-hidden flex-shrink-0', avatarSize)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          {avatar}
        </motion.div>
      )}
      
      {icon && !avatar && (
        <motion.div
          className="flex-shrink-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          {React.cloneElement(icon, { size: iconSize })}
        </motion.div>
      )}
      
      <span className="truncate">
        {label || children}
      </span>
      
      {onDelete && (
        <motion.button
          className="flex-shrink-0 ml-1 p-0.5 rounded-full hover:bg-black/10 focus:outline-none focus:bg-black/10"
          variants={deleteVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          disabled={disabled}
        >
          <X size={iconSize - 2} />
        </motion.button>
      )}
    </motion.div>
  );
});

Chip.displayName = 'Chip';

export default Chip;

export { Chip };