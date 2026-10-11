import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import RingProgress from '../../components/ring-progress/RingProgress.jsx';
import ProgressBar from '../../components/progress-bar/ProgressBar.jsx';
import Reveal from '../../components/reveal/Reveal.jsx';
import {
  BookIcon,
  SearchIcon,
  FilterIcon,
  CalendarIcon,
  MapPinIcon,
  ChevronRightIcon,
  UsersIcon,
  ClipboardCheckIcon,
} from '../../components/icons/Icons.jsx';
import { MY_COURSES, UPCOMING_CLASSES, HOME_STATS } from '../../data/content.js';
import styles from './MyClasses.module.css';

const FILTERS = ['All Courses', 'In Progress', 'Upcoming'];

const MyClasses = () => {
  const [activeFilter, setActiveFilter] = useState('All Courses');
  const [query, setQuery] = useState('');

  const filteredCourses = useMemo(() => {
    let list = MY_COURSES;
    if (activeFilter === 'In Progress') list = list.filter((course) => course.percent < 100);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (course) => course.name.toLowerCase().includes(q) || course.code.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeFilter, query]);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.headerIcon}>
          <BookIcon size={22} />
        </span>
        <div className={styles.headerText}>
          <h1>My Classes</h1>
          <p>View your enrolled courses, attendance progress and upcoming classes.</p>
        </div>
        <div className={styles.quoteCard}>
          <BookIcon size={20} />
          <span>&ldquo;Small steps every day lead to big results.&rdquo;</span>
        </div>
      </div>

      <div className={styles.toolbar}>
        <label className={styles.search}>
          <SearchIcon size={16} />
          <input
            type="search"
            placeholder="Search your classes..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <div className={styles.filterRow}>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`${styles.filterButton} ${activeFilter === filter ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
          <button type="button" className={styles.filterIconButton}>
            <FilterIcon size={15} /> Filter
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.col}>
          <div className={styles.courseGrid}>
            {filteredCourses.map(({ code, name, lecturer, icon: Icon, tone, percent, attended, total, nextClass }, index) => (
              <Reveal as="article" key={code} className={styles.courseCard} delay={index * 60}>
                <div className={styles.courseTop}>
                  <span className={`${styles.courseIcon} ${styles[`tone-${tone}`]}`}>
                    <Icon size={20} />
                  </span>
                  <div className={styles.courseTitle}>
                    <p className={styles.courseCode}>{code}</p>
                    <p className={styles.courseName}>{name}</p>
                    <p className={styles.courseLecturer}>
                      <UsersIcon size={12} /> {lecturer}
                    </p>
                  </div>
                  <RingProgress percent={percent} size={54} strokeWidth={6} tone={tone} />
                </div>

                <ProgressBar percent={percent} tone={tone} />
                <p className={styles.courseCount}>
                  {attended} / {total} classes
                </p>

                <div className={styles.nextClass}>
                  <div>
                    <CalendarIcon size={14} />
                    <span>
                      Next Class
                      <br />
                      <strong>{nextClass.date}</strong>
                      <br />
                      {nextClass.time}
                    </span>
                  </div>
                  <div>
                    <MapPinIcon size={14} />
                    <span>{nextClass.room}</span>
                  </div>
                </div>

                <div className={styles.courseActions}>
                  <Link to="/dashboard/attendance-history" className={styles.secondaryAction}>
                    <ClipboardCheckIcon size={14} /> View Attendance
                  </Link>
                  <button type="button" className={styles.primaryAction}>
                    <CalendarIcon size={14} /> View Schedule
                    <ChevronRightIcon size={13} />
                  </button>
                </div>
              </Reveal>
            ))}

            {filteredCourses.length === 0 && (
              <p className={styles.emptyState}>No classes match your search or filter.</p>
            )}
          </div>
        </div>

        <div className={styles.col}>
          <Reveal as="div" className={styles.card}>
            <div className={styles.cardHead}>
              <h2>
                <CalendarIcon size={16} /> Upcoming Classes
              </h2>
              <Link to="/dashboard">
                View All <ChevronRightIcon size={14} />
              </Link>
            </div>
            <ul className={styles.upcomingList}>
              {UPCOMING_CLASSES.map(({ course, code, time, room, day, date, tone }) => (
                <li key={code}>
                  <span className={`${styles.dot} ${styles[`tone-${tone}`]}`} />
                  <div className={styles.upcomingInfo}>
                    <p>
                      {code} - {course}
                    </p>
                    <span>
                      {time}
                      <br />
                      {room}
                    </span>
                  </div>
                  <ChevronRightIcon size={15} className={styles.upcomingChevron} />
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" className={styles.card} delay={80}>
            <div className={styles.cardHead}>
              <h2>Course Summary</h2>
              <Link to="/dashboard/reports">
                View All <ChevronRightIcon size={14} />
              </Link>
            </div>
            <div className={styles.summaryBody}>
              <RingProgress percent={HOME_STATS.overall.percent} size={78} strokeWidth={8} sublabel="Overall" />
              <div className={styles.summaryStats}>
                <div>
                  <span className={styles.summaryIcon}>
                    <UsersIcon size={15} />
                  </span>
                  <div>
                    <strong>
                      {HOME_STATS.attended.value} / {HOME_STATS.attended.total}
                    </strong>
                    <p>Classes Attended</p>
                  </div>
                </div>
                <div>
                  <span className={`${styles.summaryIcon} ${styles.summaryIconRed}`}>
                    <ClipboardCheckIcon size={15} />
                  </span>
                  <div>
                    <strong>{HOME_STATS.missed.value}</strong>
                    <p>Classes Missed</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal as="div" className={styles.tipCard} delay={120}>
            <p className={styles.tipTitle}>Stay Consistent!</p>
            <p className={styles.tipText}>
              You're doing great! Keep attending your classes and building your future.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
