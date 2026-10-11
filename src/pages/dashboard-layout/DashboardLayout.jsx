import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import DashboardSidebar from '../../components/dashboard-sidebar/DashboardSidebar.jsx';
import DashboardTopbar from '../../components/dashboard-topbar/DashboardTopbar.jsx';
import { BotIcon } from '../../components/icons/Icons.jsx';
import { DASHBOARD_NAV, DASHBOARD_NAV_FOOTER } from '../../data/content.js';
import styles from './DashboardLayout.module.css';

const ALL_NAV = [...DASHBOARD_NAV, ...DASHBOARD_NAV_FOOTER];

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  const currentTitle = ALL_NAV.find((item) =>
    item.end ? location.pathname === item.to : location.pathname.startsWith(item.to)
  )?.label;

  const onAiAssistant = location.pathname === '/dashboard/ai-assistant';

  return (
    <div className={styles.shell}>
      <div className={`${styles.sidebarWrap} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <DashboardSidebar onNavigate={() => setSidebarOpen(false)} />
      </div>

      {sidebarOpen && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close menu"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className={styles.main}>
        <DashboardTopbar onMenuClick={() => setSidebarOpen(true)} title={currentTitle} />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>

      {!onAiAssistant && (
        <Link to="/dashboard/ai-assistant" className={styles.floatingAi} aria-label="Ask AttendFlow AI">
          <span className={styles.floatingAiTooltip}>Ask AttendFlow AI</span>
          <BotIcon size={24} />
        </Link>
      )}
    </div>
  );
};

export default DashboardLayout;
