// Lightweight stroke-icon set (Feather-inspired) so the whole app shares one
// consistent icon language without pulling in an extra dependency.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const Svg = ({ size = 18, children, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
    {children}
  </svg>
);

export const MapPinIcon = (props) => (
  <Svg {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
);

export const LockIcon = (props) => (
  <Svg {...props}>
    <rect x="4" y="11" width="16" height="9" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </Svg>
);

export const BoltIcon = (props) => (
  <Svg {...props}>
    <path d="M12 2 4 14h6l-1 8 9-13h-6l1-7Z" />
  </Svg>
);

export const ArrowRightIcon = (props) => (
  <Svg {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Svg>
);

export const CheckIcon = (props) => (
  <Svg {...props}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Svg>
);

export const PlayIcon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="9.2" />
    <path d="M10.5 8.5v7l6-3.5-6-3.5Z" fill="currentColor" stroke="none" />
  </Svg>
);

export const BellIcon = (props) => (
  <Svg {...props}>
    <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
    <path d="M10 20a2 2 0 0 0 4 0" />
  </Svg>
);

export const ChevronDownIcon = (props) => (
  <Svg {...props}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const MenuIcon = (props) => (
  <Svg {...props}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Svg>
);

export const CloseIcon = (props) => (
  <Svg {...props}>
    <path d="m6 6 12 12" />
    <path d="m18 6-12 12" />
  </Svg>
);

export const HomeIcon = (props) => (
  <Svg {...props}>
    <path d="M4 11 12 4l8 7" />
    <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />
  </Svg>
);

export const ClipboardCheckIcon = (props) => (
  <Svg {...props}>
    <rect x="6" y="4" width="12" height="17" rx="2" />
    <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
    <path d="m9.5 13 2 2 4-4" />
  </Svg>
);

export const LayersIcon = (props) => (
  <Svg {...props}>
    <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
    <path d="m4 12 8 4.5 8-4.5" />
    <path d="m4 16.5 8 4.5 8-4.5" />
  </Svg>
);

export const BookIcon = (props) => (
  <Svg {...props}>
    <path d="M5 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H5Z" />
    <path d="M19 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6Z" />
  </Svg>
);

export const BarChartIcon = (props) => (
  <Svg {...props}>
    <path d="M4 20V10" />
    <path d="M12 20V4" />
    <path d="M20 20v-6" />
  </Svg>
);

export const UsersIcon = (props) => (
  <Svg {...props}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20c0-3.6 2.5-6.2 5.5-6.2s5.5 2.6 5.5 6.2" />
    <path d="M16.2 5.2A3.2 3.2 0 0 1 17 11.4" />
    <path d="M15.8 13.9c2.6.4 4.7 2.7 4.7 6.1" />
  </Svg>
);

export const SettingsIcon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.6 1Z" />
  </Svg>
);

export const CalendarIcon = (props) => (
  <Svg {...props}>
    <rect x="3.5" y="5" width="17" height="16" rx="2" />
    <path d="M8 3v4" />
    <path d="M16 3v4" />
    <path d="M3.5 10h17" />
  </Svg>
);

export const MoreVerticalIcon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="5" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
  </Svg>
);

export const PieChartIcon = (props) => (
  <Svg {...props}>
    <path d="M21.2 15.3A10 10 0 1 1 12 2v10.2l9.2 3.1Z" />
  </Svg>
);

export const UserMinusIcon = (props) => (
  <Svg {...props}>
    <circle cx="10" cy="8" r="4" />
    <path d="M2.5 20c0-4.1 3.4-7 7.5-7s7.5 2.9 7.5 7" />
    <path d="M17 9h5" />
  </Svg>
);

export const TrendUpIcon = (props) => (
  <Svg {...props}>
    <path d="m3 16 6-6 4 4 8-8" />
    <path d="M15 6h6v6" />
  </Svg>
);

export const FileExportIcon = (props) => (
  <Svg {...props}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3v5h5" />
    <path d="M12 12v6" />
    <path d="m9.5 15.5 2.5-2.5 2.5 2.5" />
  </Svg>
);

export const QrGridIcon = (props) => (
  <Svg {...props}>
    <rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1" />
    <rect x="14" y="3.5" width="6.5" height="6.5" rx="1" />
    <rect x="3.5" y="14" width="6.5" height="6.5" rx="1" />
    <path d="M14 14h3v3" />
    <path d="M20.5 14v3h-3" />
    <path d="M14 20.5h6.5" />
  </Svg>
);

export const ClockIcon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </Svg>
);

