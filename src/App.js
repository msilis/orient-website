import './App.css';
import Menu from './Components/TopNavbar/menu';
import RepairBanner from './Components/RepairBanner/RepairBanner';
import WatchBanner from './Components/WatchBanner/WatchBanner';
import Boxes from './Components/Boxes/Boxes';
import Video from './Components/Video/Video';
import Linkbox from './Components/Linkbox/Linkbox';
import watchBannerImageOne from './Images/original--DyvuI7.png';
import watchBannerImage70 from './Images/original.png';
import SocialBanner from './Components/SocialBanner/SocialBanner';
import Sitemap from './Components/Sitemap/Sitemap';
import Footer from './Components/Footer/Footer';


//The main app component that gets rendered in index.js. Please note, that if you are looking at this in a browser,
//it is not responsive and will work on a 1920x1080 display.

function App() {

//Banner One text and props
  let bannerOneText = 'Orient Star Contemporary, New Skeleton'
  let bannerOneId = 'heading-orient-star'
  let bannerOneP = 'Its modern and stylish design includes sophisticated details, and the hand-wound skeleton movement symbolises the vastness of the universe.'
  let bannerOnePId = 'text-orient-star'
  let bannerOneButtonText = 'See details'
  let bannerOneButtonId = 'banner-one-info-button';

  //Banner Two text and props
  let bannerTwoButtonText = 'Archive';
  let bannerTwoButton = 'archive-button'


  return (
    <div className="App">
      <Menu />
      <RepairBanner />
      <WatchBanner 
        bannerImage={watchBannerImageOne} 
        bannerId={bannerOneId} 
        bannerText={bannerOneText}
        bannerPId={bannerOnePId}
        bannerPText={bannerOneP}
        buttonText={bannerOneButtonText}
        buttonId={bannerOneButtonId}
        />
      <Boxes />
      <Video />
      <Linkbox />
      <WatchBanner bannerImage={watchBannerImage70} buttonText={bannerTwoButtonText} buttonId={bannerTwoButton}/>
      <SocialBanner />
      <Sitemap />
      <Footer />
    </div>
  );
}

export default App;
