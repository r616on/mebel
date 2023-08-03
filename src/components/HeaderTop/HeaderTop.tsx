import { PhoneOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Icon, ICON } from '../Icons';
import './nav.scss';
import './header.scss';
import './jq.js';

export const HeaderTop = () => {
  return (
    <>
      <nav className="navbar-fixed">
        <div className="container">
          <div className="navigation navigation-top clearfix">
            <ul style={{ marginTop: 10 }}>
              <li>
                <Button type="link" style={{ color: 'white' }} icon={<PhoneOutlined />} href="tel:+79114916400">
                  8 911 491-64-00
                </Button>
              </li>
              <li>
                <Button
                  type="primary"
                  shape="circle"
                  href="https://t.me/mebel_budu"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'inherit',
                  }}
                  icon={<Icon name={ICON.Telegram} size={20} />}></Button>
              </li>
              <li>
                <Button
                  type="primary"
                  shape="circle"
                  href="https://wa.me/qr/BOIRC3MKIT3LC1"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'inherit',
                  }}
                  icon={<Icon name={ICON.WhatsApp} size={20} />}></Button>
              </li>
            </ul>
          </div>

          <div
            className="navigation navigation-main"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{}}>
              <Icon name={ICON.Logo} color={'rgb(236, 236, 236)'} />
            </div>
            <div className="floating-menu">
              {/* <ul>
                <li>
                  <a href="#">
                    Каталог продукции <span className="open-dropdown"></span>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </nav>

      <section className="header-content">
        <div className="owl-slider">
          <div className="item" style={{ backgroundImage: 'url(assets/images/logo1.jpg)' }}>
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Мебель для всех, любой сложности!
                </h2>
                <div className="animated" data-animation="fadeInUp">
                  Мы специализируемся на создании качественной мебели для магазинов, ресторанов, гостиниц, баров и кафе,
                  а также на создании и реализации проектов любой сложности.
                </div>
              </div>
            </div>
          </div>

          <div className="item" style={{ backgroundImage: 'url(assets/images/logo2.jpg)' }}>
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Натуральные и качественные материалы!
                </h2>
                <div className="animated" data-animation="fadeInUp">
                  Мы создаем комбинированную мебель из разных материалов, таких, как металл, дерево, ЛДСП, ЛМДФ,
                  искусственный камень, стекло и, в принципе, любой вид металла, который существует в природе.
                </div>
              </div>
            </div>
          </div>

          <div className="item" style={{ backgroundImage: 'url(assets/images/logo3.jpg)' }}>
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Индивидуальный подход!
                </h2>
                <div className="desc animated" data-animation="fadeInUp">
                  Все наши изделия не шаблонны, а индивидуальны и не имеют аналога, потому что мы вкладываемся не только
                  телом, но и душой.
                </div>
                <div className="animated" data-animation="fadeInUp">
                  <a href="#" target="_blank" className="btn btn-clean" rel="noreferrer">
                    Закажите сейчас
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
