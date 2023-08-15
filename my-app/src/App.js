import "./App.css"
import "./components/Navigation"
import Navigation from "./components/Navigation";
import Slider from "./components/Slider";
import Recharge from "./components/Recharge";
import RedBanner from './components/RedBanner';
import NewConnection from './components/NewConnection';
import Recommend from './components/Recommend';
import Footer from './components/Footer';
function App(){
    return (
      <div>
        <Navigation/>
        <Slider/>
        <Recharge/>
        <RedBanner/>
        <NewConnection/>
        <Recommend/>
        <Footer/>
      </div>
    )
}

export default App;