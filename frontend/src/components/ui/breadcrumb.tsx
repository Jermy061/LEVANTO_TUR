// frontend/src/components/ui/breadcrumb.tsx

import React from 'react';

// Placeholder components to satisfy the import in DashboardTopbar.tsx
// These should be replaced with actual UI library components or custom implementations.

export const Breadcrumb = ({ children, ...props }: React.ComponentPropsWithoutRef<'nav'>) => (
  <nav aria-label="breadcrumb" {...props}>{children}</nav>
);

export const BreadcrumbList = ({ children, ...props }: React.ComponentPropsWithoutRef<'ol'>) => (
  <ol {...props}>{children}</ol>
);

export const BreadcrumbItem = ({ children, ...props }: React.ComponentPropsWithoutRef<'li'>) => (
  <li {...props}>{children}</li>
);

export const BreadcrumbLink = ({ children, ...props }: React.ComponentPropsWithoutRef<'a'>) => (
  <a {...props}>{children}</a>
);

export const BreadcrumbPage = ({ children, ...props }: React.ComponentPropsWithoutRef<'span'>) => (
  <span aria-current="page" {...props}>{children}</span>
);

export const BreadcrumbSeparator = ({ children, ...props }: React.ComponentPropsWithoutRef<'span'>) => (
  <span role="presentation" {...props}>{children || '/'}</span>
);
