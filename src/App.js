import logo from './logo.svg';
import './App.css';
import Havellsheader from './components/header';
import Home from './modules/home';
import Invenstorrelations from './modules/invenstor-relations';
import Restoranekle from './modules/restoran-ekle';
import Contactus from './modules/contact-us';
import Workwithus from './modules/work-with-us';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      {/* <Home/> */}
      {/* <Invenstorrelations/> */}
      {/* <Restoranekle/>   */}
      {/* <Contactus/> */}
      <Workwithus/>
    </div>
  );
}

export default App;
