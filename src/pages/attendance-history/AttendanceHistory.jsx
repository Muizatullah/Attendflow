import { useMemo, useState } from 'react';
import StatusPill from '../../components/status-pill/StatusPill.jsx';
import Reveal from '../../components/reveal/Reveal.jsx';
import { ClockIcon, SearchIcon, DownloadIcon } from '../../components/icons/Icons.jsx';
import { ATTENDANCE_HISTORY, MY_COURSES } from '../../data/content.js';
import styles from './AttendanceHistory.module.css';

const STATUS_FILTERS = ['All', 'Present', 'Absent'];

const AttendanceHistory = () => {
  const [courseFilter, setCourseFilter] = useState('All Courses');
  const [statusFilter, setStatusFilter] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return ATTENDANCE_HISTORY.filter((record) => {
      const matchesCourse = courseFilter === 'All Courses' || record.code === courseFilter;
      const matchesStatus = statusFilter === 'All' || record.status === statusFilter;
      const matchesQuery =
        !query.trim() || record.course.toLowerCase().includes(query.trim().toLowerCase());
      return matchesCourse && matchesStatus && matchesQuery;
    });
  }, [courseFilter, statusFilter, query]);

  const presentCount = filtered.filter((r) => r.status === 'Present').length;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.headerIcon}>
          <ClockIcon size={22} />
        </span>
        <div>
          <h1>Attendance History</h1>
          <p>A complete record of every session you've checked into this semester.</p>
        </div>
        <button type="button" className={styles.downloadButton}>
          <DownloadIcon size={15} /> Export
        </button>
      </div>

      <div className={styles.toolbar}>
        <label className={styles.search}>
          <SearchIcon size={16} />
          <input
            type="search"
            placeholder="Search by course..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <select value={courseFilter} onChange={(event) => setCourseFilter(event.target.value)}>
          <option>All Courses</option>
          {MY_COURSES.map((course) => (
            <option key={course.code} value={course.code}>
              {course.code}
            </option>
          ))}
        </select>

        <div className={styles.statusRow}>
          {STATUS_FILTERS.map((status) => (
            <button
              key={status}
              type="button"
              className={`${styles.statusButton} ${statusFilter === status ? styles.statusActive : ''}`}
              onClick={() => setStatusFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <Reveal as="div" className={styles.card}>
        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((record, index) => (
                <tr key={`${record.code}-${record.date}-${index}`}>
                  <td>
                    <div className={styles.courseCell}>
                      <span className={`${styles.icon} ${styles[`tone-${record.tone}`]}`}>
                        <record.icon size={14} />
                      </span>
                      <div>
                        <p>{record.course}</p>
                        <span>{record.code}</span>
                      </div>
                    </div>
                  </td>
                  <td>{record.date}</td>
                  <td>{record.time}</td>
                  <td>{record.room}</td>
                  <td>
                    <StatusPill status={record.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && <p className={styles.emptyState}>No records match your filters.</p>}
        </div>

        <div className={styles.tableFooter}>
          <span>
            Showing {filtered.length} of {ATTENDANCE_HISTORY.length} records
          </span>
          <span>
            {presentCount} present · {filtered.length - presentCount} absent (in this view)
          </span>
        </div>
      </Reveal>
    </div>
  );
};

export default AttendanceHistory;
