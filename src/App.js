import './App.css';

function App() {
  return (
  <div>

    <div className="page-loader"></div>

    <div className="wrapper">




        <nav className="navbar-fixed">

            <div className="container">

       

                <div className="navigation navigation-top clearfix">
                    <ul>
                  

                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube"></i></a></li>

              

                        <li className="nav-settings">
                            <a href="javascript:void(0);" className="nav-settings-value"> USD $</a>
                            <ul className="nav-settings-list">
                                <li>USD $</li>
                                <li>EUR €</li>
                                <li>CHF Fr.</li>
                                <li>GBP £</li>
                            </ul>
                        </li>

                    

                        <li className="nav-settings">
                            <a href="javascript:void(0);" className="nav-settings-value"> ENG</a>
                            <ul className="nav-settings-list">
                                <li>ENG</li>
                                <li>GER</li>
                                <li>لعربية</li>
                                <li>עִבְרִית</li>
                            </ul>
                        </li>
                        <li><a href="javascript:void(0);" className="open-login"><i className="icon icon-user"></i></a></li>
                        <li><a href="javascript:void(0);" className="open-search"><i className="icon icon-magnifier"></i></a></li>
                        <li><a href="javascript:void(0);" className="open-cart"><i className="icon icon-cart"></i> <span>3</span></a></li>
                    </ul>
                </div> 

     

                <div className="navigation navigation-main">

     

                    <a href="index.html" className="logo"><img src="assets/images/logo.png" alt="" /></a>

         

                    <a href="#" className="open-menu"><i className="icon icon-menu"></i></a>

         

                    <div className="floating-menu">

           

                        <div className="close-menu-wrapper">
                            <span className="close-menu"><i className="icon icon-cross"></i></span>
                        </div>

                        <ul>
                            <li><a href="index.html">Home</a></li>
                            
                   

                            <li>
                                <a href="index.html">Pages <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                <div className="navbar-dropdown">
                                    <div className="navbar-box">

                             

                                        <div className="box-1">
                                            <div className="box">
                                                <div className="h2">Find your inspiration</div>
                                                <div className="clearfix">
                                                    <p>Homes that differ in terms of style, concept and architectural solutions have been furnished by Furniture Factory. These spaces tell of an international lifestyle that expresses modernity, research and a creative spirit.</p>
                                                    <a className="btn btn-clean btn-big" href="products-grid.html">Shop now</a>
                                                </div>
                                            </div>
                                        </div>

                                    

                                        <div className="box-2">
                                            <div className="box clearfix">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <ul>
                                                            <li className="label">Homepage</li>
                                                            <li><a href="index.html">Home - Slider</a></li>
                                                            <li><a href="index-2.html">Home - Tabsy gallery</a></li>
                                                            <li><a href="index-3.html">Home - Slider full screen</a></li>
                                                            <li><a href="index-4.html">Home - Info icons</a></li>
                                                            <li><a href="index-xmas.html">Home - Xmas</a></li>
                                                            <li><a href="index-rtl.html">Home - RTL <span className="label label-warning">New</span></a></li>
                                                            <li><a href="index-5.html">Onepage</a></li>
                                                            <li><a href="index-6.html">Onepage - Filters <span className="label label-warning">Isotope</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul>
                                                            <li className="label">Blog</li>
                                                            <li><a href="blog-grid.html">Blog grid</a></li>
                                                            <li><a href="blog-list.html">Blog list</a></li>
                                                            <li><a href="blog-grid-fullpage.html">Blog fullpage</a></li>
                                                            <li><a href="ideas.html">Blog ideas</a></li>
                                                            <li><a href="article.html">Blog article</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul>
                                                            <li className="label">Pages</li>
                                                            <li><a href="about.html">About us</a></li>
                                                            <li><a href="contact.html">Contact</a></li>
                                                            <li><a href="login.html">Login & Register <span className="label label-warning">New</span></a></li>
                                                        </ul>
                                                        <ul>
                                                            <li className="label">Extras</li>
                                                            <li><a href="shortcodes.html">Shortcodes</a></li>
                                                            <li><a href="email-receipt.html">Email template <span className="label label-warning">New</span></a></li>
                                                            <li><a href="404.html">Not found 404 <span className="label label-warning">New</span></a></li>
                                                        </ul>
                                                    </div>
                                                </div> 
                                            </div> 
                                        </div> 
                                    </div> 
                                </div>
                            </li>


                            <li>
                                <a href="#">Shop <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                <div className="navbar-dropdown navbar-dropdown-single">
                                    <div className="navbar-box">

                                

                                        <div className="box-2">
                                            <div className="box clearfix">
                                                <ul>
                                                    <li className="label">Shop</li>
                                                    <li><a href="products-grid.html">Products grid</a></li>
                                                    <li><a href="products-list.html">Products list</a></li>
                                                    <li><a href="category.html">Products intro</a></li>
                                                    <li><a href="products-topbar.html">Products topbar</a></li>
                                                    <li><a href="product.html">Product overview</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="label">Shop Isotope</li>
                                                    <li><a href="products-grid-isotope.html">Products filters <span className="label label-warning">New</span></a></li>
                                                    <li><a href="products-topbar-isotope.html">Products topbar <span className="label label-warning">New</span></a></li>
                                                </ul>
                                                <ul>
                                                    <li className="label">Checkout</li>
                                                    <li><a href="checkout-1.html">Checkout - Cart items</a></li>
                                                    <li><a href="checkout-2.html">Checkout - Delivery</a></li>
                                                    <li><a href="checkout-3.html">Checkout - Payment</a></li>
                                                    <li><a href="checkout-4.html">Checkout - Receipt</a></li>
                                                </ul>
                                            </div> 
                                        </div> 
                                    </div>
                                </div> 
                            </li>

              

                            <li>
                                <a href="category.html">Icons <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                <div className="navbar-dropdown">
                                    <div className="navbar-box">

                             

                                        <div className="box-1">
                                            <div className="image">
                                                <img src="assets/images/blog-2.jpg" alt="Lorem ipsum" />
                                            </div>
                                            <div className="box">
                                                <div className="h2">Best ideas</div>
                                                <div className="clearfix">
                                                    <p>Homes that differ in terms of style, concept and architectural solutions have been furnished by Furniture Factory. These spaces tell of an international lifestyle that expresses modernity, research and a creative spirit.</p>
                                                    <a className="btn btn-clean btn-big" href="ideas.html">Explore</a>
                                                </div>
                                            </div>
                                        </div> 

                

                                        <div className="box-2">
                                            <div className="clearfix categories">
                                                <div className="row">
                                                    
                                                                              

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-sofa"></i>
                                                                <figcaption>Sofa</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                                                   

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-armchair"></i>
                                                                <figcaption>Armchairs</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                                            

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-chair"></i>
                                                                <figcaption>Chairs</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                                          

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-dining-table"></i>
                                                                <figcaption>Dining tables</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                                                 

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-media-cabinet"></i>
                                                                <figcaption>Media storage</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                                            

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-table"></i>
                                                                <figcaption>Tables</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                                            

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-bookcase"></i>
                                                                <figcaption>Bookcase</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                                               

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-bedroom"></i>
                                                                <figcaption>Bedroom</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                                               

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-nightstand"></i>
                                                                <figcaption>Nightstand</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                                                               

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-children-room"></i>
                                                                <figcaption>Children room</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                                           

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-kitchen"></i>
                                                                <figcaption>Kitchen</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                                              

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-bathroom"></i>
                                                                <figcaption>Bathroom</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                                           

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-wardrobe"></i>
                                                                <figcaption>Wardrobe</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                                            

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-shoe-cabinet"></i>
                                                                <figcaption>Shoe cabinet</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                                            

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-office"></i>
                                                                <figcaption>Office</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                                                

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-bar-set"></i>
                                                                <figcaption>Bar sets</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                                                               

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-lightning"></i>
                                                                <figcaption>Lightning</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                    
                                                                                      

                                                    <div className="col-sm-3 col-xs-6">
                                                        <a href="javascript:void(0);">
                                                            <figure>
                                                                <i className="f-icon f-icon-carpet"></i>
                                                                <figcaption>Carpet</figcaption>
                                                            </figure>
                                                        </a>
                                                    </div>
                                                </div> 
                                            </div> 
                                        </div> 
                                    </div> 
                                </div>
                            </li>
                   

                            <li>
                                <a href="#">Megamenu <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
                                <div className="navbar-dropdown">
                                    <div className="navbar-box">
                                        <div className="box-2">
                                            <div className="box clearfix">
                                                <div className="row">
                                                    <div className="clearfix">
                                                        <div className="col-md-3">
                                                            <ul>
                                                                <li className="label">Seating</li>
                                                                <li><a href="javascript:void(0);">Benches</a></li>
                                                                <li><a href="javascript:void(0);">Submenu <span className="label label-warning">New</span></a></li>
                                                                <li><a href="javascript:void(0);">Chaises</a></li>
                                                                <li><a href="javascript:void(0);">Recliners</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <ul>
                                                                <li className="label">Storage</li>
                                                                <li><a href="javascript:void(0);">Bockcases</a></li>
                                                                <li><a href="javascript:void(0);">Closets</a></li>
                                                                <li><a href="javascript:void(0);">Wardrobes</a></li>
                                                                <li><a href="javascript:void(0);">Dressers <span className="label label-success">Trending</span></a></li>
                                                                <li><a href="javascript:void(0);">Sideboards </a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <ul>
                                                                <li className="label">Tables</li>
                                                                <li><a href="javascript:void(0);">Consoles</a></li>
                                                                <li><a href="javascript:void(0);">Desks</a></li>
                                                                <li><a href="javascript:void(0);">Dining tables</a></li>
                                                                <li><a href="javascript:void(0);">Occasional tables</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <ul>
                                                                <li className="label">Chairs</li>
                                                                <li><a href="javascript:void(0);">Dining Chairs</a></li>
                                                                <li><a href="javascript:void(0);">Office Chairs</a></li>
                                                                <li><a href="javascript:void(0);">Lounge Chairs <span className="label label-warning">Offer</span></a></li>
                                                                <li><a href="javascript:void(0);">Stools</a></li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix">
                                                        <div className="col-md-3">
                                                            <ul>
                                                                <li className="label">Kitchen</li>
                                                                <li><a href="javascript:void(0);">Kitchen types</a></li>
                                                                <li><a href="javascript:void(0);">Kitchen elements <span className="label label-info">50%</span></a></li>
                                                                <li><a href="javascript:void(0);">Bars</a></li>
                                                                <li><a href="javascript:void(0);">Wall decoration</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <ul>
                                                                <li className="label">Accessories</li>
                                                                <li><a href="javascript:void(0);">Coat Racks</a></li>
                                                                <li><a href="javascript:void(0);">Lazy bags <span className="label label-success">Info</span></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <ul>
                                                                <li className="label">Beds</li>
                                                                <li><a href="javascript:void(0);">Beds</a></li>
                                                                <li><a href="javascript:void(0);">Sofabeds</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <ul>
                                                                <li className="label">Entertainment</li>
                                                                <li><a href="javascript:void(0);">Wall units <span className="label label-warning">Popular</span></a></li>
                                                                <li><a href="javascript:void(0);">Media sets</a></li>
                                                                <li><a href="javascript:void(0);">Decoration</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div> 
                                </div> 
                            </li>

                     
                            <li><a href="shortcodes.html">Shortcodes</a></li>
                        </ul>
                    </div> 
                </div> 

 

                <div className="search-wrapper">

     
                    <input className="form-control" placeholder="Search..." />
                    <button className="btn btn-main btn-search">Go!</button>

           
                    <div className="search-results">
                        <div className="search-result-items">
                            <div className="title h4">Products <a href="#" className="btn btn-clean-dark btn-xs">View all</a></div>
                            <ul>
                                <li><a href="#"><span className="id">42563</span> <span className="name">Green corner</span> <span className="category">Sofa</span></a></li>
                                <li><a href="#"><span className="id">42563</span> <span className="name">Laura</span> <span className="category">Armchairs</span></a></li>
                                <li><a href="#"><span className="id">42563</span> <span className="name">Nude</span> <span className="category">Dining tables</span></a></li>
                                <li><a href="#"><span className="id">42563</span> <span className="name">Aurora</span> <span className="category">Nightstands</span></a></li>
                                <li><a href="#"><span className="id">42563</span> <span className="name">Dining set</span> <span className="category">Kitchen</span></a></li>
                                <li><a href="#"><span className="id">42563</span> <span className="name">Seat chair</span> <span className="category">Bar sets</span></a></li>
                            </ul>
                        </div> 
                        <div className="search-result-items">
                            <div className="title h4">Blog <a href="#" className="btn btn-clean-dark btn-xs">View all</a></div>
                            <ul>
                                <li><a href="#"><span className="id">01 Jan</span> <span className="name">Creating the Perfect Gallery Wall </span> <span className="category">Interior ideas</span></a></li>
                                <li><a href="#"><span className="id">12 Jan</span> <span className="name">Making the Most Out of Your Kids Old Bedroom</span> <span className="category">Interior ideas</span></a></li>
                                <li><a href="#"><span className="id">28 Dec</span> <span className="name">Have a look at our new projects!</span> <span className="category">Modern design</span></a></li>
                                <li><a href="#"><span className="id">31 Sep</span> <span className="name">Decorating When You're Starting Out or Starting Over</span> <span className="category">Best of 2017</span></a></li>
                                <li><a href="#"><span className="id">22 Sep</span> <span className="name">The 3 Tricks that Quickly Became Rules</span> <span className="category">Tips for you</span></a></li>
                            </ul>
                        </div> 
                    </div> 
                </div>


                <div className="login-wrapper">
                    <form>
                        <div className="h4">Sign in</div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <a href="#forgotpassword" className="open-popup">Forgot password?</a>
                            <a href="#createaccount" className="open-popup">Don't have an account?</a>
                        </div>
                        <button type="submit" className="btn btn-block btn-main">Submit</button>
                    </form>
                </div>



                <div className="cart-wrapper">
                    <div className="checkout">
                        <div className="clearfix">

              

                            <div className="row">

                                <div className="cart-block cart-block-item clearfix">
                                    <div className="image">
                                        <a href="product.html"><img src="assets/images/product-1.png" alt="" /></a>
                                    </div>
                                    <div className="title">
                                        <div><a href="product.html">Green corner</a></div>
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
                                        <a href="product.html"><img src="assets/images/product-2.png" alt="" /></a>
                                    </div>
                                    <div className="title">
                                        <div><a href="product.html">Green corner</a></div>
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
                                        <a href="product.html"><img src="assets/images/product-3.png" alt="" /></a>
                                    </div>
                                    <div className="title">
                                        <div><a href="product.html">Green corner</a></div>
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
                                        <a href="product.html"><img src="assets/images/product-4.png" alt="" /></a>
                                    </div>
                                    <div className="title">
                                        <div><a href="product.html">Green corner</a></div>
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
                                        <a href="products-grid.html" className="btn btn-clean-dark">Continue shopping</a>
                                    </div>
                                    <div className="col-xs-6 text-right">
                                        <a href="checkout-1.html" className="btn btn-main"><span className="icon icon-cart"></span> Checkout</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> 
                </div>
            </div>
        </nav>



        <section className="header-content">

            <div className="owl-slider">



                <div className="item" style={{backgroundImage:"url(assets/images/gallery-1.jpg)"}}>
                    <div className="box">
                        <div className="container">
                            <h2 className="title animated h1" data-animation="fadeInDown">Modern furniture theme</h2>
                            <div className="animated" data-animation="fadeInUp">
                                Modern & powerfull template. <br /> Clean design & reponsive
                                layout. Google fonts integration
                            </div>
                            <div className="animated" data-animation="fadeInUp">
                                <a href="https://themeforest.net/item/mobel-furniture-website-template/20382155" target="_blank" className="btn btn-main" rel="noreferrer" ><i className="icon icon-cart"></i> Buy this template</a>
                            </div>
                        </div>
                    </div>
                </div>

      

                <div className="item" style={{backgroundImage:"url(assets/images/gallery-2.jpg)"}}>
                    <div className="box">
                        <div className="container">
                            <h2 className="title animated h1" data-animation="fadeInDown">Mobile ready!</h2>
                            <div className="animated" data-animation="fadeInUp">Unlimited Choices. Unbeatable Prices. Free Shipping.</div>
                            <div className="animated" data-animation="fadeInUp">Furniture category icon fonts!</div>
                            <div className="animated" data-animation="fadeInUp">
                                <a href="category.html" className="btn btn-clean">Get insipred</a>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="item" style={{backgroundImage:"url(assets/images/gallery-3.jpg)"}}>
                    <div className="box">
                        <div className="container">
                            <h2 className="title animated h1" data-animation="fadeInDown">
                                Very Animate.css Friend.
                            </h2>
                            <div className="desc animated" data-animation="fadeInUp">
                                Combine with animate.css. Or just use your own!.
                            </div>
                            <div className="desc animated" data-animation="fadeInUp">
                                Bunch of typography effects.
                            </div>
                            <div className="animated" data-animation="fadeInUp">
                                <a href="https://themeforest.net/item/mobel-furniture-website-template/20382155" target="_blank" className="btn btn-clean" rel="noreferrer">Buy this template</a>
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
                                <span><i className="icon icon-gift"></i></span>
                                <span>
                                    <strong>Get your gift</strong>
                                    <small>Are you a new customer?</small>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <figure>
                            <figcaption>
                                <span><i className="icon icon-rocket"></i></span>
                                <span>
                                    <strong>Fast delivery</strong>
                                    <small>We're shipping all over the world</small>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <figure>
                            <figcaption>
                                <span><i className="icon icon-history"></i></span>
                                <span>
                                    <strong>Money-back guarantee</strong>
                                    <small>30 day money back gurantee</small>
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <figure>
                            <figcaption>
                                <span><i className="icon icon-store"></i></span>
                                <span>
                                    <strong>Find your store</strong>
                                    <small>Our store locations</small>
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
                                    <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
                                </span>
                                <span>
                                    <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
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
                                    <h2 className="title h4"><a href="product.html">Green corner</a></h2>
                                    <sub>$ 1499,-</sub>
                                    <sup>$ 1099,-</sup>
                                    <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                </div>
                            </div>
                        </article>
                    </div>

  

                    <div className="col-md-4 col-xs-6">
                        <article>
                            <div className="info">
                                <span className="add-favorite">
                                    <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
                                </span>
                                <span>
                                    <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
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
                                    <h2 className="title h4"><a href="product.html">Laura</a></h2>
                                    <sub>$ 3999,-</sub>
                                    <sup>$ 3499,-</sup>
                                    <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                </div>
                            </div>
                        </article>
                    </div>


                    <div className="col-md-4 col-xs-6">
                        <article>
                            <div className="info">
                                <span className="add-favorite">
                                    <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
                                </span>
                                <span>
                                    <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
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
                                    <h2 className="title h4"><a href="product.html">Nude</a></h2>
                                    <sup>$ 2999,-</sup>
                                    <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                </div>
                            </div>
                        </article>
                    </div>

 

                    <div className="col-md-4 col-xs-6">
                        <article>
                            <div className="info">
                                <span className="add-favorite">
                                    <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
                                </span>
                                <span>
                                    <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
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
                                    <h2 className="title h4"><a href="product.html">Aurora</a></h2>
                                    <sup>$ 299,-</sup>
                                    <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                </div>
                            </div>
                        </article>
                    </div>

   

                    <div className="col-md-4 col-xs-6">
                        <article>
                            <div className="info">
                                <span className="add-favorite added">
                                    <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
                                </span>
                                <span>
                                    <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
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
                                    <h2 className="title h4"><a href="product.html">Dining set</a></h2>
                                    <sub>$ 1999,-</sub>
                                    <sup>$ 1499,-</sup>
                                    <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                </div>
                            </div>
                        </article>
                    </div>



                    <div className="col-md-4 col-xs-6">
                        <article>
                            <div className="info">
                                <span className="add-favorite">
                                    <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
                                </span>
                                <span>
                                    <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
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
                                    <h2 className="title h4"><a href="product.html">Seat chair</a></h2>
                                    <sup>$ 896,-</sup>
                                    <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
                                </div>
                            </div>
                        </article>
                    </div>

                </div> 
    

                <div className="wrapper-more">
                    <a href="products-grid.html" className="btn btn-main">View store</a>
                </div>



                <div className="popup-main mfp-hide" id="productid1">

        

                    <div className="product">

           

                        <div className="popup-title">
                            <div className="h1 title">Laura <small>product category</small></div>
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
                                            <span><i className="fa fa-check-square-o"></i> in stock</span>
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
                                    <span className="h3">$ 1999,00 <small>$ 2999,00</small></span>
                                </div>
                            </div>
                            <div className="popup-cell">
                                <div className="popup-buttons">
                                    <a href="product.html"><span className="icon icon-eye"></span> <span className="hidden-xs">View more</span></a>
                                    <a href="javascript:void(0);"><span className="icon icon-cart"></span> <span className="hidden-xs">Buy</span></a>
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
                                    Whether you are changing your home, or moving into a new one, you will find a huge selection of quality living room furniture,
                                    bedroom furniture, dining room furniture and the best value at Furniture factory
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>



            <ul className="stretcher">



                <li className="stretcher-item" style={{backgroundImage:"url(assets/images/gallery-1.jpg)"}}>

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



                <li className="stretcher-item" style={{backgroundImage:"url(assets/images/gallery-2.jpg)"}}>

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

 

                <li className="stretcher-item" style={{backgroundImage:"url(assets/images/gallery-3.jpg)"}}>
          
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



                <li className="stretcher-item" style={{backgroundImage:"url(assets/images/gallery-4.jpg)"}}>
 
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
                                            You’ve finally reached this point in your life- you’ve bought your first home, moved
                                            into your very own apartment, moved out of the dorm room or you’re finally downsizing
                                            after all of your kids have left the nest.
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
                                            You’ve finally reached this point in your life- you’ve bought your first home, moved
                                            into your very own apartment, moved out of the dorm room or you’re finally downsizing
                                            after all of your kids have left the nest.
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
                                            You’ve finally reached this point in your life- you’ve bought your first home, moved
                                            into your very own apartment, moved out of the dorm room or you’re finally downsizing
                                            after all of your kids have left the nest.
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
                    <a href="ideas.html" className="btn btn-main">View all posts</a>
                </div>

            </div> 
        </section>


        <section className="banner" style={{backgroundImage:"url(assets/images/gallery-4.jpg)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 text-center">
                        <h2 className="title">Our story</h2>
                        <p>
                            We believe in creativity as one of the major forces of progress. With this idea, we traveled throughout Italy to find exceptional
                            artisans and bring their unique handcrafted objects to connoisseurs everywhere.
                        </p>
                        <p><a href="about.html" className="btn btn-clean">Read full story</a></p>
                    </div>
                </div>
            </div>
        </section>



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
                                <div className="image" style={{backgroundImage:"url(assets/images/blog-1.jpg)"}}>
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
                                <div className="image" style={{backgroundImage:"url(assets/images/blog-2.jpg)"}}>
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
                                <div className="image"  style={{backgroundImage:"url(assets/images/blog-8.jpg)"}}>
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
                    <a href="blog-grid.html" className="btn btn-main">View all posts</a>
                </div>

            </div> 
        </section>



        <section className="instagram">

      

            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-2 col-md-8 text-center">
                            <h2 className="h2 title">Follow us <i className="fa fa-instagram fa-2x"></i> Instagram </h2>
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



        <footer>
            <div className="container">

    
                <div className="footer-showroom">
                    <div className="row">
                        <div className="col-sm-8">
                            <h2>Visit our showroom</h2>
                            <p>200 12th Ave, New York, NY 10001, USA</p>
                            <p>Mon - Sat: 10 am - 6 pm &nbsp; &nbsp; | &nbsp; &nbsp; Sun: 12pm - 2 pm</p>
                        </div>
                        <div className="col-sm-4 text-center">
                            <a href="#" className="btn btn-clean"><span className="icon icon-map-marker"></span> Get directions</a>
                            <div className="call-us h4"><span className="icon icon-phone-handset"></span> 333.278.06622</div>
                        </div>
                    </div>
                </div>

       
                <div className="footer-links">
                    <div className="row">
                        <div className="col-sm-4 col-md-2">
                            <h5>Browse by</h5>
                            <ul>
                                <li><a href="#">Brand</a></li>
                                <li><a href="#">Product</a></li>
                                <li><a href="#">Category</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <h5>Recources</h5>
                            <ul>
                                <li><a href="#">Design</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Sales</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-2">
                            <h5>Our company</h5>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h5>Sign up for our newsletter</h5>
                            <p><i>Add your email address to sign up for our monthly emails and to receive promotional offers.</i></p>
                            <div className="form-group form-newsletter">
                                <input className="form-control" type="text" name="email" value="" placeholder="Email address" />
                                <input type="submit" className="btn btn-clean btn-sm" value="Subscribe" />
                            </div>
                        </div>
                    </div>
                </div>

            

                <div className="footer-social">
                    <div className="row">
                        <div className="col-sm-6">
                            <a href="https://themeforest.net/item/mobel-furniture-website-template/20382155" target="_blank" rel="noreferrer"><i className="fa fa-download"></i> Download Mobel</a> &nbsp; | <a href="#">Sitemap</a> &nbsp; | &nbsp; <a href="#">Privacy policy</a>
                        </div>
                        <div className="col-sm-6 links">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </div> 


</div>
  );
}

export default App;
