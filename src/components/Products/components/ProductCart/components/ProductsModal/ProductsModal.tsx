import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Button, Carousel, Image, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { IProduct } from '~/components/Products/interface';

import './styles.scss';
const { Text, Title } = Typography;

export const ProductsModal: React.FC<IProduct> = (props) => {
  return (
    <div className="product">
      <div className="popup-title">
        <div className="h1 title">{props.name}</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Carousel style={{ maxWidth: 300, width: '100%' }} autoplay>
          <Image width={300} src={props.img_1} />

          <Image width={300} src={props.img_2} />

          <Image width={300} src={props.img_3} />
        </Carousel>
      </div>

      <div className="popup-content">
        <div className="product-info-wrapper">
          <div className="row">
            <div className="col-sm-12">
              <div className="info-box">
                <Text strong>Производитель</Text>
                <Text>Мы</Text>
              </div>
              <div className="info-box">
                <Text strong>Материалы</Text>
                <Text>{props.matetials.join(' , ')}</Text>
              </div>
              <div
                className="info-box"
                style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                <Text strong>Доступно для заказа</Text>
                {props.avelible ? (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                      <CheckCircleOutlined style={{ color: '#54AF3A' }} /> Да
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                      <CloseCircleOutlined style={{ color: 'red' }} /> Нет
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="popup-table">
        <div className="popup-cell">
          <Space>
            <Title level={3} style={{ margin: 0 }}>
              {props.price}
            </Title>
            <Text delete style={{ fontSize: 20 }}>
              {props.oldPrice}
            </Text>
          </Space>
        </div>

        <Button type="link" style={{ padding: '4px 0' }}>
          <Space>
            <span className="icon icon-eye"></span>Посмотреть полную информацию
          </Space>
        </Button>
      </div>
    </div>
  );
};
