import { Link } from 'react-router';
import {
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
import ProgressBar from '../../components/progress-bar/ProgressBar.jsx';
import AiChatCard from '../../components/ai-chat-card/AiChatCard.jsx';
import Reveal from '../../components/reveal/Reveal.jsx';
import {
  FileExportIcon,
  ArrowRightIcon,
  CalendarIcon,
  CheckCircleIcon,
  CloseIcon,
  BookIcon,
  DownloadIcon,
} from '../../components/icons/Icons.jsx';
import { REPORTS_SUMMARY, COURSE_REPORTS, QUICK_REPORTS, REPORTS_AI_PROMPTS } from '../../data/content.js';
import styles from './Reports.module.css';

const TONE_HEX = {
  green: '#178A4C',
  blue: '#2563EB',
  purple: '#7C3AED',
  amber: '#B45309',
  red: '#DC2626',
};

const donutData = [
  { name: 'Present', value: REPORTS_SUMMARY.present },
  { name: 'Absent', value: REPORTS_SUMMARY.absent },
];

const Reports = () => (
  <div className={styles.page}>
    <Link to="/dashboard" className={styles.backLink}>
      <ArrowRightIcon size={14} className={styles.backIcon} /> Back to Dashboard
    </Link>

    <div className={styles.header}>
      <span className={styles.headerIcon}>
        <FileExportIcon size={22} />
      </span>
      <div>
        <h1>Reports</h1>
        <p>A breakdown of your attendance performance this semester.</p>
      </div>
      <span className={styles.rangeChip}>
        <CalendarIcon size={14} /> This Semester
      </span>
      <button type="button" className={styles.downloadButton}>
        <DownloadIcon size={15} /> Download Report
      </button>
    </div>

    <Reveal as="div" className={styles.statGrid}>
      <div className={styles.statCard}>
        <RingProgress percent={REPORTS_SUMMARY.overallPercent} size={64} strokeWidth={7} />
        <div>
          <p className={styles.statLabel}>Overall Attendance</p>
          <p className={styles.statDelta}>{REPORTS_SUMMARY.delta}</p>
        </div>
      </div>
      <div className={styles.statCard}>
        <span className={`${styles.statIconBox} ${styles.toneGreen}`}>
          <CheckCircleIcon size={20} />
        </span>
        <div>
          <p className={styles.statLabel}>Present</p>
          <p className={styles.statBig}>{REPORTS_SUMMARY.present}</p>
        </div>
      </div>
      <div className={styles.statCard}>
        <span className={`${styles.statIconBox} ${styles.toneRed}`}>
          <CloseIcon size={20} />
        </span>
        <div>
          <p className={styles.statLabel}>Absent</p>
          <p className={styles.statBig}>{REPORTS_SUMMARY.absent}</p>
        </div>
      </div>
      <div className={styles.statCard}>
        <span className={`${styles.statIconBox} ${styles.toneBlue}`}>
          <BookIcon size={20} />
        </span>
        <div>
          <p className={styles.statLabel}>Courses</p>
          <p className={styles.statBig}>{REPORTS_SUMMARY.totalCourses}</p>
        </div>
      </div>
    </Reveal>

    <div className={styles.grid}>
      <div className={styles.col}>
        <Reveal as="div" className={styles.chartRow} delay={40}>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <h2>Attendance by Course</h2>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={COURSE_REPORTS} margin={{ top: 8, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="#E4E7EC" />
                <XAxis dataKey="code" tick={{ fontSize: 11, fill: '#667085' }} axisLine={false} tickLine={false} />
                <YAxis
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                  tick={{ fontSize: 11, fill: '#667085' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip formatter={(value) => [`${value}%`, 'Attendance']} />
                <Bar dataKey="percent" radius={[6, 6, 0, 0]}>
                  {COURSE_REPORTS.map((entry) => (
                    <Cell key={entry.code} fill={TONE_HEX[entry.tone]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHead}>
              <h2>Present vs Absent</h2>
            </div>
            <div className={styles.donutWrap}>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={donutData}
                    dataKey="value"
                    innerRadius={56}
                    outerRadius={78}
                    paddingAngle={2}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <Cell fill="#178A4C" />
                    <Cell fill="#E4E7EC" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className={styles.donutLabel}>
                <strong>{REPORTS_SUMMARY.overallPercent}%</strong>
                <span>Present</span>
              </div>
            </div>
            <div className={styles.legend}>
              <span>
                <i className={styles.legendDotGreen} /> Present ({REPORTS_SUMMARY.present})
              </span>
              <span>
                <i className={styles.legendDotGray} /> Absent ({REPORTS_SUMMARY.absent})
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal as="div" className={styles.card} delay={80}>
          <div className={styles.cardHead}>
            <h2>Course Reports</h2>
          </div>
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Lecturer</th>
                  <th>Attendance</th>
                  <th>Sessions</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {COURSE_REPORTS.map((course) => (
                  <tr key={course.code}>
                    <td>
                      <p className={styles.courseTitle}>{course.title}</p>
                      <span className={styles.courseCode}>{course.code}</span>
                    </td>
                    <td>{course.lecturer}</td>
                    <td>
                      <div className={styles.barCell}>
                        <ProgressBar percent={course.percent} tone={course.tone} size="sm" />
                        <span>{course.percent}%</span>
                      </div>
                    </td>
                    <td>
                      {course.attended} / {course.total}
                    </td>
                    <td className={styles.viewCell}>
                      <Link to="/dashboard/analytics">
                        View <ArrowRightIcon size={12} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>

      <div className={styles.side}>
        <Reveal as="div" className={styles.card} delay={60}>
          <div className={styles.cardHead}>
            <h2>Quick Reports</h2>
          </div>
          <ul className={styles.quickList}>
            {QUICK_REPORTS.map(({ icon: Icon, tone, title, description }) => (
              <li key={title}>
                <span className={`${styles.quickIcon} ${styles[`tone-${tone}`]}`}>
                  <Icon size={16} />
                </span>
                <div>
                  <p>{title}</p>
                  <span>{description}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <AiChatCard title="Ask AttendFlow AI" subtitle="About your reports" prompts={REPORTS_AI_PROMPTS} />
        </Reveal>
      </div>
    </div>
  </div>
);

export default Reports;
