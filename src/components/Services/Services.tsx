import { PhoneOutlined } from '@ant-design/icons';
import { Button, Card, List, Modal, Row, Space, Typography } from 'antd';
import styles from './index.module.scss';
import { SERVICES } from './DB';
import { useState } from 'react';
import { ServicesModal } from './components/ServicesModal';

const { Title } = Typography;

export const Services = () => {
  return (
    <>
      <div className="container">
        <Row style={{ justifyContent: 'center', marginTop: 20 }}>
          <Title level={3} style={{}}>
            Направления деятельности
          </Title>
        </Row>

        <Row
          style={{
            width: '100%',
            gap: 20,
            justifyContent: 'center',
            marginTop: 10,
            marginBottom: 10,
          }}>
          {SERVICES &&
            SERVICES.map((item) => {
              const [isModalOpen, setIsModalOpen] = useState(false);

              const showModal = () => {
                setIsModalOpen(true);
              };

              const handleOk = () => {
                setIsModalOpen(false);
              };

              const handleCancel = () => {
                setIsModalOpen(false);
              };

              return (
                <>
                  <Card
                    hoverable
                    onClick={() => setIsModalOpen(true)}
                    size="small"
                    style={{ width: 280, overflow: 'hidden' }}
                    cover={
                      <img
                        style={{
                          width: '100%',
                          maxHeight: 180,
                          height: '100%',
                          display: 'block',
                          objectFit: 'contain',
                        }}
                        alt="service"
                        src={item.imageList[0]}
                      />
                    }>
                    <Typography.Text strong style={{}}>
                      {item.title}
                    </Typography.Text>
                    <ul style={{ paddingLeft: 10 }}>
                      {item.descriptionList.map((item) => (
                        <li className={styles.ListItem}>
                          <Space align="start">
                            <span>-</span>
                            <Typography.Text style={{ margin: 0, padding: 0, fontSize: 12 }}>{item}</Typography.Text>
                          </Space>
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Modal
                    open={isModalOpen}
                    destroyOnClose
                    onOk={handleOk}
                    okText="Полная информация"
                    onCancel={handleCancel}>
                    <ServicesModal images={item.imageList} matetials={item.matetials} name={item.title} />
                  </Modal>
                </>
              );
            })}
        </Row>
      </div>
    </>
  );
};
