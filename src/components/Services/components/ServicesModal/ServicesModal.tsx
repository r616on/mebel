import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Button, Image, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './styles.scss';
const { Text, Title } = Typography;

export const ServicesModal = ({
  images,
  matetials,
  name,
  avelible = true,
}: {
  images: string[];
  matetials: string[];
  name: string;
  avelible?: boolean;
}) => {
  return (
    <div className="product">
      <div className="popup-title">
        <div className="h3 title">{name}</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
        <Carousel showArrows={true} infiniteLoop autoPlay>
          <div>
            <img src={images[0]} />
          </div>
          <div>
            <img src={images[1]} />
          </div>
          <div>
            <img src={images[2]} />
          </div>
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
                <Text>{matetials.join(' , ')}</Text>
              </div>
              <div
                className="info-box"
                style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 15 }}>
                <Text strong>Доступно для заказа</Text>
                {avelible ? (
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
    </div>
  );
};
