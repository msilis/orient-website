import './App.css';
import Menu from './Components/TopNavbar/menu';
import RepairBanner from './Components/RepairBanner/RepairBanner';
import WatchBanner from './Components/WatchBanner/WatchBanner';
import BrandBox from './Components/BrandBox/BrandBox';
import Boxes from './Components/Boxes/Boxes';

function App() {
  return (
    <div className="App">
      <Menu />
      <RepairBanner />
      <WatchBanner />
      <Boxes />
    </div>
  );
}

export default App;
