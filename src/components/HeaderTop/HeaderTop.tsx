import { PhoneOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Icon, ICON } from '../Icons';

export const HeaderTop = () => {
  return (
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
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'inherit' }}
                icon={<Icon name={ICON.Telegram} size={20} />}></Button>
            </li>
            <li>
              <Button
                type="primary"
                shape="circle"
                href="https://wa.me/qr/BOIRC3MKIT3LC1"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'inherit' }}
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
            <ul>
              <li>
                <a href="#">
                  Каталог продукции <span className="open-dropdown"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
