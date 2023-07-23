import { Col, Row, Typography } from 'antd';

import { Icon, ICON } from '../Icons';

const { Text } = Typography;

export const HeaderBottom = () => {
  return (
    <div className="container">
      <Row justify={'space-between'}>
        <Col>
          <Icon name={ICON.Logo} color={'rgb(236, 236, 236)'} />
        </Col>
        <Col>
          <Text style={{ textTransform: 'uppercase', color: 'rgb(236, 236, 236)' }} strong>
            Каталог продукции
          </Text>
        </Col>
      </Row>
    </div>
  );
};
