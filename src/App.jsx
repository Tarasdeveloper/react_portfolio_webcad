import Navbar from 'components/navbar/Navbar';
import Footer from 'components/Footer/Footer';
import Home from 'pages/Home';
import Projects from 'pages/Projects';
import ProjectPage from 'pages/ProjectPage';
import Contacts from 'pages/Contacts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from 'utils/scrollToTop';

const App = () => {
  return (
    <div className="App">
      <Router basename="/react_portfolio_webcad ">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/product/:id" element={<ProjectPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
