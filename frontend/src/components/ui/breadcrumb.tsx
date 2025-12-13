// frontend/src/components/ui/breadcrumb.tsx

import React from 'react';

// Placeholder components with basic Tailwind styling
// These should be replaced with actual UI library components or custom implementations.

export const Breadcrumb = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<'nav'>>(
  ({ className, ...props }, ref) => (
    <nav ref={ref} aria-label="breadcrumb" className={`flex ${className}`} {...props} />
  )
);
Breadcrumb.displayName = 'Breadcrumb';

export const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<'ol'>>(
  ({ className, ...props }, ref) => (
    <ol ref={ref} className={`flex flex-wrap items-center gap-1.5 break-words text-sm text-gray-500 sm:gap-2.5 ${className}`} {...props} />
  )
);
BreadcrumbList.displayName = 'BreadcrumbList';

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={`inline-flex items-center gap-1.5 ${className}`} {...props} />
  )
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

export const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, ...props }, ref) => (
    <a ref={ref} className={`transition-colors hover:text-gray-900 ${className}`} {...props} />
  )
);
BreadcrumbLink.displayName = 'BreadcrumbLink';

export const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<'span'>>(
  ({ className, ...props }, ref) => (
    <span ref={ref} role="link" aria-disabled="true" aria-current="page" className={`font-normal text-gray-900 ${className}`} {...props} />
  )
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

export const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'li'>) => (
  <li role="presentation" aria-hidden="true" className={`flex items-center ${className}`} {...props}>
    {children || <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5 text-gray-400"
    >
      <path
        fillRule="evenodd"
        d="M16.28 11.47a.75.75 0 0 0 0-1.06l-7.5-7.5a.75.75 0 0 0-1.06 1.06L14.69 11l-6.47 6.47a.75.75 0 1 0 1.06 1.06l7.5-7.5Z"
        clipRule="evenodd"
      />
    </svg>}
  </li>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';