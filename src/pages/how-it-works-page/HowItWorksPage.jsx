import { Navbar, PageHero, ProcessSteps, WhyItMatters, Footer } from '../../components';

const HowItWorksPage = () => (
  <>
    <Navbar />
    <main>
      <PageHero
        title={
          <>
            How <span style={{ color: 'var(--color-primary)' }}>AttendFlow</span> Works
          </>
        }
        subtitle={
          <>
            AttendFlow makes attendance taking simple, fast, and reliable.
            <br />
            Here's how the process works from start to finish.
          </>
        }
      />
      <ProcessSteps />
      <WhyItMatters />
    </main>
    <Footer />
  </>
);

export default HowItWorksPage;