export const ShieldIcon = (props) => (
  <Svg {...props}>
    <path d="M12 3.5 5 6v6c0 4.7 3 7.6 7 8.5 4-.9 7-3.8 7-8.5V6l-7-2.5Z" />
    <path d="m9.2 12 2 2 3.6-3.8" />
  </Svg>
);

export const GraduationCapIcon = (props) => (
  <Svg {...props}>
    <path d="m2.5 9 9.5-4.5L21.5 9 12 13.5 2.5 9Z" />
    <path d="M6.5 11v4.5c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8V11" />
    <path d="M21.5 9v6" />
  </Svg>
);

export const BotIcon = (props) => (
  <Svg {...props}>
    <rect x="4.5" y="9" width="15" height="10.5" rx="3" />
    <path d="M12 9V5.5" />
    <circle cx="12" cy="4" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="9" cy="14" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="15" cy="14" r="1.2" fill="currentColor" stroke="none" />
    <path d="M9.5 17.3c1.6.9 3.4.9 5 0" />
    <path d="M2.5 12.5h2" />
    <path d="M19.5 12.5h2" />
  </Svg>
);

export const IdBadgeIcon = (props) => (
  <Svg {...props}>
    <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
    <circle cx="12" cy="10.5" r="2.6" />
    <path d="M7.8 17c.7-2.1 2.3-3.1 4.2-3.1s3.5 1 4.2 3.1" />
    <path d="M9 6.5h6" />
  </Svg>
);

export const TargetIcon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </Svg>
);

export const EyeIcon = (props) => (
  <Svg {...props}>
    <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="3" />
  </Svg>
);

export const EyeOffIcon = (props) => (
  <Svg {...props}>
    <path d="M3.5 3.5l17 17" />
    <path d="M10.6 5.7A10.4 10.4 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a15.6 15.6 0 0 1-3.2 4" />
    <path d="M6.5 7.2C4 8.9 2.5 12 2.5 12s3.5 6.5 9.5 6.5c1.3 0 2.5-.3 3.6-.8" />
    <path d="M9.9 10.1a3 3 0 0 0 4 4" />
  </Svg>
);

export const LightbulbIcon = (props) => (
  <Svg {...props}>
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M12 3a6.5 6.5 0 0 0-3.8 11.8c.5.4.8 1 .8 1.7v.5h6v-.5c0-.7.3-1.3.8-1.7A6.5 6.5 0 0 0 12 3Z" />
  </Svg>
);

