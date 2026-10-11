import {
  HomeIcon,
  UsersIcon,
  ClipboardCheckIcon,
  LayersIcon,
  BookIcon,
  BarChartIcon,
  BellIcon,
  SettingsIcon,
  CalendarIcon,
  TrendUpIcon,
  UserMinusIcon,
  PieChartIcon,
  MapPinIcon,
  LockIcon,
  BoltIcon,
  QrGridIcon,
  ClockIcon,
  FileExportIcon,
  IdBadgeIcon,
  ShieldIcon,
  GraduationCapIcon,
  BotIcon,
  TargetIcon,
  EyeIcon,
  LightbulbIcon,
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
  XSocialIcon,
  InstagramIcon,
  YoutubeIcon,
  CheckIcon,
  ScanIcon,
  HelpCircleIcon,
  CloseIcon,
  LaptopIcon,
  CodeIcon,
  CalculatorIcon,
  CheckCircleIcon,
  InfoIcon,
  StarIcon,
  AlertTriangleIcon,
  DownloadIcon,
  FilterIcon,
  UserIcon,
  LogOutIcon,
  KeyIcon,
  RefreshIcon,
  CameraIcon,
} from '../components/icons/Icons.jsx';

import avatar1 from '../assets/images/avatar-1.svg';
import avatar2 from '../assets/images/avatar-2.svg';
import avatar3 from '../assets/images/avatar-3.svg';
import avatar4 from '../assets/images/avatar-4.svg';
import studentAvatar from '../assets/images/avatar-2.svg';

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const FOOTER_LINKS = {
  Product: [
    { label: 'Features', to: '/features' },
    { label: 'How It Works', to: '/how-it-works' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  Account: [
    { label: 'Login', to: '/login' },
    { label: 'Get Started', to: '/signup' },
  ],
};

// ---------------------------------------------------------------------------
// Brand
// ---------------------------------------------------------------------------

export const BRAND_TAGLINE = 'One Move Ahead. Accuracy in Every Flow.';

// ---------------------------------------------------------------------------
// Landing page — Hero
// ---------------------------------------------------------------------------

export const HERO_BADGES = [
  { icon: MapPinIcon, label: 'GPS Verified' },
  { icon: LockIcon, label: 'Fraud-proof' },
  { icon: BoltIcon, label: 'Real-time' },
];

export const HERO_AVATARS = [avatar1, avatar2, avatar3, avatar4];

// ---------------------------------------------------------------------------
// Landing page — Features teaser (6 cards)
// ---------------------------------------------------------------------------

export const LANDING_FEATURES = [
  {
    icon: QrGridIcon,
    tone: 'green',
    title: 'QR Code Attendance',
    description:
      'Students check in by scanning a unique, time-bound QR code generated fresh for every session.',
  },
  {
    icon: MapPinIcon,
    tone: 'blue',
    title: 'GPS Verification',
    description:
      'Location is checked against the classroom radius in real time, so check-ins outside the room are rejected.',
  },
  {
    icon: CalendarIcon,
    tone: 'purple',
    title: 'Session Management',
    description:
      'Lecturers create and manage sessions with custom timing, duration, and room settings in a few taps.',
  },
  {
    icon: BarChartIcon,
    tone: 'orange',
    title: 'Real-time Analytics',
    description:
      'Track attendance trends by course, level, or department as check-ins come in, not after the fact.',
  },
  {
    icon: FileExportIcon,
    tone: 'red',
    title: 'Reports & Export',
    description:
      'Generate detailed attendance reports and export them to CSV or PDF for departmental records.',
  },
  {
    icon: BellIcon,
    tone: 'green',
    title: 'Notifications',
    description:
      'Automatic alerts for low attendance, upcoming sessions, and flagged check-in anomalies.',
  },
];

// ---------------------------------------------------------------------------
// Landing page — How It Works teaser (3 steps)
// ---------------------------------------------------------------------------

export const LANDING_STEPS = [
  {
    icon: CalendarIcon,
    title: 'Lecturer opens a session',
    description:
      'A lecturer starts a session for their course, setting the room, duration, and check-in window.',
  },
  {
    icon: QrGridIcon,
    title: 'Students scan the code',
    description:
      'A fresh QR code appears for that session only. Students scan it from the AttendFlow app to check in.',
  },
  {
    icon: ClipboardCheckIcon,
    title: 'Location confirms the record',
    description:
      'GPS checks each student is inside the room radius before marking them present — no proxy check-ins.',
  },
];

// ---------------------------------------------------------------------------
// Landing page — About teaser stats
// ---------------------------------------------------------------------------

export const LANDING_STATS = [
  { value: '50+', label: 'Departments piloting AttendFlow' },
  { value: '12,000+', label: 'Attendance records verified' },
  { value: '<3s', label: 'Average check-in time' },
];

// ---------------------------------------------------------------------------
// Features page — full 12-card grid
// ---------------------------------------------------------------------------

export const FEATURE_GRID_ITEMS = [
  {
    icon: QrGridIcon,
    tone: 'green',
    title: 'QR Code Attendance',
    description: 'Students mark attendance instantly by scanning a unique QR code generated for each session.',
  },
  {
    icon: MapPinIcon,
    tone: 'blue',
    title: 'Location Verification',
    description: 'Verify student location in real time to ensure attendance is taken from the right place.',
  },
  {
    icon: ClockIcon,
    tone: 'purple',
    title: 'Session Management',
    description: 'Create, manage, and control attendance sessions with custom time, duration, and location.',
  },
  {
    icon: BarChartIcon,
    tone: 'orange',
    title: 'Real-time Analytics',
    description: 'Get real-time insights into attendance statistics, trends, and performance.',
  },
  {
    icon: FileExportIcon,
    tone: 'red',
    title: 'Attendance Reports',
    description: 'Generate detailed reports and export attendance data in PDF or CSV formats.',
  },
  {
    icon: UsersIcon,
    tone: 'teal',
    title: 'Student Dashboard',
    description: 'Students can view their attendance history, percentages, and course-wise records.',
  },
  {
    icon: IdBadgeIcon,
    tone: 'green',
    title: 'Lecturer Dashboard',
    description: 'Lecturers can monitor sessions, students, and attendance performance with ease.',
  },
  {
    icon: BellIcon,
    tone: 'purple',
    title: 'Notifications',
    description: 'Receive instant notifications for sessions, reminders, and important updates.',
  },
  {
    icon: ShieldIcon,
    tone: 'orange',
    title: 'Secure Authentication',
    description: 'Role-based access control ensures data security and privacy for all users.',
  },
  {
    icon: PieChartIcon,
    tone: 'red',
    title: 'Attendance History',
    description: 'View detailed attendance history for any course or session at any time.',
  },
  {
    icon: GraduationCapIcon,
    tone: 'blue',
    title: 'Course Management',
    description: 'Easily create and manage courses, classes, and enrolled students.',
  },
  {
    icon: BotIcon,
    tone: 'green',
    title: 'AI Attendance Assistant',
    description: 'Ask questions and get intelligent insights about attendance using AI.',
    isNew: true,
  },
];

// ---------------------------------------------------------------------------
// How It Works page — 6-step process
// ---------------------------------------------------------------------------

export const PROCESS_STEPS = [
  {
    title: 'Lecturer Starts Attendance',
    description:
      'The lecturer selects a course, sets the date, time, and location, then starts an attendance session.',
    visual: 'form',
  },
  {
    title: 'QR Code Generated',
    description:
      'AttendFlow generates a unique QR code for the session that students will scan to mark attendance.',
    visual: 'qr',
  },
  {
    title: 'Student Scans QR Code',
    description:
      'Students open the app and scan the QR code using their device to mark their attendance.',
    visual: 'scan',
  },
  {
    title: 'Location Verification',
    description:
      "AttendFlow verifies the student's location to ensure they are within the permitted attendance area.",
    visual: 'location',
  },
  {
    title: 'Attendance Recorded',
    description:
      'Once verified, the attendance is recorded and the student receives a confirmation instantly.',
    visual: 'recorded',
  },
  {
    title: 'Dashboard & Analytics Updated',
    description:
      'Real-time attendance data is updated on dashboards and analytics for lecturers and students.',
    visual: 'analytics',
  },
];

export const WHY_IT_MATTERS_POINTS = [
  {
    icon: ShieldIcon,
    title: 'Accurate',
    description: 'Eliminates manual errors and ensures accurate attendance records.',
  },
  {
    icon: ClockIcon,
    title: 'Fast',
    description: 'Takes seconds to mark attendance, giving more time for teaching and learning.',
  },
  {
    icon: LockIcon,
    title: 'Secure',
    description: 'Location verification prevents proxy attendance and ensures integrity.',
  },
  {
    icon: BarChartIcon,
    title: 'Insightful',
    description: 'Powerful analytics help monitor attendance trends and performance.',
  },
];

// ---------------------------------------------------------------------------
// About page
// ---------------------------------------------------------------------------

export const INFO_TRIO_ITEMS = [
  {
    icon: TargetIcon,
    title: 'Our Mission',
    description:
      'To provide innovative and reliable attendance solutions that help universities improve accuracy, save time, and enhance overall student engagement.',
    highlight: false,
  },
  {
    icon: EyeIcon,
    title: 'Our Vision',
    description:
      'To become the leading attendance management platform, empowering institutions and students across the globe with smart, seamless, and secure solutions.',
    highlight: false,
  },
  {
    icon: LightbulbIcon,
    title: 'Our Story',
    description:
      'AttendFlow was born out of a simple idea — that attendance should be easy, accurate, and stress-free. We saw the challenges universities faced with manual and outdated systems, and set out to build a modern solution that uses QR codes and location verification to make attendance smarter for everyone.',
    highlight: true,
  },
];

export const CORE_VALUES = [
  {
    icon: ShieldIcon,
    title: 'Integrity',
    description: 'We build trust through transparency and accountability.',
  },
  {
    icon: LightbulbIcon,
    title: 'Innovation',
    description: 'We embrace new ideas and technology to create better solutions.',
  },
  {
    icon: UsersIcon,
    title: 'User-Centric',
    description: "We put our users' needs at the heart of everything we build.",
  },
  {
    icon: TrendUpIcon,
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do.',
  },
];

// ---------------------------------------------------------------------------
// Contact page
// ---------------------------------------------------------------------------

export const CONTACT_CARDS = [
  {
    icon: MailIcon,
    title: 'Email Us',
    lines: ['support@attendflow.app'],
    note: 'We usually respond within 24 hours.',
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    lines: ['+234 810 123 4567'],
    note: 'Mon – Fri, 9:00 AM – 5:00 PM (WAT)',
  },
  {
    icon: MapPinIcon,
    title: 'Our Office',
    lines: ['123 Tech Avenue, Lekki Phase 1', 'Lagos, Nigeria'],
    note: 'Visit us at our office (by appointment).',
  },
];

export const SOCIAL_LINKS = [
  { icon: LinkedinIcon, label: 'LinkedIn' },
  { icon: XSocialIcon, label: 'X' },
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: YoutubeIcon, label: 'YouTube' },
];

export const CONTACT_SUBJECTS = ['General inquiry', 'Technical support', 'Partnership', 'Feedback'];

// ---------------------------------------------------------------------------
// Dashboard preview mockup (landing hero + features hero)
// ---------------------------------------------------------------------------

export const DASHBOARD_SIDEBAR_ITEMS = [
  { label: 'Dashboard', icon: HomeIcon, active: true },
  { label: 'Attendance', icon: ClipboardCheckIcon },
  { label: 'Sessions', icon: LayersIcon },
  { label: 'Courses', icon: BookIcon },
  { label: 'Reports', icon: BarChartIcon },
  { label: 'Students', icon: UsersIcon },
  { label: 'Notifications', icon: BellIcon },
  { label: 'Settings', icon: SettingsIcon },
];

export const DASHBOARD_STATS = [
  {
    label: 'Total Students',
    value: '250',
    delta: '+12 this week',
    icon: UsersIcon,
    tone: 'blue',
  },
  {
    label: 'Present Today',
    value: '198',
    delta: '79.2%',
    icon: TrendUpIcon,
    tone: 'green',
  },
  {
    label: 'Absent Today',
    value: '52',
    delta: '20.8%',
    icon: UserMinusIcon,
    tone: 'amber',
  },
  {
    label: 'Attendance Rate',
    value: '85.4%',
    delta: '+5.6% this week',
    icon: PieChartIcon,
    tone: 'purple',
  },
];

export const DASHBOARD_SESSIONS = [
  {
    time: '09:00 AM',
    course: 'CSC 301 — Database Systems',
    meta: '200 Level · Computer Science',
    room: 'Room: LT 102',
    status: 'Active',
  },
  {
    time: '11:00 AM',
    course: 'MTH 203 — Linear Algebra',
    meta: '200 Level · Mathematics',
    room: 'Room: LT 105',
    status: 'Upcoming',
  },
];

export const FEATURES_HERO_SIDEBAR_ICONS = [HomeIcon, UsersIcon, CalendarIcon, BellIcon, SettingsIcon];

export const FEATURES_HERO_STATS = [
  { label: 'Total Students', value: '250', icon: UsersIcon, tone: 'blue' },
  { label: 'Present Today', value: '198', icon: TrendUpIcon, tone: 'green' },
  { label: 'Absent Today', value: '52', icon: UserMinusIcon, tone: 'amber' },
  { label: 'Attendance Rate', value: '85.4%', icon: TrendUpIcon, tone: 'purple' },
];

// ---------------------------------------------------------------------------
// Auth pages — Login / Signup
// ---------------------------------------------------------------------------

export const LOGIN_FEATURES = [
  { icon: QrGridIcon, title: 'QR Code Attendance', description: 'Scan, check in, get it done.' },
  { icon: MapPinIcon, title: 'Location Verification', description: 'Real location. Real attendance.' },
  { icon: BarChartIcon, title: 'Smart Analytics', description: 'Track progress. Make better decisions.' },
  { icon: BotIcon, title: 'AI Assistant', description: 'Get instant help, insights and support.' },
];

export const SIGNUP_TRUST_POINTS = [
  { icon: CheckIcon, title: 'Secure', description: 'Your data is safe and protected.' },
  { icon: BoltIcon, title: 'Fast', description: 'Quick and easy check-ins.' },
  { icon: ShieldIcon, title: 'Reliable', description: 'Accurate and hassle-free.' },
];

export const SIGNUP_ROLES = [
  {
    id: 'student',
    icon: GraduationCapIcon,
    tone: 'green',
    title: 'Student',
    description: 'Check in, view attendance history, track your progress and more.',
  },
  {
    id: 'lecturer',
    icon: UsersIcon,
    tone: 'purple',
    title: 'Lecturer',
    description: 'Create sessions, generate QR codes, monitor students and view reports.',
  },
  {
    id: 'admin',
    icon: SettingsIcon,
    tone: 'blue',
    title: 'Administrator',
    description: 'Manage users, courses, departments and system settings.',
  },
];

// ---------------------------------------------------------------------------
// Dashboard app — shared shell
// ---------------------------------------------------------------------------

export const STUDENT_PROFILE = {
  name: 'Muizat Bakri',
  firstName: 'Muizat',
  role: 'Student',
  email: 'muizat.bakri@student.attendflow.app',
  studentId: 'CSC/2023/0142',
  department: 'Computer Science',
  level: '200 Level',
  avatar: studentAvatar,
};

export const DASHBOARD_NAV = [
  { label: 'Dashboard', to: '/dashboard', icon: HomeIcon, end: true },
  { label: 'Scan QR Code', to: '/dashboard/scan', icon: ScanIcon },
  { label: 'My Classes', to: '/dashboard/classes', icon: BookIcon },
  { label: 'Attendance History', to: '/dashboard/attendance-history', icon: ClockIcon },
  { label: 'Reports', to: '/dashboard/reports', icon: FileExportIcon },
  { label: 'Analytics', to: '/dashboard/analytics', icon: BarChartIcon },
  { label: 'AI Assistant', to: '/dashboard/ai-assistant', icon: BotIcon },
];

export const DASHBOARD_NAV_FOOTER = [
  { label: 'Settings', to: '/dashboard/settings', icon: SettingsIcon },
  { label: 'Help & Support', to: '/dashboard/help', icon: HelpCircleIcon },
];

export const DASHBOARD_QUOTE = 'Small steps every day lead to big results.';

// ---------------------------------------------------------------------------
// Dashboard home
// ---------------------------------------------------------------------------

export const HOME_STATS = {
  overall: { percent: 85, sublabel: "You're doing great!", delta: '+5% from last month', deltaUp: true },
  attended: { value: 17, total: 20, delta: '+2 more than last week', deltaUp: true },
  missed: { value: 3, total: 20, delta: '−1 less than last week', deltaUp: false },
};

export const MY_COURSES = [
  {
    code: 'CS 302',
    name: 'Computer Networks',
    lecturer: 'Dr. Adebayo',
    icon: LaptopIcon,
    tone: 'green',
    percent: 92,
    attended: 5,
    total: 6,
    nextClass: { date: 'Wed, Sep 30, 2026', time: '10:00 AM – 11:00 AM', room: 'ICT Lecture Hall' },
  },
  {
    code: 'CS 206',
    name: 'Operating Systems',
    lecturer: 'Engr. Musa',
    icon: SettingsIcon,
    tone: 'blue',
    percent: 80,
    attended: 4,
    total: 5,
    nextClass: { date: 'Thu, Oct 1, 2026', time: '2:00 PM – 3:00 PM', room: 'ICT Lecture Hall' },
  },
  {
    code: 'CSC 309',
    name: 'Data Structures',
    lecturer: 'Prof. Okafor',
    icon: CodeIcon,
    tone: 'purple',
    percent: 75,
    attended: 3,
    total: 4,
    nextClass: { date: 'Fri, Oct 2, 2026', time: '9:00 AM – 10:00 AM', room: 'Block B, Room 204' },
  },
  {
    code: 'MTH 101',
    name: 'Mathematics for Computer Science',
    lecturer: 'Dr. Bello',
    icon: CalculatorIcon,
    tone: 'amber',
    percent: 100,
    attended: 6,
    total: 6,
    nextClass: { date: 'Mon, Oct 5, 2026', time: '1:00 PM – 3:00 PM', room: 'Block A, Room 101' },
  },
];

export const ATTENDANCE_OVERVIEW_WEEKLY = [
  { week: 'W1', value: 70 },
  { week: 'W2', value: 74 },
  { week: 'W3', value: 78 },
  { week: 'W4', value: 75 },
  { week: 'W5', value: 80 },
  { week: 'W6', value: 83 },
  { week: 'W7', value: 86 },
  { week: 'W8', value: 92 },
];

export const RECENT_ATTENDANCE = [
  { course: 'Computer Networks (CS 302)', icon: LaptopIcon, tone: 'green', date: 'Sep 28, 2026', time: '10:00 AM', status: 'Present' },
  { course: 'Operating Systems (CS 206)', icon: SettingsIcon, tone: 'blue', date: 'Sep 26, 2026', time: '2:00 PM', status: 'Present' },
  { course: 'Data Structures (CSC 309)', icon: CodeIcon, tone: 'purple', date: 'Sep 23, 2026', time: '10:00 AM', status: 'Absent' },
  { course: 'Mathematics (MTH 101)', icon: CalculatorIcon, tone: 'amber', date: 'Sep 21, 2026', time: '8:00 AM', status: 'Present' },
];

export const NOTIFICATIONS = [
  {
    icon: CheckCircleIcon,
    tone: 'green',
    title: 'Attendance Recorded',
    message: 'You were marked present for Computer Networks (CS 302).',
    time: '2h ago',
  },
  {
    icon: InfoIcon,
    tone: 'blue',
    title: 'New Announcement',
    message: 'The next exam schedule has been released. Check your portal for details.',
    time: '5h ago',
  },
  {
    icon: ClockIcon,
    tone: 'amber',
    title: 'Reminder',
    message: 'Your next class (Data Structures) is tomorrow at 10:00 AM.',
    time: '1d ago',
  },
  {
    icon: BotIcon,
    tone: 'purple',
    title: 'AI Assistant',
    message: 'Need help? Ask AttendFlow AI anything about your attendance.',
    time: '1d ago',
  },
];

export const UPCOMING_CLASSES = [
  { course: 'Computer Networks', code: 'CS 302', time: '10:00 AM – 11:00 AM', room: 'ICT Lecture Hall', day: 'WED', date: 'Sep 30', tone: 'green' },
  { course: 'Operating Systems', code: 'CS 206', time: '2:00 PM – 3:00 PM', room: 'ICT Lecture Hall', day: 'THU', date: 'Oct 1', tone: 'blue' },
  { course: 'Data Structures', code: 'CSC 309', time: '9:00 AM – 10:00 AM', room: 'Block B, Room 204', day: 'FRI', date: 'Oct 2', tone: 'purple' },
  { course: 'Mathematics', code: 'MTH 101', time: '1:00 PM – 3:00 PM', room: 'Block A, Room 101', day: 'MON', date: 'Oct 5', tone: 'amber' },
];

// ---------------------------------------------------------------------------
// Scan QR Code page
// ---------------------------------------------------------------------------

export const SCAN_QUICK_TIPS = [
  'Make sure you allow camera permission when prompted.',
  'Position the QR code clearly within the frame.',
  'Keep your location services turned on.',
  'Ensure you have a stable internet connection.',
];

export const SCAN_LOCATION = {
  city: 'Lagos, Nigeria',
  coords: '6.5244° N, 3.3792° E',
  distance: '12 m',
};

// ---------------------------------------------------------------------------
// Reports page
// ---------------------------------------------------------------------------

export const REPORTS_SUMMARY = {
  overallPercent: 86,
  present: 17,
  absent: 3,
  totalCourses: 4,
  delta: '+6% from last month',
};

export const COURSE_REPORTS = [
  { code: 'CS 302', title: 'Computer Networks', lecturer: 'Dr. Adebayo', tone: 'green', percent: 92, attended: 5, total: 6 },
  { code: 'CS 206', title: 'Operating Systems', lecturer: 'Engr. Musa', tone: 'blue', percent: 80, attended: 4, total: 5 },
  { code: 'CSC 309', title: 'Data Structures', lecturer: 'Prof. Okafor', tone: 'purple', percent: 75, attended: 3, total: 4 },
  { code: 'MTH 101', title: 'Mathematics', lecturer: 'Dr. Bello', tone: 'amber', percent: 100, attended: 6, total: 6 },
];

export const QUICK_REPORTS = [
  { icon: FileExportIcon, tone: 'blue', title: 'Full Attendance Report', description: 'Complete record of all your attendance.' },
  { icon: LaptopIcon, tone: 'purple', title: 'Course-wise Report', description: 'Attendance breakdown per course.' },
  { icon: CalendarIcon, tone: 'green', title: 'Monthly Report', description: 'Summary for selected month.' },
  { icon: GraduationCapIcon, tone: 'red', title: 'Semester Report', description: 'Complete semester attendance.' },
];

export const REPORTS_AI_PROMPTS = [
  "What's my attendance percentage?",
  'Which course am I doing worst in?',
  'Why was my attendance rejected?',
];

// ---------------------------------------------------------------------------
// Analytics page
// ---------------------------------------------------------------------------

export const ATTENDANCE_TREND = [
  { week: 'Aug 4', value: 75 },
  { week: 'Aug 11', value: 78 },
  { week: 'Aug 18', value: 82 },
  { week: 'Aug 25', value: 85 },
  { week: 'Sep 1', value: 88 },
  { week: 'Sep 8', value: 90 },
  { week: 'Sep 15', value: 88 },
  { week: 'Sep 22', value: 86 },
];

export const ATTENDANCE_BY_COURSE = [
  { code: 'CS 302', tone: 'green', percent: 92, attended: 5, missed: 1 },
  { code: 'CS 206', tone: 'blue', percent: 80, attended: 4, missed: 2 },
  { code: 'CSC 309', tone: 'purple', percent: 75, attended: 3, missed: 1 },
  { code: 'MTH 101', tone: 'amber', percent: 100, attended: 6, missed: 0 },
];

export const ATTENDANCE_BY_DAY = [
  { day: 'Mon', value: 88 },
  { day: 'Tue', value: 83 },
  { day: 'Wed', value: 90 },
  { day: 'Thu', value: 86 },
  { day: 'Fri', value: 85 },
];

export const KEY_INSIGHTS = [
  { icon: TrendUpIcon, tone: 'green', text: 'Your attendance rate increased by 6% compared to last month.' },
  { icon: StarIcon, tone: 'amber', text: 'You perform best in MTH 101 (100% attendance).' },
  { icon: AlertTriangleIcon, tone: 'red', text: 'Your lowest attendance is CSC 309 (75% attendance).' },
  { icon: CalendarIcon, tone: 'blue', text: 'You have 3 classes missed this month. Consider catching up!' },
];

export const QUICK_INSIGHTS = [
  { icon: TrendUpIcon, tone: 'green', text: 'Your attendance is 6% higher than last month.' },
  { icon: StarIcon, tone: 'amber', text: 'MTH 101 has the highest attendance rate (100%).' },
  { icon: AlertTriangleIcon, tone: 'red', text: 'CSC 309 needs attention (75% attendance).' },
  { icon: CalendarIcon, tone: 'blue', text: 'You have 3 missed classes this month.' },
  { icon: TargetIcon, tone: 'purple', text: 'Best attendance day: Thursday (86%).' },
];

export const ANALYTICS_AI_PROMPTS = [
  "What's my attendance percentage?",
  'Which course am I doing worst in?',
  'Why was my attendance rejected?',
  'Show me my attendance trend.',
];

// ---------------------------------------------------------------------------
// AI Assistant page
// ---------------------------------------------------------------------------

export const AI_ASSISTANT_PROMPTS = [
  "What's my attendance percentage?",
  'Which course am I doing worst in?',
  'How do I mark attendance for today?',
  'Show me my attendance trend.',
];

export const AI_ASSISTANT_WELCOME =
  "Hi Muizat! I'm AttendFlow AI. Ask me anything about your attendance, courses, or how to use the app.";

// ---------------------------------------------------------------------------
// Settings page
// ---------------------------------------------------------------------------

export const NOTIFICATION_PREFERENCES = [
  { id: 'session-reminders', label: 'Session reminders', description: 'Get notified before a class session starts.', enabled: true },
  { id: 'attendance-confirmations', label: 'Attendance confirmations', description: 'Get notified when your attendance is recorded.', enabled: true },
  { id: 'announcements', label: 'Announcements', description: 'Updates from your department and lecturers.', enabled: true },
  { id: 'ai-tips', label: 'AI Assistant tips', description: 'Occasional tips and insights from AttendFlow AI.', enabled: false },
];

// ---------------------------------------------------------------------------
// Help & Support page
// ---------------------------------------------------------------------------

export const FAQ_ITEMS = [
  {
    question: 'How does location verification work?',
    answer:
      "AttendFlow checks your device's GPS location against the classroom's registered coordinates. If you're within the permitted radius when you scan the QR code, your attendance is marked as verified.",
  },
  {
    question: 'What happens if I miss scanning during the session window?',
    answer:
      'Each QR code is only valid for the session\'s check-in window set by your lecturer. If you miss it, contact your lecturer directly — AttendFlow does not backdate attendance automatically.',
  },
  {
    question: 'Why was my attendance marked as rejected?',
    answer:
      'This usually means the location check failed (you were outside the allowed radius) or the QR code had already expired. Ask AttendFlow AI or your lecturer to confirm the reason.',
  },
  {
    question: 'Can I use AttendFlow without location services enabled?',
    answer:
      'No — location verification is required to prevent proxy attendance, so location services need to be turned on while scanning.',
  },
  {
    question: 'How do I download my attendance report?',
    answer:
      'Go to Reports from the sidebar, choose a date range, and select Download Report. You can export as PDF or CSV.',
  },
];

// ---------------------------------------------------------------------------
// Attendance History page
// ---------------------------------------------------------------------------

export const ATTENDANCE_HISTORY = [
  { course: 'Computer Networks', code: 'CS 302', icon: LaptopIcon, tone: 'green', date: 'Sep 28, 2026', time: '10:00 AM', room: 'ICT Lecture Hall', status: 'Present' },
  { course: 'Operating Systems', code: 'CS 206', icon: SettingsIcon, tone: 'blue', date: 'Sep 26, 2026', time: '2:00 PM', room: 'ICT Lecture Hall', status: 'Present' },
  { course: 'Data Structures', code: 'CSC 309', icon: CodeIcon, tone: 'purple', date: 'Sep 23, 2026', time: '10:00 AM', room: 'Block B, Room 204', status: 'Absent' },
  { course: 'Mathematics', code: 'MTH 101', icon: CalculatorIcon, tone: 'amber', date: 'Sep 21, 2026', time: '8:00 AM', room: 'Block A, Room 101', status: 'Present' },
  { course: 'Computer Networks', code: 'CS 302', icon: LaptopIcon, tone: 'green', date: 'Sep 21, 2026', time: '10:00 AM', room: 'ICT Lecture Hall', status: 'Present' },
  { course: 'Operating Systems', code: 'CS 206', icon: SettingsIcon, tone: 'blue', date: 'Sep 19, 2026', time: '2:00 PM', room: 'ICT Lecture Hall', status: 'Present' },
  { course: 'Data Structures', code: 'CSC 309', icon: CodeIcon, tone: 'purple', date: 'Sep 16, 2026', time: '10:00 AM', room: 'Block B, Room 204', status: 'Present' },
  { course: 'Mathematics', code: 'MTH 101', icon: CalculatorIcon, tone: 'amber', date: 'Sep 14, 2026', time: '8:00 AM', room: 'Block A, Room 101', status: 'Present' },
  { course: 'Computer Networks', code: 'CS 302', icon: LaptopIcon, tone: 'green', date: 'Sep 14, 2026', time: '10:00 AM', room: 'ICT Lecture Hall', status: 'Absent' },
  { course: 'Operating Systems', code: 'CS 206', icon: SettingsIcon, tone: 'blue', date: 'Sep 12, 2026', time: '2:00 PM', room: 'ICT Lecture Hall', status: 'Present' },
  { course: 'Data Structures', code: 'CSC 309', icon: CodeIcon, tone: 'purple', date: 'Sep 9, 2026', time: '10:00 AM', room: 'Block B, Room 204', status: 'Present' },
  { course: 'Mathematics', code: 'MTH 101', icon: CalculatorIcon, tone: 'amber', date: 'Sep 7, 2026', time: '8:00 AM', room: 'Block A, Room 101', status: 'Present' },
];
