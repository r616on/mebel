import './App.css';
import Footer from './components/Footer';
import Navigate from './components/Navigate';
import Yourist from './components/Yurist';

function App() {
  return (
    <div>
      <div className="page-loader"></div>

      <div className="wrapper">
        <Navigate />

        <section className="header-content">
          <div className="owl-slider">
            <div className="item" style={{ backgroundImage: 'url(assets/images/gallery-1.jpg)' }}>
              <div className="box">
                <div className="container">
                  <h2 className="title animated h1" data-animation="fadeInDown">
                    Мебель для всех, любой сложности!
                  </h2>
                  <div className="animated" data-animation="fadeInUp">
                    Мы специализируемся на создании качественной мебели для магазинов, ресторанов, гостиниц, баров и
                    кафе, а также на создании и реализации проектов любой сложности.
                  </div>
                </div>
              </div>
            </div>

            <div className="item" style={{ backgroundImage: 'url(assets/images/gallery-2.jpg)' }}>
              <div className="box">
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

            <div className="item" style={{ backgroundImage: 'url(assets/images/gallery-3.jpg)' }}>
              <div className="box">
                <div className="container">
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
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section className="products">
          <div className="container">
            <header>
              <div className="row">
                <div className="col-md-offset-2 col-md-8 text-center">
                  <h2 className="title">Popular products</h2>
                  <div className="text">
                    <p>Check out our latest collections</p>
                  </div>
                </div>
              </div>
            </header>

            <div className="row">
              <div className="col-md-4 col-xs-6">
                <article>
                  <div className="info">
                    <span className="add-favorite added">
                      <a
                        href="javascript:void(0);"
                        data-title="Add to favorites"
                        data-title-added="Added to favorites list"
                      >
                        <i className="icon icon-heart"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#productid1" className="mfp-open" data-title="Quick wiew">
                        <i className="icon icon-eye"></i>
                      </a>
                    </span>
                  </div>
                  <div className="btn btn-add">
                    <i className="icon icon-cart"></i>
                  </div>
                  <div className="figure-grid">
                    <div className="image">
                      <a href="#productid1" className="mfp-open">
                        <img src="assets/images/product-1.png" alt="" width="360" />
                      </a>
                    </div>
                    <div className="text">
                      <h2 className="title h4">
                        <a href="product.html">Green corner</a>
                      </h2>
                      <sub>$ 1499,-</sub>
                      <sup>$ 1099,-</sup>
                      <span className="description clearfix">
                        Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo
                        labore diam sit et consetetur nulla
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              <div className="col-md-4 col-xs-6">
                <article>
                  <div className="info">
                    <span className="add-favorite">
                      <a
                        href="javascript:void(0);"
                        data-title="Add to favorites"
                        data-title-added="Added to favorites list"
                      >
                        <i className="icon icon-heart"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#productid1" className="mfp-open" data-title="Quick wiew">
                        <i className="icon icon-eye"></i>
                      </a>
                    </span>
                  </div>
                  <div className="btn btn-add">
                    <i className="icon icon-cart"></i>
                  </div>
                  <div className="figure-grid">
                    <div className="image">
                      <a href="#productid1" className="mfp-open">
                        <img src="assets/images/product-2.png" alt="" width="360" />
                      </a>
                    </div>
                    <div className="text">
                      <h2 className="title h4">
                        <a href="product.html">Laura</a>
                      </h2>
                      <sub>$ 3999,-</sub>
                      <sup>$ 3499,-</sup>
                      <span className="description clearfix">
                        Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo
                        labore diam sit et consetetur nulla
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              <div className="col-md-4 col-xs-6">
                <article>
                  <div className="info">
                    <span className="add-favorite">
                      <a
                        href="javascript:void(0);"
                        data-title="Add to favorites"
                        data-title-added="Added to favorites list"
                      >
                        <i className="icon icon-heart"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#productid1" className="mfp-open" data-title="Quick wiew">
                        <i className="icon icon-eye"></i>
                      </a>
                    </span>
                  </div>
                  <div className="btn btn-add">
                    <i className="icon icon-cart"></i>
                  </div>
                  <div className="figure-grid">
                    <span className="label label-warning">New</span>
                    <div className="image">
                      <a href="#productid1" className="mfp-open">
                        <img src="assets/images/product-3.png" alt="" width="360" />
                      </a>
                    </div>
                    <div className="text">
                      <h2 className="title h4">
                        <a href="product.html">Nude</a>
                      </h2>
                      <sup>$ 2999,-</sup>
                      <span className="description clearfix">
                        Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo
                        labore diam sit et consetetur nulla
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              <div className="col-md-4 col-xs-6">
                <article>
                  <div className="info">
                    <span className="add-favorite">
                      <a
                        href="javascript:void(0);"
                        data-title="Add to favorites"
                        data-title-added="Added to favorites list"
                      >
                        <i className="icon icon-heart"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#productid1" className="mfp-open" data-title="Quick wiew">
                        <i className="icon icon-eye"></i>
                      </a>
                    </span>
                  </div>
                  <div className="btn btn-add">
                    <i className="icon icon-cart"></i>
                  </div>
                  <div className="figure-grid">
                    <div className="image">
                      <a href="#productid1" className="mfp-open">
                        <img src="assets/images/product-4.png" alt="" width="360" />
                      </a>
                    </div>
                    <div className="text">
                      <h2 className="title h4">
                        <a href="product.html">Aurora</a>
                      </h2>
                      <sup>$ 299,-</sup>
                      <span className="description clearfix">
                        Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo
                        labore diam sit et consetetur nulla
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              <div className="col-md-4 col-xs-6">
                <article>
                  <div className="info">
                    <span className="add-favorite added">
                      <a
                        href="javascript:void(0);"
                        data-title="Add to favorites"
                        data-title-added="Added to favorites list"
                      >
                        <i className="icon icon-heart"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#productid1" className="mfp-open" data-title="Quick wiew">
                        <i className="icon icon-eye"></i>
                      </a>
                    </span>
                  </div>
                  <div className="btn btn-add">
                    <i className="icon icon-cart"></i>
                  </div>
                  <div className="figure-grid">
                    <span className="label label-info">-50%</span>
                    <div className="image">
                      <a href="#productid1" className="mfp-open">
                        <img src="assets/images/product-5.png" alt="" width="360" />
                      </a>
                    </div>
                    <div className="text">
                      <h2 className="title h4">
                        <a href="product.html">Dining set</a>
                      </h2>
                      <sub>$ 1999,-</sub>
                      <sup>$ 1499,-</sup>
                      <span className="description clearfix">
                        Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo
                        labore diam sit et consetetur nulla
                      </span>
                    </div>
                  </div>
                </article>
              </div>

              <div className="col-md-4 col-xs-6">
                <article>
                  <div className="info">
                    <span className="add-favorite">
                      <a
                        href="javascript:void(0);"
                        data-title="Add to favorites"
                        data-title-added="Added to favorites list"
                      >
                        <i className="icon icon-heart"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#productid1" className="mfp-open" data-title="Quick wiew">
                        <i className="icon icon-eye"></i>
                      </a>
                    </span>
                  </div>
                  <div className="btn btn-add">
                    <i className="icon icon-cart"></i>
                  </div>
                  <div className="figure-grid">
                    <div className="image">
                      <a href="#productid1" className="mfp-open">
                        <img src="assets/images/product-6.png" alt="" width="360" />
                      </a>
                    </div>
                    <div className="text">
                      <h2 className="title h4">
                        <a href="product.html">Seat chair</a>
                      </h2>
                      <sup>$ 896,-</sup>
                      <span className="description clearfix">
                        Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo
                        labore diam sit et consetetur nulla
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div className="wrapper-more">
              <a href="products-grid.html" className="btn btn-main">
                View store
              </a>
            </div>

            <div className="popup-main mfp-hide" id="productid1">
              <div className="product">
                <div className="popup-title">
                  <div className="h1 title">
                    Laura <small>product category</small>
                  </div>
                </div>

                <div className="owl-product-gallery">
                  <img src="assets/images/product-1.png" alt="" width="640" />
                  <img src="assets/images/product-2.png" alt="" width="640" />
                  <img src="assets/images/product-3.png" alt="" width="640" />
                  <img src="assets/images/product-4.png" alt="" width="640" />
                </div>

                <div className="popup-content">
                  <div className="product-info-wrapper">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="info-box">
                          <strong>Maifacturer</strong>
                          <span>Brand name</span>
                        </div>
                        <div className="info-box">
                          <strong>Materials</strong>
                          <span>Wood, Leather, Acrylic</span>
                        </div>
                        <div className="info-box">
                          <strong>Availability</strong>
                          <span>
                            <i className="fa fa-check-square-o"></i> in stock
                          </span>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="info-box">
                          <strong>Available Colors</strong>
                          <div className="product-colors clearfix">
                            <span className="color-btn color-btn-red"></span>
                            <span className="color-btn color-btn-blue checked"></span>
                            <span className="color-btn color-btn-green"></span>
                            <span className="color-btn color-btn-gray"></span>
                            <span className="color-btn color-btn-biege"></span>
                          </div>
                        </div>
                        <div className="info-box">
                          <strong>Choose size</strong>
                          <div className="product-colors clearfix">
                            <span className="color-btn color-btn-biege">S</span>
                            <span className="color-btn color-btn-biege checked">M</span>
                            <span className="color-btn color-btn-biege">XL</span>
                            <span className="color-btn color-btn-biege">XXL</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="popup-table">
                  <div className="popup-cell">
                    <div className="price">
                      <span className="h3">
                        $ 1999,00 <small>$ 2999,00</small>
                      </span>
                    </div>
                  </div>
                  <div className="popup-cell">
                    <div className="popup-buttons">
                      <a href="product.html">
                        <span className="icon icon-eye"></span> <span className="hidden-xs">View more</span>
                      </a>
                      <a href="javascript:void(0);">
                        <span className="icon icon-cart"></span> <span className="hidden-xs">Buy</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <span className="text-intro">Bedroom</span>
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
                  <span className="text-intro">Living room</span>
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
                  <span className="text-intro">Office</span>
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
                  <span className="text-intro">Bathroom</span>
                </div>
              </div>

              <figure>
                <h4>Keeping Things Minimal</h4>
                <figcaption>Creating Your Very Own Bathroom</figcaption>
              </figure>

              <a href="#">Anchor link</a>
            </li>

            <li className="stretcher-item more">
              <div className="more-icon">
                <span data-title-show="Show more" data-title-hide="+"></span>
              </div>
              <a href="#"></a>
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
                          You’ve finally reached this point in your life- you’ve bought your first home, moved into your
                          very own apartment, moved out of the dorm room or you’re finally downsizing after all of your
                          kids have left the nest.
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
                          You’ve finally reached this point in your life- you’ve bought your first home, moved into your
                          very own apartment, moved out of the dorm room or you’re finally downsizing after all of your
                          kids have left the nest.
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
                          You’ve finally reached this point in your life- you’ve bought your first home, moved into your
                          very own apartment, moved out of the dorm room or you’re finally downsizing after all of your
                          kids have left the nest.
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
  );
}

export default App;
