import './App.css';
import Menu from './Components/TopNavbar/menu';
import RepairBanner from './Components/RepairBanner/RepairBanner';
import WatchBanner from './Components/WatchBanner/WatchBanner';

function App() {
  return (
    <div className="App">
      <Menu />
      <RepairBanner />
      <WatchBanner />
    </div>
  );
}

export default App;
