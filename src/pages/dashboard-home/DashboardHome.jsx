import { Link } from 'react-router';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import RingProgress from '../../components/ring-progress/RingProgress.jsx';
import ProgressBar from '../../components/progress-bar/ProgressBar.jsx';
import StatusPill from '../../components/status-pill/StatusPill.jsx';
import Reveal from '../../components/reveal/Reveal.jsx';
import {
  ArrowRightIcon,
  ScanIcon,
  BookIcon,
  ClockIcon,
  FileExportIcon,
  BotIcon,
  CalendarIcon,
  CloseIcon,
  TrendUpIcon,
  GraduationCapIcon,
  BellIcon,
} from '../../components/icons/Icons.jsx';
import {
  STUDENT_PROFILE,
  DASHBOARD_QUOTE,
  HOME_STATS,
  MY_COURSES,
  ATTENDANCE_OVERVIEW_WEEKLY,
  RECENT_ATTENDANCE,
  NOTIFICATIONS,
  UPCOMING_CLASSES,
} from '../../data/content.js';
import deskIllustration from '../../assets/images/illustration-desk-books.svg';
import styles from './DashboardHome.module.css';

const QUICK_ACTIONS = [
  { label: 'View My Classes', icon: BookIcon, to: '/dashboard/classes' },
  { label: 'Attendance History', icon: ClockIcon, to: '/dashboard/attendance-history' },
  { label: 'View Reports', icon: FileExportIcon, to: '/dashboard/reports' },
  { label: 'Open AI Assistant', icon: BotIcon, to: '/dashboard/ai-assistant' },
];

