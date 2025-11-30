// src/components/icons/index.tsx

import React from 'react';

// Iconos existentes
export const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 9.5 12 3l9 6.5" />
    <path d="M5 10v10h14V10" />
  </svg>
);

export const InfoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z" />
    <circle cx="12" cy="11" r="2" />
  </svg>
);

export const UtensilsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 3v8" />
    <path d="M8 3v8" />
    <path d="M4 7h4" />
    <path d="M11 3h2a3 3 0 0 1 3 3v5" />
    <path d="M14 12v9" />
    <path d="M6 11v10" />
  </svg>
);

export const BusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 4h14a2 2 0 0 1 2 2v9H3V6a2 2 0 0 1 2-2Z" />
    <path d="M3 13h18" />
    <path d="M6 16v2" />
    <path d="M18 16v2" />
    <circle cx="7" cy="18" r="1" />
    <circle cx="17" cy="18" r="1" />
  </svg>
);

export const UserPlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 21a6 6 0 0 0-12 0" />
    <circle cx="9" cy="7" r="4" />
    <line x1="17" y1="8" x2="23" y2="8" />
    <line x1="20" y1="5" x2="20" y2="11" />
  </svg>
);

export const LayoutDashboardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="7" height="9" rx="1" />
    <rect x="14" y="3" width="7" height="5" rx="1" />
    <rect x="14" y="11" width="7" height="9" rx="1" />
    <rect x="3" y="14" width="7" height="6" rx="1" />
  </svg>
);

export const BuildingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="7" height="18" rx="1" />
    <rect x="14" y="8" width="7" height="13" rx="1" />
    <path d="M7 7h0" />
    <path d="M7 11h0" />
    <path d="M7 15h0" />
    <path d="M18 12h0" />
    <path d="M18 16h0" />
  </svg>
);

export const MountainIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m8 3 4 8 5-5 5 13H2Z" />
  </svg>
);

export const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.78 1.78 0 0 0 .38 2l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.78 1.78 0 0 0-2-.38 1.78 1.78 0 0 0-1 1.62V21a2 2 0 0 1-4 0v-.09A1.78 1.78 0 0 0 8 19.29a1.78 1.78 0 0 0-2 .38l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.78 1.78 0 0 0 .38-2 1.78 1.78 0 0 0-1.62-1H2a2 2 0 0 1 0-4h.09A1.78 1.78 0 0 0 3.71 8a1.78 1.78 0 0 0-.38-2l-.06-.06A2 2 0 0 1 6.1 3.1l.06.06a1.78 1.78 0 0 0 2 .38H8.2A1.78 1.78 0 0 0 10 2.09V2a2 2 0 0 1 4 0v.09A1.78 1.78 0 0 0 15.8 4h.14a1.78 1.78 0 0 0 2-.38l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.78 1.78 0 0 0-.38 2 1.78 1.78 0 0 0 1.62 1H22a2 2 0 0 1 0 4h-.09a1.78 1.78 0 0 0-1.62 1Z" />
  </svg>
);
