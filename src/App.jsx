
import ConnectorApp from "./components/Connect/ConnectorApp";
import Eco from "./components/Eco/Eco";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Hero/Hero";
import Telegram from "./components/Hero/telegram";
import Navbar from "./components/Navbar/Navbar";
import Ping from "./components/Ping";
import Progress from "./components/Progress/Progress";
import SomniaClaimPortal from "./components/somia";
const App = () => {



  return (
    <>
     <Navbar/>
     <HeroSection/>
    <Telegram/>
<Progress/>
 <Eco/>
 <Ping/>
 <Footer/>
    </>
  );
};

export default App;
