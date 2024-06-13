import React from 'react'

export const Contact = () => {
  return (
    <>
        <div className="google-map">
            <div className="container-fluid no-padding">
                <div id="map"></div>
            </div>
        </div>

        <div className="clear"></div>

        <div id="contact-info" className="bg-white">
            <div className="container">
                <div className="about-inline">
                    <h3>— Reach us </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos sunt provident quae recusandae numquam repellendus assumenda culpa harum adipisci eius.</p>

                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="c-info">
                            <i className="ilmosys-phone"></i>
                            <h5>Call Us</h5>
                            <p>+91 99999 99999</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="c-info">
                            <i className="ilmosys-link"></i>
                            <h5>Website</h5>
                            <p><a href="/" className="">www.rimortours.com</a></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="c-info">
                            <i className="ilmosys-map"></i>
                            <h5>Address</h5>
                            <p>...</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="c-info">
                            <i className="ilmosys-envelope"></i>
                            <h5>Email</h5>
                            <p><a href="/" className="#"> username@mail.com </a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
