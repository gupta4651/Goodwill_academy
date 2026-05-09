import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Gallery />
        <Courses />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;