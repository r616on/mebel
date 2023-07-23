import { PhoneOutlined } from '@ant-design/icons';
import { Button, Carousel, Divider, Space, Typography } from 'antd';
import { Icon, ICON } from '../Icons';
import logo1 from './images/logo1.jpg';
import logo2 from './images/logo2.jpg';
import logo3 from './images/logo3.jpg';
import { Container } from './styles';
const { Title } = Typography;

export const CarouselRoute = () => {
  return (
    <Container>
      <Carousel style={{ width: '100%', height: '700px' }}>
        <div>
          <div className="item" style={{ backgroundImage: `url(${logo1})`, height: '700px' }}>
            <div
              className="box"
              style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                backgroundColor: 'rgb(0%, 0%, 0%, 0.4)',
              }}>
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Мебель для всех, любой сложности!
                </h2>
                {/* <Title className="title animated h1" level={2}>
                  Мебель для всех, любой сложности!
                </Title> */}
                <div className="animated" data-animation="fadeInUp">
                  Мы специализируемся на создании качественной мебели для магазинов, ресторанов, гостиниц, баров и кафе,
                  а также на создании и реализации проектов любой сложности.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="item" style={{ backgroundImage: `url(${logo2})`, height: '700px' }}>
            <div
              className="box"
              style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                backgroundColor: 'rgb(0%, 0%, 0%, 0.4)',
              }}>
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Натуральные и качественные материалы!
                </h2>
                <div className="animated" data-animation="fadeInUp">
                  Мы создаем комбинированную мебель из разных материалов, таких, как металл, дерево, ЛДСП, ЛМДФ,
                  искусственный камень, стекло и, в принципе, любой вид металла, который существует в природе.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="item" style={{ backgroundImage: `url(${logo3})`, height: '700px' }}>
            <div
              className="box"
              style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                backgroundColor: 'rgb(0%, 0%, 0%, 0.4)',
              }}>
              <div className="container">
                <Space wrap>
                  <h2 className="title animated h1" data-animation="fadeInDown">
                    Индивидуальный подход!
                  </h2>
                  <div className="desc animated" data-animation="fadeInUp">
                    Все наши изделия не шаблонны, а индивидуальны и не имеют аналога, потому что мы вкладываемся не
                    только телом, но и душой.
                  </div>
                  <div className="animated" data-animation="fadeInUp">
                    <a href="#" target="_blank" className="btn btn-clean" rel="noreferrer">
                      Закажите сейчас
                    </a>
                  </div>
                </Space>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </Container>
  );
};
