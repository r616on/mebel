import React from 'react';

export const Instagramm = () => {
  return (
    <section className="instagram">
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 text-center">
              <h2 className="h2 title">
                Follow us <i className="fa fa-instagram fa-2x"></i> Instagram{' '}
              </h2>
              <div className="text">
                <p>@InstaFurnitureFactory</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="gallery clearfix">
        <a className="item" href="#">
          <img src="assets/images/square-1.jpg" alt="Alternate Text" />
        </a>
        <a className="item" href="#">
          <img src="assets/images/square-2.jpg" alt="Alternate Text" />
        </a>
        <a className="item" href="#">
          <img src="assets/images/square-3.jpg" alt="Alternate Text" />
        </a>
        <a className="item" href="#">
          <img src="assets/images/square-4.jpg" alt="Alternate Text" />
        </a>
        <a className="item" href="#">
          <img src="assets/images/square-5.jpg" alt="Alternate Text" />
        </a>
        <a className="item" href="#">
          <img src="assets/images/square-6.jpg" alt="Alternate Text" />
        </a>
      </div>
    </section>
  );
};
