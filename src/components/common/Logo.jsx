import React from 'react';

/**
 * Geometric Wolf Logo matching the reference screenshot icon.
 */
export const Logo = ({ className = "w-7 h-7" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Portfolio Wolf Logo"
    >
      {/* Upper ears & head crest */}
      <path
        d="M16 8.5L20 13L26 8L22 17L27 18L21 21L18 15L16 18L14 15L11 21L5 18L10 17L6 8L12 13L16 8.5Z"
        fill="currentColor"
      />
      {/* Lower muzzle facets */}
      <polygon
        points="10,20 13,26 15,22 13,17"
        fill="currentColor"
      />
      <polygon
        points="22,20 19,26 17,22 19,17"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
