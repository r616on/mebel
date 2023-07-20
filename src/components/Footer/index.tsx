import Logo from '../Icon/Logo';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-showroom">
          <div className="row">
            <div className="col-sm-8">
              <h2>Приходите к нам</h2>
              <span>Тихорецкий тупик, 1/3, Калининград, 236011</span>
            </div>
            <div className="col-sm-4 text-center">
              <a href="tel:+79114916400">
                <div className="call-us h4">
                  <span className="icon icon-phone-handset"></span> 8 911 491-64-00
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <div
            className="row"
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <div
              style={{
                maxWidth: 150,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Logo />
            </div>

            <div className="links" style={{ width: '100%', fontSize: 25, display: 'flex', justifyContent: 'end' }}>
              <ul style={{ display: 'flex', gap: 20 }}>
                <li>
                  <a href="https://t.me/mebel_budu">
                    <i className="fa fa-telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/qr/BOIRC3MKIT3LC1">
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
