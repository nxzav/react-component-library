import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import Badge from './components/Badges/Badge';
import { badgeColors } from './components/colors';
import './App.css';

function App() {
  const badgeColorsArray = Object.keys(badgeColors);
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1 className="title">React Component Library</h1>
          <Card title="Badges">
            <h3>Squares</h3>
            <div className="badges">
              {badgeColorsArray.map((color) => (
                <Badge key={color} color={color} form="square">
                  Badge
                </Badge>
              ))}
            </div>
            <h3>Pills</h3>
            <div className="badges">
              {badgeColorsArray.map((color) => (
                <Badge key={color} color={color} form="pill">
                  Badge
                </Badge>
              ))}
            </div>
          </Card>
          <Card title="Banners"></Card>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
