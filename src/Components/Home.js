import React from 'react'

import { Destinations } from "../Components/Destinations";
import { About } from "../Components/About";
import { Reviews } from "../Components/Reviews";
import { Contact } from "../Components/Contact";


export const Home = () => {
  return (
    <>
    <div id="home" className="intro intro15">
            <div className="container">
                <div className="row center-content">
                    <div className="col-md-5 color-white">
                        <h3>Discover Your Next Adventure!</h3> 
                         {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas cumque dicta odio sed asperiores maiores porro laborum maxime quibusdam!</p> */}
                        <div className="space40"></div>

                        {/* <form className="intro-newsletter intro-newsletter-full intro10-nl" action="/" id="invite" method="POST">
                            <div className="row">
                                <div className="col-md-8 col-sm-7 col-xs-8 no-padding">
                                    <input className="" placeholder="City, Address" name="city" id="/"/>
                                </div>
                                <div className="col-md-4 col-sm-5 col-xs-4 no-padding">
                                    <button className="btn btn-primary btn-block" type="submit">Search</button>
                                </div>
                            </div>
                        </form> */}
                        <div className="space40"></div>
                    </div>

                    {/* <div className="col-md-7">
                        <div className="hl-container pull-right">
                            <img src="images/home.png" className="hl-image" alt=""/>
                            <ul>
                                <li className="hl-point hl-point1">
                                    <div className="trigger-wrap"><a className="trigger"></a></div>

                                    <div className="h1-point-info">
                                        <h6>Feature one</h6>
                                        <p>Lorem ipsum dolor sit amet tempor incididunt laboris nisi aliquip ex aliquet imperdiet commodo sociosqu ad litora.</p>
                                    </div>
                                </li>

                                <li className="hl-point hl-point2">
                                    <div className="trigger-wrap"><a className="trigger"></a></div>

                                    <div className="h1-point-info">
                                        <h6>Feature Two</h6>
                                        <p>Lorem ipsum dolor sit amet tempor incididunt laboris nisi aliquip ex aliquet imperdiet commodo sociosqu ad litora.</p>
                                    </div>
                                </li>

                                <li className="hl-point hl-point3">
                                    <div className="trigger-wrap"><a className="trigger"></a></div>

                                    <div className="h1-point-info">
                                        <h6>Feature Three</h6>
                                        <p>Lorem ipsum dolor sit amet tempor incididunt laboris nisi aliquip ex aliquet imperdiet commodo sociosqu ad litora.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <Destinations/>
        <About/>
        <Reviews/>
        <Contact/>
        </>
  )
}
