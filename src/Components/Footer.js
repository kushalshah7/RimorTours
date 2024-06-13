import React from 'react'

export const Footer = () => {
  return (
    <>
    <div>
    <footer className="footer2" id="footer2">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 footerP">
                        <h5>— ABOUT US</h5>
                        
                            <p>Donec quis tincidunt felis. Sed aliquet ac nulla a condimentum. Curabitur massa sapien.</p>
                            <div className="footer-social">
                                <a href="/" className="fa fa-facebook"></a>
                                <a href="/" className="fa fa-twitter"></a>
                                <a href="/" className="fa fa-dribbble"></a>
                                <a href="/" className="fa fa-linkedin"></a>
                                <a href="/" className="fa fa-instagram"></a>
                            </div>
                    </div>
                    <div className="col-md-3 footerP">
                        <h5>— OTHER LINKS</h5>
                        <ul>
                            <li>
                                <a href="/">
                                    <p>Register</p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <p>Forum</p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <p>Affiliate</p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <p>FAQ</p>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 footerP">
                        <h5>— RELATED LINKS</h5>
                        <ul>
                            <li>
                                <a href="/">
                                    <p>About Us</p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <p>Why Buy With Us?</p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <p>Our agent</p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <p>Contact Us</p>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 footerP">
                        <h5>— RESOURCES</h5>
                        <ul>
                            <li>
                                <a href="/">
                                    <p>Terms</p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <p>Licenses</p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <p>Become an affiliate</p>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <p>Help Center</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    
    </footer>

    <div className="footer-copy">
        <div className="container">
            &copy; 2019. Estica. All rights reserved.
        </div>
    </div>

    <div className="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="modalContactForm" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header text-center">

                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
                    <div className="cf2-wrap">

                        <h2>Make an Inquiry Now!</h2>

                        <div className="clearfix space40"></div>
                        <form className="positioned" name="sentMessage" id="contactForm" action="php/contact.php" method="post"/>
                            <div className="row">

                                <div className="col-md-6 col-sm-6">
                                    <input name="senderName" id="senderName" placeholder="Your Name" required type="text"/>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <input name="senderEmail" id="senderEmail" placeholder="Email Address" required type="email"/>
                                </div>
                            </div>

                            <input name="address" id="address" placeholder="Address" required type="text"/>

                            <input placeholder="Zip Code" required type="number"/>

                            <input placeholder="Mobile No." required type="number"/>
                            

                            <button type="submit" className="btn btn-primary btn-ico">Send Message<i className="fa fa-paper-plane-o"></i></button>
                        <form/>
                        <div id="sendingMessage" className="statusMessage">
                            <p><i className="fa fa-spin fa-cog"></i> Sending your message. Please wait...</p>
                        </div>
                        <div id="successMessage" className="successmessage">
                            <p><span className="success-ico"></span> Thanks for sending your message! We'll get back to you shortly.</p>
                        </div>
                        <div id="failureMessage" className="errormessage">
                            <p><span className="error-ico"></span> There was a problem sending your message. Please try again.</p>
                        </div>
                        <div id="incompleteMessage" className="statusMessage">
                            <p><i className="fa fa-warning"></i> Please complete all the fields in the form before sending.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        </>
  )
}
