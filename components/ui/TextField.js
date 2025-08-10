import React, { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

const TextField = forwardRef(({
  label,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  helperText,
  disabled = false,
  required = false,
  type = 'text',
  variant = 'outlined',
  className,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(Boolean(value));

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const handleChange = (e) => {
    setHasValue(Boolean(e.target.value));
    onChange?.(e);
  };

  const isLabelFloating = isFocused || hasValue || placeholder;

  const containerVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.01 },
    focus: { scale: 1.02 }
  };

  const labelVariants = {
    rest: {
      y: 0,
      scale: 1,
      color: error ? '#dc2626' : '#6b7280'
    },
    floating: {
      y: -24,
      scale: 0.75,
      color: error ? '#dc2626' : isFocused ? '#3b82f6' : '#6b7280'
    }
  };

  const underlineVariants = {
    rest: { scaleX: 0 },
    focus: { scaleX: 1 }
  };

  const getInputClasses = () => {
    const baseClasses = [
      'w-full',
      'px-4',
      'py-3',
      'text-base',
      'bg-transparent',
      'border-0',
      'outline-none',
      'transition-colors',
      'duration-200',
      'placeholder-transparent'
    ];

    if (variant === 'outlined') {
      baseClasses.push(
        'rounded-lg',
        'border-2',
        error 
          ? 'border-red-500' 
          : isFocused 
            ? 'border-blue-500' 
            : 'border-gray-300',
        'focus:border-blue-500'
      );
    } else if (variant === 'filled') {
      baseClasses.push(
        'rounded-t-lg',
        'bg-gray-100',
        'border-b-2',
        error 
          ? 'border-b-red-500' 
          : isFocused 
            ? 'border-b-blue-500' 
            : 'border-b-gray-400'
      );
    } else {
      baseClasses.push(
        'border-b-2',
        error 
          ? 'border-b-red-500' 
          : isFocused 
            ? 'border-b-blue-500' 
            : 'border-b-gray-400'
      );
    }

    if (disabled) {
      baseClasses.push('cursor-not-allowed', 'opacity-60');
    }

    return baseClasses.join(' ');
  };

  const getContainerClasses = () => {
    const baseClasses = ['relative', 'w-full'];
    
    if (variant === 'filled') {
      baseClasses.push('bg-gray-100', 'rounded-t-lg');
    }

    return cn(baseClasses, className);
  };

  const getLabelClasses = () => {
    const baseClasses = [
      'absolute',
      'left-4',
      'pointer-events-none',
      'transition-all',
      'duration-200',
      'origin-left'
    ];

    if (variant === 'standard') {
      baseClasses.push('top-3');
    } else {
      baseClasses.push('top-3');
    }

    if (isLabelFloating) {
      if (variant === 'outlined') {
        baseClasses.push('bg-white', 'px-1', '-ml-1');
      }
    }

    return baseClasses.join(' ');
  };

  return (
    <div className="w-full">
      <motion.div
        variants={containerVariants}
        initial="rest"
        whileHover={!disabled ? "hover" : "rest"}
        animate={isFocused ? "focus" : "rest"}
        className={getContainerClasses()}
      >
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          className={getInputClasses()}
          {...props}
        />
        
        {label && (
          <motion.label
            variants={labelVariants}
            animate={isLabelFloating ? "floating" : "rest"}
            className={getLabelClasses()}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </motion.label>
        )}

        {variant === 'standard' && (
          <motion.div
            variants={underlineVariants}
            animate={isFocused ? "focus" : "rest"}
            className={cn(
              'absolute',
              'bottom-0',
              'left-0',
              'h-0.5',
              'w-full',
              'origin-center',
              error ? 'bg-red-500' : 'bg-blue-500'
            )}
          />
        )}

        {(variant === 'outlined' && isFocused) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 rounded-lg border-2 border-blue-500 pointer-events-none"
          />
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {(error || helperText) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'mt-1',
              'text-sm',
              'px-4',
              error ? 'text-red-500' : 'text-gray-600'
            )}
          >
            {error || helperText}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

TextField.displayName = 'TextField';

export default TextField;