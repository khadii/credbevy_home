// // icons.js
// import React from 'react';

// const IconWrapper = ({ children, isActive = false }:{children:any,isActive:boolean}) => (
//   <svg 
//     xmlns="http://www.w3.org/2000/svg" 
//     viewBox="0 0 24 24" 
//     width="24" 
//     height="24"
//     style={{ fill: isActive ? '#0066cc' : '#555' }}
//   >
//     {children}
//   </svg>
// );

// export const DollarSignIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <circle cx="12" cy="12" r="10"/>
//     <path d="M12 6v2m0 8v2M15 9.5c0 1.11-.89 2-2 2h-2c-1.11 0-2 .89-2 2s.89 2 2 2h2c1.11 0 2-.89 2-2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
//   </IconWrapper>
// );

// export const BriefcaseIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
//     <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="white" strokeWidth="1" fill="none"/>
//   </IconWrapper>
// );

// export const BankIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <path d="M12 3L2 9h20L12 3z"/>
//     <rect x="4" y="11" width="16" height="8" rx="1"/>
//     <path d="M6 11v6M10 11v6M14 11v6M18 11v6" stroke="white" strokeWidth="1"/>
//     <rect x="2" y="19" width="20" height="2"/>
//   </IconWrapper>
// );

// export const SecureLockIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <rect x="5" y="11" width="14" height="10" rx="2"/>
//     <path d="M8 11V7a4 4 0 118 0v4" stroke="white" strokeWidth="1" fill="none"/>
//     <circle cx="12" cy="16" r="1" fill="white"/>
//   </IconWrapper>
// );

// export const UnlockIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <rect x="5" y="11" width="14" height="10" rx="2"/>
//     <path d="M16 7A4 4 0 008 7v4" stroke="white" strokeWidth="1" fill="none"/>
//     <circle cx="12" cy="16" r="1" fill="white"/>
//   </IconWrapper>
// );

// export const DotsIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <circle cx="6" cy="12" r="2"/>
//     <circle cx="12" cy="12" r="2"/>
//     <circle cx="18" cy="12" r="2"/>
//   </IconWrapper>
// );

// export const AlertIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <path d="M12 3L2 21h20L12 3z"/>
//     <path d="M12 9v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
//     <circle cx="12" cy="18" r="1" fill="white"/>
//   </IconWrapper>
// );

// export const CurrencyIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <circle cx="12" cy="12" r="10"/>
//     <path d="M8 8h8M8 12h8M8 16h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
//   </IconWrapper>
// );

// export const RefreshIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <path d="M20 12c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c2.8 0 5.3 1.5 6.7 3.7" stroke="white" strokeWidth="0.8" fill="none"/>
//     <path d="M16 7l3-3v6h-6l3-3z"/>
//   </IconWrapper>
// );

// export const RecycleIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <path d="M19 8l-4 4m0-4l4 4M5 16l4-4m-4 0l4 4" stroke="white" strokeWidth="0.8" strokeLinecap="round"/>
//     <path d="M21 12c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z" stroke="white" strokeWidth="0.8" fill="none"/>
//   </IconWrapper>
// );

// export const ChatIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2h-2l-4 4-4-4H4a2 2 0 01-2-2V6a2 2 0 012-2z"/>
//     <path d="M8 10h8M8 14h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
//   </IconWrapper>
// );

// export const WalletIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <path d="M20 6H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2z"/>
//     <path d="M20 6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2" stroke="white" strokeWidth="0.5" fill="none"/>
//     <rect x="16" y="11" width="4" height="4" rx="1" fill="white"/>
//   </IconWrapper>
// );

// export const NodeIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <circle cx="6" cy="6" r="3"/>
//     <circle cx="18" cy="6" r="3"/>
//     <circle cx="6" cy="18" r="3"/>
//     <circle cx="18" cy="18" r="3"/>
//     <path d="M6 9v6M9 6h6M18 9v6M9 18h6" stroke="white" strokeWidth="0.8"/>
//   </IconWrapper>
// );

// export const UserGroupIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <circle cx="9" cy="7" r="3"/>
//     <circle cx="16" cy="7" r="2" fill="#777"/>
//     <path d="M3 19v-2a4 4 0 014-4h4a4 4 0 014 4v2"/>
//     <path d="M21 19v-1a3 3 0 00-3-3h-2" stroke="white" strokeWidth="0.8" fill="none"/>
//   </IconWrapper>
// );

// export const PhoneIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <path d="M19.8 21L17 19.2c-1.1-.7-1.1-2.2 0-2.9l1.2-1.2c.4-.4.4-1 0-1.4l-2.5-2.5c-.4-.4-1-.4-1.4 0L13 12.3c-.7 1.1-2.2 1.1-2.9 0L7.9 9c-.7-1.1-.7-2.6 0-3.3L9 4.2c.4-.4.4-1 0-1.4L6.5.3c-.4-.4-1-.4-1.4 0L3.9 1.5c-1.1.7-1.1 2.2 0 2.9L6 6.6c1.1.7 1.1 2.2 0 2.9l-1.2 1.2c-.4.4-.4 1 0 1.4l2.5 2.5c.4.4 1 .4 1.4 0L10 13.5c.7-1.1 2.2-1.1 2.9 0l2.2 3.3c.7 1.1.7 2.6 0 3.3l-1.1 1.1c-.4.4-.4 1 0 1.4l2.5 2.5c.4.4 1 .4 1.4 0l1.9-1.9z"/>
//   </IconWrapper>
// );

// export const PortfolioIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
//     <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="white" strokeWidth="1" fill="none"/>
//     <path d="M12 7v10" stroke="white" strokeWidth="1"/>
//   </IconWrapper>
// );

// export const EducationIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <path d="M12 4L2 9l10 5 10-5-10-5z"/>
//     <path d="M19 12v5c0 1.1-3.1 3-7 3s-7-1.9-7-3v-5" stroke="white" strokeWidth="0.8" fill="none"/>
//     <path d="M22 9v6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
//   </IconWrapper>
// );

// export const GlobeIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <circle cx="12" cy="12" r="10"/>
//     <path d="M2 12h20M12 2c3 3.5 5 7 5 10s-2 6.5-5 10c-3-3.5-5-7-5-10s2-6.5 5-10z" stroke="white" strokeWidth="1" fill="none"/>
//   </IconWrapper>
// );

// export const HelpIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <circle cx="12" cy="12" r="10"/>
//     <path d="M9 10a3 3 0 113 3v2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
//     <circle cx="12" cy="18" r="1" fill="white"/>
//   </IconWrapper>
// );

// export const BookIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <path d="M4 4h6v16H4a2 2 0 01-2-2V6a2 2 0 012-2z"/>
//     <path d="M14 4h6a2 2 0 012 2v12a2 2 0 01-2 2h-6V4z"/>
//     <path d="M12 4v16" stroke="white" strokeWidth="1"/>
//   </IconWrapper>
// );

// export const BlockIcon = ({ isActive }:{isActive:boolean}) => (
//   <IconWrapper isActive={isActive}>
//     <circle cx="12" cy="12" r="10"/>
//     <path d="M5 5l14 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
//   </IconWrapper>
// );


