import { PhoneOutlined } from '@ant-design/icons';
import { Button, Card, List, Modal, Row, Space, Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import styles from './index.module.scss';

const { Title } = Typography;

export const Advantages = () => {
  return (
    <Row
      style={{
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: '#4E565A',
      }}>
      <div className="container" style={{}}>
        <Row style={{ justifyContent: 'center' }}>
          <Title level={3} style={{ color: 'white' }}>
            Преимущества работы с нами
          </Title>
          <Paragraph style={{ textIndent: 10, color: 'white' }}>
            "Надежность и профессионализм". Мы стремимся обеспечить спокойствие и уверенность нашим клиентам в процессе
            работы над их проектами. Честность и открытость – основа нашей компании.
          </Paragraph>

          <Paragraph style={{ textIndent: 10, color: 'white' }}>
            "Стремление к совершенству". Мы не довольствуемся средним результатом, мы стремимся к лучшему и делаем все
            возможное, чтобы Вам понравилось наше предложение.
          </Paragraph>
          <Paragraph style={{ textIndent: 10, color: 'white' }}>
            "Гарантия качества". Мы гарантируем качество нашей работы и предоставляем бесплатное обслуживание на 1 год.
            Также у нас есть возможность постгарантийного обслуживания без временных ограничений.
          </Paragraph>
          <Paragraph style={{ textIndent: 10, color: 'white' }}>
            «Привилегии для постоянных клиентов». Система бонусов и скидок при повторном обращении или постоянном
            обслуживании.
          </Paragraph>
        </Row>
      </div>
    </Row>
  );
};
