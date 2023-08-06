import { Header } from '../components/Header/Header';
import Footer from '../components/Footer';
import { Services } from '../components/Services';
import { Partner } from '../components/Partner';
import { AboutUs } from '../components/AboutUs';
import { Advantages } from '../components/Advantages';

function Develop() {
  return (
    <div>
      {/* <div className="page-loader"></div> */}

      <div className="wrapper">
        <Header />
        <Services />
        <Partner />
        <AboutUs />
        <Advantages />
        <Footer />
      </div>
    </div>
  );
}

export default Develop;
