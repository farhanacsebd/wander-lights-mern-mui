import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <section class="contact-area" id="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-3">
                            <div class="contact-content text-center">
                                <a href="#"><img src="https://cdn.shopify.com/s/files/1/1138/0812/products/bo-sb120c_500x.jpg?v=1571942486" alt="logo" /></a>
                                <p>We provide best decorating lights in various types of features and prices.</p>
                                <div class="hr"></div>
                                <h6>Bangladesh</h6>
                                <h6>+088 45345435435<span>||</span>+088 4534543534</h6>
                                <div class="contact-social">
                                    <ul>
                                        <li><a class="hover-target" href=""><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a class="hover-target" href=""><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a class="hover-target" href=""><i class="fab fa-github"></i></a></li>

                                    </ul>
                                    <h6></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Footer;