export const MailIcon = (props) => (
  <Svg {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2.2" />
    <path d="m4 6.5 8 6 8-6" />
  </Svg>
);

export const PhoneIcon = (props) => (
  <Svg {...props}>
    <path d="M6.5 3.5h3l1.4 4-2 1.6a13 13 0 0 0 5 5l1.6-2 4 1.4v3a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 5 6.1 1.5 1.5 0 0 1 6.5 3.5Z" />
  </Svg>
);

export const SendIcon = (props) => (
  <Svg {...props}>
    <path d="m3.5 11 17-8-8 17-2.3-6.7L3.5 11Z" />
  </Svg>
);

export const PaperPlaneIcon = (props) => (
  <Svg {...props}>
    <path d="m3.5 11 17-8-8 17-2.3-6.7L3.5 11Z" />
  </Svg>
);

export const BuildingIcon = (props) => (
  <Svg {...props}>
    <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
    <path d="M9 8h1.2M13.8 8H15M9 12h1.2M13.8 12H15M9 16h1.2M13.8 16H15" />
    <path d="M10 20.5V18h4v2.5" />
  </Svg>
);

export const LinkedinIcon = (props) => (
  <Svg {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M7.5 10v6.5M7.5 7.3v.1M11.5 16.5V13c0-1.4.9-2.5 2.3-2.5s2.2 1 2.2 2.5v3.5" />
  </Svg>
);

export const XSocialIcon = (props) => (
  <Svg {...props}>
    <path d="M5 5l14 14M19 5 5 19" />
  </Svg>
);

export const InstagramIcon = (props) => (
  <Svg {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </Svg>
);

export const YoutubeIcon = (props) => (
  <Svg {...props}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
    <path d="M10.5 9.3v5.4l5-2.7-5-2.7Z" fill="currentColor" stroke="none" />
  </Svg>
);

export const GoogleIcon = (props) => (
  <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24">
    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8Z" />
    <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1C3.4 21.3 7.4 24 12 24Z" />
    <path fill="#FBBC05" d="M5.4 14.4a7.2 7.2 0 0 1 0-4.8V6.5H1.4a12 12 0 0 0 0 11l4-3.1Z" />
    <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.4 0 3.4 2.7 1.4 6.5l4 3.1c.9-2.8 3.5-4.8 6.6-4.8Z" />
  </svg>
);

export const MicrosoftIcon = (props) => (
  <svg width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24">
    <rect x="2" y="2" width="9.5" height="9.5" fill="#F35325" />
    <rect x="12.5" y="2" width="9.5" height="9.5" fill="#81BC06" />
    <rect x="2" y="12.5" width="9.5" height="9.5" fill="#05A6F0" />
    <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFBA08" />
  </svg>
);

export const LaptopIcon = (props) => (
  <Svg {...props}>
    <rect x="4" y="4.5" width="16" height="10.5" rx="1.3" />
    <path d="M2.5 19.5h19" />
    <path d="M9.5 19.5 10.3 15h3.4l.8 4.5" />
  </Svg>
);

export const SmartphoneIcon = (props) => (
  <Svg {...props}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.3" />
    <path d="M11 18.5h2" />
  </Svg>
);

export const CheckCircleIcon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.2 12.3 2.6 2.6 5-5.4" />
  </Svg>
);

export const ScanIcon = (props) => (
  <Svg {...props}>
    <path d="M4 8V6a2 2 0 0 1 2-2h2" />
    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
    <path d="M20 16v2a2 2 0 0 1-2 2h-2" />
    <path d="M8 20H6a2 2 0 0 1-2-2v-2" />
    <rect x="8.5" y="8.5" width="7" height="7" rx="1" />
  </Svg>
);



export const SearchIcon = (props) => (
  <Svg {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </Svg>
);

export const HelpCircleIcon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.3 9a2.7 2.7 0 0 1 5.2 1c0 1.8-2.5 2-2.5 3.6" />
    <circle cx="12" cy="16.6" r="0.9" fill="currentColor" stroke="none" />
  </Svg>
);

export const CodeIcon = (props) => (
  <Svg {...props}>
    <path d="m9 8-4.5 4L9 16" />
    <path d="m15 8 4.5 4-4.5 4" />
  </Svg>
);

export const CalculatorIcon = (props) => (
  <Svg {...props}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M8 7h8" />
    <path d="M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
  </Svg>
);

export const RefreshIcon = (props) => (
  <Svg {...props}>
    <path d="M20 11A8 8 0 0 0 6.3 6.3L4 8.5" />
    <path d="M4 4v4.5h4.5" />
    <path d="M4 13a8 8 0 0 0 13.7 4.7L20 15.5" />
    <path d="M20 20v-4.5h-4.5" />
  </Svg>
);

export const CameraIcon = (props) => (
  <Svg {...props}>
    <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2l1-2h7l1 2h2A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5Z" />
    <circle cx="12" cy="13" r="3.2" />
  </Svg>
);

export const DownloadIcon = (props) => (
  <Svg {...props}>
    <path d="M12 3v12" />
    <path d="m7 10.5 5 5 5-5" />
    <path d="M4.5 19.5h15" />
  </Svg>
);

export const FilterIcon = (props) => (
  <Svg {...props}>
    <path d="M4 5h16" />
    <path d="M7 12h10" />
    <path d="M10.5 19h3" />
  </Svg>
);

export const ChevronRightIcon = (props) => (
  <Svg {...props}>
    <path d="m9 6 6 6-6 6" />
  </Svg>
);

export const AlertTriangleIcon = (props) => (
  <Svg {...props}>
    <path d="M12 4 2.5 20h19L12 4Z" />
    <path d="M12 10.5v4" />
    <circle cx="12" cy="17.2" r="0.9" fill="currentColor" stroke="none" />
  </Svg>
);

export const StarIcon = (props) => (
  <Svg {...props}>
    <path d="m12 3 2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 17l-5.6 3.1 1.4-6.3-4.8-4.3 6.4-.6Z" />
  </Svg>
);

export const UserIcon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M4.5 20c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5" />
  </Svg>
);

export const LogOutIcon = (props) => (
  <Svg {...props}>
    <path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3" />
    <path d="M15 8l4 4-4 4" />
    <path d="M19 12H9" />
  </Svg>
);

export const KeyIcon = (props) => (
  <Svg {...props}>
    <circle cx="8" cy="15" r="3.5" />
    <path d="m10.5 12.5 7-7" />
    <path d="M15 8l2 2" />
    <path d="M18 5l2 2" />
  </Svg>
);

export const InfoIcon = (props) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5" />
    <circle cx="12" cy="7.8" r="0.9" fill="currentColor" stroke="none" />
  </Svg>
);
