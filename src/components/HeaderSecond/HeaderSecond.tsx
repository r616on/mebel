import { Col, Row, Typography } from 'antd';

import { Icon, ICON } from '../Icons';
import background from './image/backround.jpg';
const { Text } = Typography;

export const HeaderSecond = () => {
  return (
    <section className="main-header" style={{ backgroundImage: background }}>
      <header>
        <div className="container">
          <h1 className="h2 title">Sofa Laura</h1>
          <ol className="breadcrumb breadcrumb-inverted">
            <li>
              <a href="index.html">
                <span className="icon icon-home"></span>
              </a>
            </li>
            <li>
              <a href="category.html">Product Category</a>
            </li>
            <li>
              <a href="products-grid.html">Product Sub-category</a>
            </li>
            <li>
              <a className="active" href="product.html">
                Product overview
              </a>
            </li>
          </ol>
        </div>
      </header>
    </section>
  );
};
