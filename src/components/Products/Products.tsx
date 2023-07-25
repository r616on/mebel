import { PhoneOutlined } from '@ant-design/icons';
import { Button, List } from 'antd';
import { PRODUCTS } from '../../DB';

import { Icon, ICON } from '../Icons';
import { ProductCart } from './components/ProductCart';

export const Products = () => {
  return (
    <>
      <section className="products">
        <div className="container">
          <header>
            <div className="row">
              <div className="col-md-offset-2 col-md-8 text-center">
                <h2 className="title">Популярные модели</h2>
                <div className="text">
                  <p>Ознакомьтесь с нашими последними моделями</p>
                </div>
              </div>
            </div>
          </header>

          <div className="row">
            {PRODUCTS.map((item) => {
              return <ProductCart key={item.id} {...item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};
