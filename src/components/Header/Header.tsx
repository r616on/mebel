import { PhoneOutlined } from '@ant-design/icons';
import { Button, Card, Row, Typography } from 'antd';
import Slider from 'react-slick';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Icon, ICON } from '../Icons';
import styles from './index.module.scss';
import img1 from './img/logo1.jpg';
import img2 from './img/logo2.jpg';
import img3 from './img/logo3.jpg';

import { CaroselItem } from './components/CaroselItem';
import { useRef, useState } from 'react';
import { useIsVisible } from '../../hoock/useIsVisible';
import { motion } from 'framer-motion';
const { Title } = Typography;

export const Header = () => {
  const [caruselItem, setCaruselItem] = useState(0);
  const ref = useRef(null);
  const visible = useIsVisible(ref);

  return (
    <>
      <nav className={styles.Header}>
        <Carousel
          showArrows
          showIndicators
          showStatus={false}
          infiniteLoop
          autoPlay
          onChange={(e) => setCaruselItem(e)}
          stopOnHover={false}
          emulateTouch
          interval={7000}>
          <div>
            (
            <CaroselItem
              img={img1}
              title={'Мебель для всех, любой сложности!'}
              body={
                'Мы специализируемся на создании качественной мебели для магазинов, ресторанов, гостиниц, баров и кафе, а также на создании и реализации проектов любой сложности.'
              }
            />
            )
          </div>
          <div>
            <CaroselItem
              img={img2}
              title={'Натуральные и качественные материалы!'}
              body={
                'Мы создаем комбинированную мебель из разных материалов, таких, как металл, дерево, ЛДСП, ЛМДФ, искусственный камень, стекло и, в принципе, любой вид металла, который существует в природе.'
              }
            />
          </div>
          <div>
            <CaroselItem
              img={img3}
              title={'Индивидуальный подход!'}
              body={
                'Все наши изделия не шаблонны, а индивидуальны и не имеют аналога, потому что мы вкладываемся не только телом, но и душой.'
              }
              buttonText="Закажите сейчас"
            />
          </div>
        </Carousel>
        <Row className={styles.NavigatePanel} style={{ backgroundColor: visible ? '#4E565A' : 'rgba(0, 0, 0, 0.5)' }}>
          <div className="container">
            {!visible && (
              <motion.ul
                style={{
                  marginTop: 10,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  paddingBottom: 5,
                }}
                initial={{
                  marginTop: -50,
                }}
                animate={{
                  marginTop: 10,
                }}
                exit={{
                  marginTop: 50,
                }}
                transition={{ duration: 0.5 }}>
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
              </motion.ul>
            )}
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
        </Row>
      </nav>
      <div className="container">
        <Row
          style={{ alignItems: 'center', width: '100%', justifyContent: 'center', marginTop: -150, marginBottom: 60 }}>
          <Card size="small" style={{ width: 400 }}>
            <Row style={{ flexDirection: 'column', width: '100%', alignItems: 'center' }}>
              <Title level={4} style={{ marginBottom: 0 }}>
                МЕБЕЛЬ БУДУЩЕГО
              </Title>
              <Title level={5} style={{ textTransform: 'initial', marginTop: 10 }}>
                На шаг ближе к будущему!
              </Title>
            </Row>
          </Card>
        </Row>
      </div>
      <div style={{ marginTop: 10 }} ref={ref}></div>
    </>
  );
};
