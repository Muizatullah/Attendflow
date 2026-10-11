// Single entry point for every component in the app.
// Usage: import { Navbar, Button, ... } from '../../components'

import Navbar from './navbar/Navbar.jsx';
import Hero from './hero/Hero.jsx';
import DashboardPreview from './dashboard-preview/DashboardPreview.jsx';
import Features from './features/Features.jsx';
import FeaturesHero from './features-hero/FeaturesHero.jsx';
import FeatureGrid from './feature-grid/FeatureGrid.jsx';
import AiAssistantBanner from './ai-assistant-banner/AiAssistantBanner.jsx';
import HowItWorks from './how-it-works/HowItWorks.jsx';
import PageHero from './page-hero/PageHero.jsx';
import ProcessSteps from './process-steps/ProcessSteps.jsx';
import WhyItMatters from './why-it-matters/WhyItMatters.jsx';
import AboutHero from './about-hero/AboutHero.jsx';
import InfoTrio from './info-trio/InfoTrio.jsx';
import ValuesSection from './values-section/ValuesSection.jsx';
import ContactHero from './contact-hero/ContactHero.jsx';
import ContactInfo from './contact-info/ContactInfo.jsx';
import ContactForm from './contact-form/ContactForm.jsx';
import About from './about/About.jsx';
import CtaBanner from './cta-banner/CtaBanner.jsx';
import Footer from './footer/Footer.jsx';
import AuthSplitLayout from './auth-split-layout/AuthSplitLayout.jsx';
import SocialAuthButtons from './social-auth-buttons/SocialAuthButtons.jsx';
import RoleSelector from './role-selector/RoleSelector.jsx';
import Button from './button/Button.jsx';
import QrCode from './qr-code/QrCode.jsx';
import Reveal from './reveal/Reveal.jsx';
import RingProgress from './ring-progress/RingProgress.jsx';
import ProgressBar from './progress-bar/ProgressBar.jsx';
import StatusPill from './status-pill/StatusPill.jsx';
import AiChatCard from './ai-chat-card/AiChatCard.jsx';
import DashboardSidebar from './dashboard-sidebar/DashboardSidebar.jsx';
import DashboardTopbar from './dashboard-topbar/DashboardTopbar.jsx';

export {
  Navbar,
  Hero,
  DashboardPreview,
  Features,
  FeaturesHero,
  FeatureGrid,
  AiAssistantBanner,
  HowItWorks,
  PageHero,
  ProcessSteps,
  WhyItMatters,
  AboutHero,
  InfoTrio,
  ValuesSection,
  ContactHero,
  ContactInfo,
  ContactForm,
  About,
  CtaBanner,
  Footer,
  AuthSplitLayout,
  SocialAuthButtons,
  RoleSelector,
  Button,
  QrCode,
  Reveal,
  RingProgress,
  ProgressBar,
  StatusPill,
  AiChatCard,
  DashboardSidebar,
  DashboardTopbar,
};

// Icons.jsx has many named exports (one per icon) instead of a single
// default, so it's re-exported with `export *` rather than imported above.
export * from './icons/Icons.jsx';
