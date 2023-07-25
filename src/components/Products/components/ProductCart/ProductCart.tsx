import { useState } from 'react';
import { Modal } from 'antd';
import { ProductsModal } from './components/ProductsModal';
import './styles.scss';
import { IProduct } from '../../interface';

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
          <div className="text">
            <h2 className="title h4">
              <a href="product.html">{props.name}</a>
            </h2>
            <sub>{props.oldPrice}</sub>
            <sup>{props.price}</sup>
            <span className="description clearfix">{props.description}</span>
          </div>
        </div>
      </article>
      <Modal open={isModalOpen} onOk={handleOk} okText="Добавить в корзину" onCancel={handleCancel}>
        <ProductsModal {...props} />
      </Modal>
    </div>
  );
};
