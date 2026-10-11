import { Navbar, Hero, Features, HowItWorks, About, CtaBanner, Footer } from '../../components';

const Landing = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <About />
      <CtaBanner />
    </main>
    <Footer />
  </>
);

export default Landing;
