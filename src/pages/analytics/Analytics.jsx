import { Link } from 'react-router';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import RingProgress from '../../components/ring-progress/RingProgress.jsx';
import AiChatCard from '../../components/ai-chat-card/AiChatCard.jsx';
import Reveal from '../../components/reveal/Reveal.jsx';
import {
  BarChartIcon,
  ArrowRightIcon,
  TrendUpIcon,
  CalendarIcon,
} from '../../components/icons/Icons.jsx';
import {
  REPORTS_SUMMARY,
  ATTENDANCE_TREND,
  ATTENDANCE_BY_COURSE,
  ATTENDANCE_BY_DAY,
  KEY_INSIGHTS,
  QUICK_INSIGHTS,
  ANALYTICS_AI_PROMPTS,
} from '../../data/content.js';
import styles from './Analytics.module.css';

const TONE_HEX = {
  green: '#178A4C',
  blue: '#2563EB',
  purple: '#7C3AED',
  amber: '#B45309',
  red: '#DC2626',
};

const Analytics = () => (
  <div className={styles.page}>
    <Link to="/dashboard" className={styles.backLink}>
      <ArrowRightIcon size={14} className={styles.backIcon} /> Back to Dashboard
    </Link>

    <div className={styles.header}>
      <span className={styles.headerIcon}>
        <BarChartIcon size={22} />
      </span>
      <div>
        <h1>Analytics</h1>
        <p>Deeper insight into your attendance trends and patterns.</p>
      </div>
      <span className={styles.rangeChip}>
        <CalendarIcon size={14} /> This Semester
      </span>
    </div>

    <Reveal as="div" className={styles.statGrid}>
      <div className={styles.statCard}>
        <RingProgress percent={REPORTS_SUMMARY.overallPercent} size={64} strokeWidth={7} />
        <div>
          <p className={styles.statLabel}>Overall Attendance</p>
          <p className={styles.statDelta}>
            <TrendUpIcon size={12} /> {REPORTS_SUMMARY.delta}
          </p>
        </div>
      </div>
      {ATTENDANCE_BY_COURSE.slice(0, 3).map((course) => (
        <div className={styles.statCard} key={course.code}>
          <RingProgress percent={course.percent} size={54} strokeWidth={6} tone={course.tone} showLabel={false} />
          <div>
            <p className={styles.statLabel}>{course.code}</p>
            <p className={styles.statBig}>{course.percent}%</p>
          </div>
        </div>
      ))}
    </Reveal>

    <div className={styles.grid}>
      <div className={styles.col}>
        <Reveal as="div" className={styles.chartRow} delay={40}>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <h2>Attendance Trend</h2>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={ATTENDANCE_TREND} margin={{ top: 8, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="#E4E7EC" />
                <XAxis dataKey="week" tick={{ fontSize: 10, fill: '#667085' }} axisLine={false} tickLine={false} />
                <YAxis
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                  tick={{ fontSize: 11, fill: '#667085' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip formatter={(value) => [`${value}%`, 'Attendance']} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#178A4C"
                  strokeWidth={2.4}
                  dot={{ r: 3, fill: '#178A4C', strokeWidth: 0 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHead}>
              <h2>By Course</h2>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={ATTENDANCE_BY_COURSE}
                  dataKey="percent"
                  nameKey="code"
                  innerRadius={52}
                  outerRadius={76}
                  paddingAngle={3}
                >
                  {ATTENDANCE_BY_COURSE.map((entry) => (
                    <Cell key={entry.code} fill={TONE_HEX[entry.tone]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}%`, name]} />
              </PieChart>
            </ResponsiveContainer>
            <div className={styles.legend}>
              {ATTENDANCE_BY_COURSE.map((entry) => (
                <span key={entry.code}>
                  <i style={{ background: TONE_HEX[entry.tone] }} /> {entry.code}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal as="div" className={styles.chartRow} delay={80}>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <h2>Attended vs Missed</h2>
            </div>
            <ResponsiveContainer width="100%" height={210}>
              <BarChart data={ATTENDANCE_BY_COURSE} margin={{ top: 8, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="#E4E7EC" />
                <XAxis dataKey="code" tick={{ fontSize: 11, fill: '#667085' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#667085' }} axisLine={false} tickLine={false} allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="attended" name="Attended" fill="#178A4C" radius={[6, 6, 0, 0]} />
                <Bar dataKey="missed" name="Missed" fill="#DC2626" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHead}>
              <h2>By Day of Week</h2>
            </div>
            <ResponsiveContainer width="100%" height={210}>
              <BarChart data={ATTENDANCE_BY_DAY} margin={{ top: 8, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="#E4E7EC" />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#667085' }} axisLine={false} tickLine={false} />
                <YAxis
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                  tick={{ fontSize: 11, fill: '#667085' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip formatter={(value) => [`${value}%`, 'Attendance']} />
                <Bar dataKey="value" fill="#2563EB" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Reveal>

        <Reveal as="div" className={styles.card} delay={120}>
          <div className={styles.cardHead}>
            <h2>Key Insights</h2>
          </div>
          <div className={styles.insightGrid}>
            {KEY_INSIGHTS.map(({ icon: Icon, tone, text }, index) => (
              <div className={styles.insightCard} key={index}>
                <span className={`${styles.insightIcon} ${styles[`tone-${tone}`]}`}>
                  <Icon size={16} />
                </span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className={styles.side}>
        <Reveal as="div" className={styles.card} delay={60}>
          <div className={styles.cardHead}>
            <h2>Quick Insights</h2>
          </div>
          <ul className={styles.quickList}>
            {QUICK_INSIGHTS.map(({ icon: Icon, tone, text }, index) => (
              <li key={index}>
                <span className={`${styles.quickIcon} ${styles[`tone-${tone}`]}`}>
                  <Icon size={14} />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <AiChatCard title="Ask AttendFlow AI" subtitle="About your analytics" prompts={ANALYTICS_AI_PROMPTS} />
        </Reveal>
      </div>
    </div>
  </div>
);

export default Analytics;
