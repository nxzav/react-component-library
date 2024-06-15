import Header from './components/Header';
import Footer from './components/Footer';
import Badges from './components/Badges';
import Banners from './components/Banners';
import Cards from './components/Cards';
import Testimonials from './components/Testimonials';
import Tooltips from './components/Tooltips';
import Popups from './components/Popups';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1 className="title">React Component Library</h1>
          <Badges />
          <Banners />
          <Cards />
          <Testimonials />
          <Tooltips />
          <Popups />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
