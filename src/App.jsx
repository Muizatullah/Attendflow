import { BrowserRouter, Routes, Route } from 'react-router';
import {
  Landing,
  FeaturesPage,
  HowItWorksPage,
  AboutPage,
  ContactPage,
  Login,
  Signup,
  DashboardLayout,
  DashboardHome,
  ScanQr,
  MyClasses,
  AttendanceHistory,
  Reports,
  Analytics,
  AiAssistant,
  Settings,
  HelpSupport,
  NotFound,
} from './pages';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="scan" element={<ScanQr />} />
        <Route path="classes" element={<MyClasses />} />
        <Route path="attendance-history" element={<AttendanceHistory />} />
        <Route path="reports" element={<Reports />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="ai-assistant" element={<AiAssistant />} />
        <Route path="settings" element={<Settings />} />
        <Route path="help" element={<HelpSupport />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
