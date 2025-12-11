// frontend/src/components/ui/dropdown-menu.tsx

import React from 'react';

// Placeholder components to satisfy the import in DashboardTopbar.tsx
// These should be replaced with actual UI library components or custom implementations.

export const DropdownMenu = ({ children, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props}>{children}</div>
);

export const DropdownMenuTrigger = ({ children, ...props }: React.ComponentPropsWithoutRef<'button'>) => (
  <button {...props}>{children}</button>
);

export const DropdownMenuContent = ({ children, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props}>{children}</div>
);

export const DropdownMenuItem = ({ children, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props}>{children}</div>
);

export const DropdownMenuLabel = ({ children, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div {...props}>{children}</div>
);

export const DropdownMenuSeparator = ({ ...props }: React.ComponentPropsWithoutRef<'hr'>) => (
  <hr {...props} />
);
