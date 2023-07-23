import { PhoneOutlined } from '@ant-design/icons';
import { Button, Divider, Space } from 'antd';
import { Icon, ICON } from '../Icons';

export const HeaderTop = () => {
  return (
    <div style={{ backgroundColor: '#4E565A' }}>
      <div className="container" style={{ marginTop: 10 }}>
        <div style={{ justifyContent: 'flex-end', display: 'flex', width: '100%', backgroundColor: '#4E565A' }}>
          <Space align="center">
            <Button type="link" style={{ color: 'white' }} icon={<PhoneOutlined />} href="tel:+79114916400">
              8 911 491-64-00
            </Button>
            <Button
              type="primary"
              shape="circle"
              href="https://t.me/mebel_budu"
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              icon={<Icon name={ICON.Telegram} size={20} />}></Button>
            <Button
              type="primary"
              shape="circle"
              href="https://wa.me/qr/BOIRC3MKIT3LC1"
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              icon={<Icon name={ICON.WhatsApp} size={20} />}></Button>
          </Space>
        </div>
        <Divider
          type="horizontal"
          style={{ borderBlockStart: '1px solid rgba(255, 255, 255, 0.2)', margin: '7px 0' }}
        />
      </div>
    </div>
  );
};
