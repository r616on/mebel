import React from 'react';
import Logo from '../Icon/Logo';

const Navigate = () => {
  return (
    <nav className="navbar-fixed">
      <div className="container">
        <div className="navigation navigation-top clearfix">
          <ul>
            <li>
              <a href="tel:+79114916400">
                <i className="fa fa-phone"> 8 911 491-64-00</i>
              </a>
            </li>
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

        <div
          className="navigation navigation-main"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <div style={{}}>
            <Logo />
          </div>
          <div className="floating-menu">
            <ul>
              <li>
                <a href="#">
                  Каталог продукции <span className="open-dropdown"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="search-wrapper">
          <input className="form-control" placeholder="Search..." />
          <button className="btn btn-main btn-search">Go!</button>

          <div className="search-results">
            <div className="search-result-items">
              <div className="title h4">
                Products{' '}
                <a href="#" className="btn btn-clean-dark btn-xs">
                  View all
                </a>
              </div>
              <ul>
                <li>
                  <a href="#">
                    <span className="id">42563</span> <span className="name">Green corner</span>{' '}
                    <span className="category">Sofa</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">42563</span> <span className="name">Laura</span>{' '}
                    <span className="category">Armchairs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">42563</span> <span className="name">Nude</span>{' '}
                    <span className="category">Dining tables</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">42563</span> <span className="name">Aurora</span>{' '}
                    <span className="category">Nightstands</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">42563</span> <span className="name">Dining set</span>{' '}
                    <span className="category">Kitchen</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">42563</span> <span className="name">Seat chair</span>{' '}
                    <span className="category">Bar sets</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="search-result-items">
              <div className="title h4">
                Blog{' '}
                <a href="#" className="btn btn-clean-dark btn-xs">
                  View all
                </a>
              </div>
              <ul>
                <li>
                  <a href="#">
                    <span className="id">01 Jan</span> <span className="name">Creating the Perfect Gallery Wall </span>{' '}
                    <span className="category">Interior ideas</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">12 Jan</span>{' '}
                    <span className="name">Making the Most Out of Your Kids Old Bedroom</span>{' '}
                    <span className="category">Interior ideas</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">28 Dec</span> <span className="name">Have a look at our new projects!</span>{' '}
                    <span className="category">Modern design</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">31 Sep</span>{' '}
                    <span className="name">Decorating When You're Starting Out or Starting Over</span>{' '}
                    <span className="category">Best of 2017</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="id">22 Sep</span>{' '}
                    <span className="name">The 3 Tricks that Quickly Became Rules</span>{' '}
                    <span className="category">Tips for you</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="login-wrapper">
          <form>
            <div className="h4">Sign in</div>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
              <a href="#forgotpassword" className="open-popup">
                Forgot password?
              </a>
              <a href="#createaccount" className="open-popup">
                Don't have an account?
              </a>
            </div>
            <button type="submit" className="btn btn-block btn-main">
              Submit
            </button>
          </form>
        </div>

        <div className="cart-wrapper">
          <div className="checkout">
            <div className="clearfix">
              <div className="row">
                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <a href="product.html">
                      <img src="assets/images/product-1.png" alt="" />
                    </a>
                  </div>
                  <div className="title">
                    <div>
                      <a href="product.html">Green corner</a>
                    </div>
                    <small>Green corner</small>
                  </div>
                  <div className="quantity">
                    <input type="number" value="2" className="form-control form-quantity" />
                  </div>
                  <div className="price">
                    <span className="final">$ 1.998</span>
                    <span className="discount">$ 2.666</span>
                  </div>

                  <span className="icon icon-cross icon-delete"></span>
                </div>

                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <a href="product.html">
                      <img src="assets/images/product-2.png" alt="" />
                    </a>
                  </div>
                  <div className="title">
                    <div>
                      <a href="product.html">Green corner</a>
                    </div>
                    <small>Green corner</small>
                  </div>
                  <div className="quantity">
                    <input type="number" value="2" className="form-control form-quantity" />
                  </div>
                  <div className="price">
                    <span className="final">$ 1.998</span>
                    <span className="discount">$ 2.666</span>
                  </div>

                  <span className="icon icon-cross icon-delete"></span>
                </div>

                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <a href="product.html">
                      <img src="assets/images/product-3.png" alt="" />
                    </a>
                  </div>
                  <div className="title">
                    <div>
                      <a href="product.html">Green corner</a>
                    </div>
                    <small>Green corner</small>
                  </div>
                  <div className="quantity">
                    <input type="number" value="2" className="form-control form-quantity" />
                  </div>
                  <div className="price">
                    <span className="final">$ 1.998</span>
                    <span className="discount">$ 2.666</span>
                  </div>

                  <span className="icon icon-cross icon-delete"></span>
                </div>

                <div className="cart-block cart-block-item clearfix">
                  <div className="image">
                    <a href="product.html">
                      <img src="assets/images/product-4.png" alt="" />
                    </a>
                  </div>
                  <div className="title">
                    <div>
                      <a href="product.html">Green corner</a>
                    </div>
                    <small>Green corner</small>
                  </div>
                  <div className="quantity">
                    <input type="number" value="2" className="form-control form-quantity" />
                  </div>
                  <div className="price">
                    <span className="final">$ 1.998</span>
                    <span className="discount">$ 2.666</span>
                  </div>

                  <span className="icon icon-cross icon-delete"></span>
                </div>
              </div>

              <hr />

              <div className="clearfix">
                <div className="cart-block cart-block-footer clearfix">
                  <div>
                    <strong>Discount 15%</strong>
                  </div>
                  <div>
                    <span>$ 159,00</span>
                  </div>
                </div>

                <div className="cart-block cart-block-footer clearfix">
                  <div>
                    <strong>Shipping</strong>
                  </div>
                  <div>
                    <span>$ 30,00</span>
                  </div>
                </div>

                <div className="cart-block cart-block-footer clearfix">
                  <div>
                    <strong>VAT</strong>
                  </div>
                  <div>
                    <span>$ 59,00</span>
                  </div>
                </div>
              </div>

              <hr />

              <div className="clearfix">
                <div className="cart-block cart-block-footer clearfix">
                  <div>
                    <strong>Total</strong>
                  </div>
                  <div>
                    <div className="h4 title">$ 1259,00</div>
                  </div>
                </div>
              </div>

              <div className="cart-block-buttons clearfix">
                <div className="row">
                  <div className="col-xs-6">
                    <a href="products-grid.html" className="btn btn-clean-dark">
                      Continue shopping
                    </a>
                  </div>
                  <div className="col-xs-6 text-right">
                    <a href="checkout-1.html" className="btn btn-main">
                      <span className="icon icon-cart"></span> Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigate;
