import { Header } from '../components/Header/Header';
import Footer from '../components/Footer';
import { Services } from '../components/Services';

function Develop() {
  return (
    <div>
      {/* <div className="page-loader"></div> */}

      <div className="wrapper">
        <Header />
        <Services />
        <Footer />
      </div>
    </div>
  );
}

export default Develop;
