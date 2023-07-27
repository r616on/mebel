import { Button, Carousel, ConfigProvider, Layout, Space } from 'antd';

import { ANT_THEME } from './theme/antd';
import ruRU from 'antd/locale/ru_RU';
import Footer from './components/Footer';
import Yourist from './components/Yurist';
import './App.css';
import './theme/theme.css';
import './theme/bootstrap.css';
import './theme/animate.css';
import './fonts/index.js';
import { HeaderTop } from './components/HeaderTop';
import { Products } from './components/Products';
import { HeaderSecond } from './components/HeaderSecond';

function App() {
  return (
    <ConfigProvider theme={ANT_THEME} locale={ruRU}>
      <div>
        <div className="page-loader"></div>

        <div className="wrapper">
          <HeaderTop />
          {/* <HeaderSecond /> */}
          <section className="info-icons info-icons-frontpage">
            <div className="container">
              <div className="row">
                <div className="col-xs-6 col-md-3">
                  <figure>
                    <figcaption>
                      <span>
                        <i className="icon icon-gift"></i>
                      </span>
                      <span>
                        <strong>У Вас есть проект?</strong>
                        <small> Мы его реализуем!</small>
                      </span>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-xs-6 col-md-3">
                  <figure>
                    <figcaption>
                      <span>
                        <i className="icon icon-rocket"></i>
                      </span>
                      <span>
                        <strong>Наш девиз</strong>
                        <small>Главное не мандражировать!</small>
                      </span>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-xs-6 col-md-3">
                  <figure>
                    <figcaption>
                      <span>
                        <i className="icon icon-history"></i>
                      </span>
                      <span>
                        <strong>Наша цель</strong>
                        <small>Делать так, чтобы нас хвалили!</small>
                      </span>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-xs-6 col-md-3">
                  <figure>
                    <figcaption>
                      <span>
                        <i className="icon icon-store"></i>
                      </span>
                      <span>
                        <strong>Наше видение</strong>
                        <small>Стремиться к совершенству!</small>
                      </span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </section>
          <Products />
          <section className="stretcher-wrapper">
            <header className="hidden">
              <div className="container">
                <div className="row">
                  <div className="col-md-offset-2 col-md-8 text-center">
                    <h1 className="h2 title">Popular categories</h1>
                    <div className="text">
                      <p>
                        Whether you are changing your home, or moving into a new one, you will find a huge selection of
                        quality living room furniture, bedroom furniture, dining room furniture and the best value at
                        Furniture factory
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <ul className="stretcher">
              <li className="stretcher-item" style={{ backgroundImage: 'url(assets/images/gallery-1.jpg)' }}>
                <div className="stretcher-logo">
                  <div className="text">
                    <span className="f-icon f-icon-bedroom"></span>
                    <span className="text-intro">Магазины</span>
                  </div>
                </div>

                <figure>
                  <h4>Modern furnishing projects</h4>
                  <figcaption>New furnishing ideas</figcaption>
                </figure>

                <a href="#">Anchor link</a>
              </li>

              <li className="stretcher-item" style={{ backgroundImage: 'url(assets/images/gallery-2.jpg)' }}>
                <div className="stretcher-logo">
                  <div className="text">
                    <span className="f-icon f-icon-sofa"></span>
                    <span className="text-intro">Кафе, рестораны</span>
                  </div>
                </div>

                <figure>
                  <h4>Furnishing and complements</h4>
                  <figcaption>Discover the design table collection</figcaption>
                </figure>

                <a href="#">Anchor link</a>
              </li>

              <li className="stretcher-item" style={{ backgroundImage: 'url(assets/images/gallery-3.jpg)' }}>
                <div className="stretcher-logo">
                  <div className="text">
                    <span className="f-icon f-icon-office"></span>
                    <span className="text-intro">Гостиницы</span>
                  </div>
                </div>

                <figure>
                  <h4>Which is Best for Your Home</h4>
                  <figcaption>Wardrobes vs Walk-In Closets</figcaption>
                </figure>

                <a href="#">Anchor link</a>
              </li>

              <li className="stretcher-item" style={{ backgroundImage: 'url(assets/images/gallery-4.jpg)' }}>
                <div className="stretcher-logo">
                  <div className="text">
                    <span className="f-icon f-icon-bathroom"></span>
                    <span className="text-intro">Офисы</span>
                  </div>
                </div>

                <figure>
                  <h4>Keeping Things Minimal</h4>
                  <figcaption>Creating Your Very Own Bathroom</figcaption>
                </figure>

                <a href="#">Anchor link</a>
              </li>

              <li className="stretcher-item" style={{ backgroundImage: 'url(assets/images/gallery-5.jpg)' }}>
                <div className="stretcher-logo">
                  <div className="text">
                    <span className="f-icon f-icon-bathroom"></span>
                    <span className="text-intro">Квартиры, дома</span>
                  </div>
                </div>

                <figure>
                  <h4>Keeping Things Minimal</h4>
                  <figcaption>Creating Your Very Own Bathroom</figcaption>
                </figure>

                <a href="#">Anchor link</a>
              </li>
            </ul>
          </section>

          <section className="blog blog-block">
            <div className="container">
              <header>
                <div className="row">
                  <div className="col-md-offset-2 col-md-8 text-center">
                    <h2 className="title">Interior ideas</h2>
                    <div className="text">
                      <p>Keeping things minimal</p>
                    </div>
                  </div>
                </div>
              </header>

              <div className="row">
                <div className="col-sm-4">
                  <article>
                    <a href="article.html">
                      <div className="image">
                        <img src="assets/images/project-1.jpg" alt="" />
                      </div>
                      <div className="entry entry-block">
                        <div className="date">28 Mart 2017</div>
                        <div className="title">
                          <h2 className="h3">Creating the Perfect Gallery Wall </h2>
                        </div>
                        <div className="description">
                          <p>
                            You’ve finally reached this point in your life- you’ve bought your first home, moved into
                            your very own apartment, moved out of the dorm room or you’re finally downsizing after all
                            of your kids have left the nest.
                          </p>
                        </div>
                      </div>
                      <div className="show-more">
                        <span className="btn btn-main btn-block">Read more</span>
                      </div>
                    </a>
                  </article>
                </div>

                <div className="col-sm-4">
                  <article>
                    <a href="article.html">
                      <div className="image">
                        <img src="assets/images/project-2.jpg" alt="" />
                      </div>
                      <div className="entry entry-block">
                        <div className="date">25 Mart 2017</div>
                        <div className="title">
                          <h2 className="h3">Making the Most Out of Your Kids Old Bedroom</h2>
                        </div>
                        <div className="description">
                          <p>
                            You’ve finally reached this point in your life- you’ve bought your first home, moved into
                            your very own apartment, moved out of the dorm room or you’re finally downsizing after all
                            of your kids have left the nest.
                          </p>
                        </div>
                      </div>
                      <div className="show-more">
                        <span className="btn btn-main btn-block">Read more</span>
                      </div>
                    </a>
                  </article>
                </div>

                <div className="col-sm-4">
                  <article>
                    <a href="article.html">
                      <div className="image">
                        <img src="assets/images/project-3.jpg" alt="" />
                      </div>
                      <div className="entry entry-block">
                        <div className="date">28 Mart 2017</div>
                        <div className="title">
                          <h2 className="h3">Have a look at our new projects!</h2>
                        </div>
                        <div className="description">
                          <p>
                            You’ve finally reached this point in your life- you’ve bought your first home, moved into
                            your very own apartment, moved out of the dorm room or you’re finally downsizing after all
                            of your kids have left the nest.
                          </p>
                        </div>
                      </div>
                      <div className="show-more">
                        <span className="btn btn-main btn-block">Read more</span>
                      </div>
                    </a>
                  </article>
                </div>
              </div>

              <div className="wrapper-more">
                <a href="ideas.html" className="btn btn-main">
                  View all posts
                </a>
              </div>
            </div>
          </section>
          <Yourist />
          <section className="blog">
            <div className="container">
              <header>
                <div className="row">
                  <div className="col-md-offset-2 col-md-8 text-center">
                    <h1 className="h2 title">Blog</h1>
                    <div className="text">
                      <p>Latest news from the blog</p>
                    </div>
                  </div>
                </div>
              </header>

              <div className="row">
                <div className="col-sm-4">
                  <article>
                    <a href="article.html">
                      <div className="image" style={{ backgroundImage: 'url(assets/images/blog-1.jpg)' }}>
                        <img src="assets/images/blog-1.jpg" alt="" />
                      </div>
                      <div className="entry entry-table">
                        <div className="date-wrapper">
                          <div className="date">
                            <span>MAR</span>
                            <strong>08</strong>
                            <span>2017</span>
                          </div>
                        </div>
                        <div className="title">
                          <h2 className="h5">The 3 Tricks that Quickly Became Rules</h2>
                        </div>
                      </div>
                      <div className="show-more">
                        <span className="btn btn-main btn-block">Read more</span>
                      </div>
                    </a>
                  </article>
                </div>

                <div className="col-sm-4">
                  <article>
                    <a href="article.html">
                      <div className="image" style={{ backgroundImage: 'url(assets/images/blog-2.jpg)' }}>
                        <img src="assets/images/blog-1.jpg" alt="" />
                      </div>
                      <div className="entry entry-table">
                        <div className="date-wrapper">
                          <div className="date">
                            <span>MAR</span>
                            <strong>03</strong>
                            <span>2017</span>
                          </div>
                        </div>
                        <div className="title">
                          <h2 className="h5">Decorating When You're Starting Out or Starting Over</h2>
                        </div>
                      </div>
                      <div className="show-more">
                        <span className="btn btn-main btn-block">Read more</span>
                      </div>
                    </a>
                  </article>
                </div>

                <div className="col-sm-4">
                  <article>
                    <a href="article.html">
                      <div className="image" style={{ backgroundImage: 'url(assets/images/blog-8.jpg)' }}>
                        <img src="assets/images/blog-8.jpg" alt="" />
                      </div>
                      <div className="entry entry-table">
                        <div className="date-wrapper">
                          <div className="date">
                            <span>MAR</span>
                            <strong>01</strong>
                            <span>2017</span>
                          </div>
                        </div>
                        <div className="title">
                          <h2 className="h5">What does your favorite dining chair say about you?</h2>
                        </div>
                      </div>
                      <div className="show-more">
                        <span className="btn btn-main btn-block">Read more</span>
                      </div>
                    </a>
                  </article>
                </div>
              </div>

              <div className="wrapper-more">
                <a href="blog-grid.html" className="btn btn-main">
                  View all posts
                </a>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
