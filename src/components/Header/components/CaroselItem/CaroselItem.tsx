import { motion } from 'framer-motion';
import { Button, Row, Typography } from 'antd';

import styles from './index.module.scss';
const { Title } = Typography;

export const CaroselItem = ({
  img,
  title,
  body,
  buttonText,
}: {
  img: string;
  title: string;
  body: string;
  buttonText?: string;
}) => {
  return (
    <div
      className={styles.CaruselItem}
      style={{
        backgroundImage: `url(${img})`,
      }}>
      <div className={styles.Text}>
        <motion.div
          className={'container'}
          initial={{
            opacity: 0.3,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0.3,
          }}
          transition={{ duration: 1.5 }}>
          <Title level={2} style={{ color: '#ffffff', paddingLeft: 10, paddingRight: 10 }}>
            {title}
          </Title>
          <motion.div
            initial={{
              height: 60,
            }}
            animate={{
              height: 0,
            }}
            transition={{ duration: 0.5 }}></motion.div>
          <Title
            level={4}
            style={{ color: '#ffffff', textTransform: 'inherit', fontWeight: 400, paddingLeft: 10, paddingRight: 10 }}>
            {body}
          </Title>
          {buttonText && (
            <Row style={{ marginLeft: 20, marginTop: 20 }}>
              <Button ghost size="large">
                {buttonText}
              </Button>
            </Row>
          )}
        </motion.div>
      </div>
    </div>
  );
};
