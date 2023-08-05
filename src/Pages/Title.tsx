import { Empty, Row } from 'antd';
import { Header } from '../components/Header/Header';
import Footer from '../components/Footer';
import { HeaderTop } from '../components/HeaderTop';
import { Products } from '../components/Products';
import Yourist from '../components/Yurist';

function Title() {
  return (
    <div>
      <div className="page-loader"></div>

      <div className="wrapper">
        <Header />
        <Row style={{ justifyContent: 'center', alignItems: 'center', height: 300 }}>
          <Empty description="Извините. На сайте ведутся технические работы." />
        </Row>
        <Footer />
      </div>
    </div>
  );
}

export default Title;
