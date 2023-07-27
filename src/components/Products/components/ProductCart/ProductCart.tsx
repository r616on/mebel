import { useState } from 'react';
import { Modal, Space, Typography } from 'antd';
import { ProductsModal } from './components/ProductsModal';
import './styles.scss';
import { IProduct } from '../../interface';
const { Text, Title } = Typography;

export const ProductCart: React.FC<IProduct> = (props) => {
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
    <div className="col-md-4 col-xs-6">
      <article onClick={() => setIsModalOpen(true)}>
        <div className="info">
          <span>
            <i className="icon icon-eye"></i>
          </span>
        </div>
        <div className="btn btn-add">
          <i className="icon icon-cart"></i>
        </div>
        <div className="figure-grid">
          <div className="image">
            <img src={props.img_1} alt="" width="360" />
          </div>
          <div className="text" style={{ backgroundColor: 'rgba(255, 250, 250, 0.5)' }}>
            <Title className="title h4" level={4}>
              {props.name}
            </Title>
            <Space>
              <Text strong>{props.oldPrice}</Text>
              <Text delete>{props.price}</Text>
            </Space>
            <span className="description clearfix">{props.description}</span>
          </div>
        </div>
      </article>
      <Modal open={isModalOpen} destroyOnClose onOk={handleOk} okText="Добавить в корзину" onCancel={handleCancel}>
        <ProductsModal {...props} />
      </Modal>
    </div>
  );
};