const DashboardHome = () => (
  <div className={styles.page}>
    <Reveal as="section" className={styles.banner}>
      <div className={styles.bannerText}>
        <p className={styles.bannerGreeting}>Good Morning,</p>
        <h1 className={styles.bannerName}>{STUDENT_PROFILE.firstName} 👋</h1>
        <p className={styles.bannerSub}>Keep showing up, you're doing great!</p>
        <p className={styles.bannerQuote}>&ldquo;{DASHBOARD_QUOTE}&rdquo;</p>
      </div>
      <div className={styles.bannerArt}>
        <img src={deskIllustration} alt="" width={220} height={170} />
        <div className={styles.bannerCard}>
          <GraduationCapIcon size={18} />
          <span>
            Your attendance
            <br />
            builds your future.
          </span>
        </div>
      </div>
    </Reveal>

    <Reveal as="div" className={styles.statGrid} delay={60}>
      <div className={styles.statCard}>
        <RingProgress percent={HOME_STATS.overall.percent} size={64} strokeWidth={7} />
        <div>
          <p className={styles.statLabel}>Overall Attendance</p>
          <p className={styles.statSub}>{HOME_STATS.overall.sublabel}</p>
          <p className={styles.statDelta}>
            <TrendUpIcon size={12} /> {HOME_STATS.overall.delta}
          </p>
        </div>
      </div>

      <div className={styles.statCard}>
        <span className={`${styles.statIconBox} ${styles.toneGreen}`}>
          <CalendarIcon size={22} />
        </span>
        <div>
          <p className={styles.statLabel}>Classes Attended</p>
          <p className={styles.statBig}>
            {HOME_STATS.attended.value} <span>/ {HOME_STATS.attended.total}</span>
          </p>
          <p className={styles.statDelta}>
            <TrendUpIcon size={12} /> {HOME_STATS.attended.delta}
          </p>
        </div>
      </div>

      <div className={styles.statCard}>
        <span className={`${styles.statIconBox} ${styles.toneRed}`}>
          <CloseIcon size={22} />
        </span>
        <div>
          <p className={styles.statLabel}>Classes Missed</p>
          <p className={styles.statBig}>
            {HOME_STATS.missed.value} <span>/ {HOME_STATS.missed.total}</span>
          </p>
          <p className={styles.statDeltaDown}>{HOME_STATS.missed.delta}</p>
        </div>
      </div>
    </Reveal>

    <div className={styles.grid}>
      <div className={styles.col}>
        <Reveal as="div" className={styles.card}>
          <div className={styles.cardHead}>
            <h2>My Courses</h2>
            <Link to="/dashboard/classes">
              View all <ArrowRightIcon size={13} />
            </Link>
          </div>
          <ul className={styles.courseList}>
            {MY_COURSES.map(({ code, name, icon: Icon, tone, percent, attended, total }) => (
              <li key={code}>
                <span className={`${styles.courseIcon} ${styles[`tone-${tone}`]}`}>
                  <Icon size={17} />
                </span>
                <div className={styles.courseInfo}>
                  <p className={styles.courseCode}>{code}</p>
                  <p className={styles.courseName}>{name}</p>
                </div>
                <div className={styles.coursePercentCol}>
                  <span className={styles.coursePercent}>{percent}%</span>
                  <span className={styles.courseCount}>
                    {attended} / {total} classes
                  </span>
                </div>
                <div className={styles.courseBar}>
                  <ProgressBar percent={percent} tone={tone} size="sm" />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div" className={styles.card} delay={80}>
          <div className={styles.cardHead}>
            <h2>Recent Attendance</h2>
            <Link to="/dashboard/attendance-history">
              View all <ArrowRightIcon size={13} />
            </Link>
          </div>
          <ul className={styles.recentList}>
            {RECENT_ATTENDANCE.map(({ course, icon: Icon, tone, date, time, status }) => (
              <li key={course}>
                <span className={`${styles.courseIcon} ${styles[`tone-${tone}`]}`}>
                  <Icon size={15} />
                </span>
                <div className={styles.recentInfo}>
                  <p>{course}</p>
                  <span>
                    {date} · {time}
                  </span>
                </div>
                <StatusPill status={status} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className={styles.col}>
        <Reveal as="div" className={styles.card} delay={40}>
          <div className={styles.cardHead}>
            <h2>Attendance Overview</h2>
            <span className={styles.selectPill}>This Semester</span>
          </div>
          <div className={styles.chartWrap}>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={ATTENDANCE_OVERVIEW_WEEKLY} margin={{ top: 8, right: 4, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="overviewFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#178A4C" stopOpacity={0.28} />
                    <stop offset="100%" stopColor="#178A4C" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#E4E7EC" />
                <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#667085' }} axisLine={false} tickLine={false} />
                <YAxis
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                  tick={{ fontSize: 11, fill: '#667085' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip formatter={(value) => [`${value}%`, 'Attendance']} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#178A4C"
                  strokeWidth={2.4}
                  fill="url(#overviewFill)"
                  dot={{ r: 3, fill: '#178A4C', strokeWidth: 0 }}
                  activeDot={{ r: 5 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Reveal>

        <Reveal as={Link} to="/dashboard/scan" className={styles.scanBanner} delay={100}>
          <span className={styles.scanIcon}>
            <ScanIcon size={26} />
          </span>
          <span className={styles.scanText}>
            <strong>Scan QR Code</strong>
            <span>Mark your attendance now</span>
          </span>
          <span className={styles.scanArrow}>
            <ArrowRightIcon size={18} />
          </span>
        </Reveal>

        <Reveal as="div" className={styles.actionsGrid} delay={120}>
          {QUICK_ACTIONS.map(({ label, icon: Icon, to }) => (
            <Link key={label} to={to} className={styles.actionButton}>
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </Reveal>
      </div>

      <div className={styles.col}>
        <Reveal as="div" className={styles.card} delay={60}>
          <div className={styles.cardHead}>
            <h2>
              <BellIcon size={16} /> Notifications
            </h2>
            <Link to="/dashboard">
              View all <ArrowRightIcon size={13} />
            </Link>
          </div>
          <ul className={styles.notifList}>
            {NOTIFICATIONS.map(({ icon: Icon, tone, title, message, time }) => (
              <li key={title}>
                <span className={`${styles.courseIcon} ${styles[`tone-${tone}`]}`}>
                  <Icon size={14} />
                </span>
                <div>
                  <div className={styles.notifTop}>
                    <p>{title}</p>
                    <time>{time}</time>
                  </div>
                  <span>{message}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div" className={styles.card} delay={100}>
          <div className={styles.cardHead}>
            <h2>
              <CalendarIcon size={16} /> Upcoming Classes
            </h2>
            <Link to="/dashboard/classes">
              View all <ArrowRightIcon size={13} />
            </Link>
          </div>
          <ul className={styles.upcomingList}>
            {UPCOMING_CLASSES.map(({ course, code, time, room, day, date, tone }) => (
              <li key={code}>
                <span className={`${styles.dot} ${styles[`tone-${tone}`]}`} />
                <div className={styles.upcomingInfo}>
                  <p>
                    {course} ({code})
                  </p>
                  <span>
                    {time} · {room}
                  </span>
                </div>
                <span className={styles.dateBadge}>
                  {day}
                  <br />
                  {date}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div" className={styles.consistencyCard} delay={140}>
          <p>
            Consistency
            <br />
            creates success.
          </p>
        </Reveal>
      </div>
    </div>
  </div>
);

export default DashboardHome;
