import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    let baseStyles = 'rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none';
    let variantStyles = '';
    let sizeStyles = '';

    switch (variant) {
      case 'destructive':
        variantStyles = 'bg-red-500 hover:bg-red-600 text-white shadow-sm';
        break;
      case 'outline':
        variantStyles = 'border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 shadow-sm';
        break;
      case 'secondary':
        variantStyles = 'bg-gray-100 hover:bg-gray-200 text-gray-900 shadow-sm';
        break;
      case 'ghost':
        variantStyles = 'hover:bg-gray-100 text-gray-900';
        break;
      case 'link':
        variantStyles = 'text-[#0077B6] underline-offset-4 hover:underline';
        break;
      case 'default':
      default:
        variantStyles = 'bg-[#0077B6] hover:bg-[#005F8F] text-white shadow-md';
        break;
    }

    switch (size) {
      case 'icon':
        sizeStyles = 'h-10 w-10 p-0 flex items-center justify-center'; // Square for icon, no padding
        break;
      case 'sm':
        sizeStyles = 'h-9 px-3 text-sm';
        break;
      case 'lg':
        sizeStyles = 'h-11 px-8 text-lg';
        break;
      case 'default':
      default:
        sizeStyles = 'h-10 px-5 text-base';
        break;
    }

    return (
      <button
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
