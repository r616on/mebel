import { PhoneOutlined } from '@ant-design/icons';
import { Button, Card, List, Modal, Row, Space, Typography } from 'antd';
import styles from './index.module.scss';
import { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const { Title } = Typography;
const PARTNERS = [
  'SPAR',
  'Семья',
  'ВГТРК',
  'ОТТОКАR',
  'ВЕСТ',
  'Плюс',
  '«Тензор»',
  '«Народный магазин»',
  '1000+ частных клиентов',
];

export const Partner = () => {
  return (
    <Row style={{ backgroundColor: '#4E565A', paddingTop: 30, paddingBottom: 30 }}>
      <div className="container" style={{}}>
        <Row style={{ justifyContent: 'center' }}>
          <Title level={3} style={{ color: 'white' }}>
            Наши партнеры
          </Title>
        </Row>
      </div>
      <Row>
        <Carousel showArrows={true} infiniteLoop autoPlay showThumbs={false} showIndicators={false}>
          {PARTNERS &&
            PARTNERS.map((item) => (
              <div>
                <Title level={5} style={{ color: 'white' }}>
                  {item}
                </Title>
              </div>
            ))}
        </Carousel>
      </Row>
    </Row>
  );
};
