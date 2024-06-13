import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Destinations = () => {

        const navigate = useNavigate();

        const handleEurope =()=>{
            navigate('/europe');
            window.location.reload();
        }
        const handleDubai =()=>{
            navigate('/dubai');
        }
        const handleIndia =()=>{
            navigate('/india');
        }
        const handleBali =()=>{
            navigate('/bali');
        }

  return (
    <div className="bg-pattern">
        {/* <div className="container">
            <div className="clearfix space90"></div>
            <div className="about-inline">
                <h3>— Our Partners </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. </p>
            </div>
            <div className="row">
                <ul className="clients2 text-center">
                    <li><img src="images/clients/1.png" className="img-responsive center-block" alt="" /></li>
                    <li><img src="images/clients/2.png" className="img-responsive center-block" alt="" /></li>
                    <li><img src="images/clients/3.png" className="img-responsive center-block" alt="" /></li>
                    <li><img src="images/clients/4.png" className="img-responsive center-block" alt="" /></li>
                    <li><img src="images/clients/5.png" className="img-responsive center-block" alt="" /></li>
                </ul>
            </div>
        </div> */}

        <div id="destinations" className="elements-content">
            <div className="container">
                <div className="about-inline">
                    <h3>Destinations</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi illo enim amet cum quaerat molestiae temporibus qui neque adipisci laudantium.</p>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card card-product">
                            <div className="img-wrap"><img src="images/01.jpg" alt="estica"/></div>
                            <div className="info-wrap">
                                <h4 className="title">Europe</h4>
                                <p className="desc">*Description*</p>
                                <div className="price-wrap h3">
                                    <span className="price-new">*Price*</span> <del className="price-old"></del>
                                </div>
                            </div>
                            <div className="bottom-wrap">
                            <button className="btn btn-sm btn-primary float-right" onClick={handleEurope}>
                                Check More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <figure className="card card-product">
                            <div className="img-wrap"><img src="images/02.jpg" alt="estica"/></div>
                            <div className="info-wrap">
                                <h4 className="title">India</h4>
                                <p className="desc">*Description*</p>
                                <div className="price-wrap h3">
                                    <span className="price-new">*Price*</span> <del className="price-old"></del>
                                </div>
                            </div>
                            <div className="bottom-wrap">
                            <button className="btn btn-sm btn-primary float-right" onClick={handleIndia}>
                                Check More</button>

                            </div>
                        </figure>
                    </div>
                    <div className="col-md-3">
                        <figure className="card card-product">
                            <div className="img-wrap"><img src="images/03.jpg" alt="estica"/></div>
                            <div className="info-wrap">
                                <h4 className="title">Dubai</h4>
                                <p className="desc">*Description*</p>
                                <div className="price-wrap h3">
                                    <span className="price-new">*Price*</span> <del className="price-old"></del>
                                </div>
                            </div>
                            <div className="bottom-wrap">
                            <button className="btn btn-sm btn-primary float-right" onClick={handleDubai}>
                                Check More</button>
                            </div>
                        </figure>
                    </div>

                    <div className="col-md-3">
                        <figure className="card card-product">
                            <div className="img-wrap"><img src="images/04.jpg" alt="estica"/></div>
                            <div className="info-wrap">
                                <h4 className="title">Bali</h4>
                                <p className="desc">*Description*</p>
                                <div className="price-wrap h3">
                                    <span className="price-new">*Price*</span> <del className="price-old"></del>
                                </div>
                            </div>
                            <div className="bottom-wrap">
                                <button className="btn btn-sm btn-primary float-right" onClick={handleBali}>
                                Check More</button>
                            </div>
                        </figure>
                    </div>

                </div>
            </div>
        </div>
        <div className="space100"></div>
    </div>
  )
}
