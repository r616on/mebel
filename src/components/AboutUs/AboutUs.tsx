import { PhoneOutlined } from '@ant-design/icons';
import { Button, Card, List, Modal, Row, Space, Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import styles from './index.module.scss';

const { Title } = Typography;

export const AboutUs = () => {
  return (
    <Row
      style={{
        paddingTop: 30,
        paddingBottom: 30,
      }}>
      <div className="container" style={{}}>
        <Row style={{ justifyContent: 'center' }}>
          <Title level={3} style={{}}>
            О нас
          </Title>
          <Paragraph style={{ textIndent: 10 }}>
            Мы - команда экспертов, специализирующаяся на создании индивидуальной мебели для магазинов, ресторанов,
            гостиниц, кафе и городской среды.
          </Paragraph>

          <Paragraph style={{ textIndent: 10 }}>
            Мы создаем мебель, которая не только функциональна и эстетически привлекательна, но и уникальна. Используя
            различные материалы, такие как металл, дерево разных пород, ЛДСП, ЛМДФ, искусственный камень,стекло и т.д.,
            мы создаем комбинированную мебель, подчеркивающую индивидуальность Вашего проекта.
          </Paragraph>
          <Paragraph style={{ textIndent: 10 }}>
            У нас нет типовых решений - мы подходим к каждому проекту индивидуально. Мы вкладываем в нашу работу не
            только техническое мастерство, но и нашу душу. Наша цель – получить результат, превосходящий Ваши ожидания.
          </Paragraph>
          <Paragraph style={{ textIndent: 10 }}>
            Мы готовы воплотить проекты любой сложности, и наша команда всегда открыта новым вызовам. Если Вам нужна
            уникальная мебель для Вашего бизнеса или дома обращайтесь к нам. Мы поможем Вам воплотить Ваши идеи в
            реальность.
          </Paragraph>
        </Row>
      </div>
    </Row>
  );
};
