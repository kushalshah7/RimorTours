import React from 'react'
import './styles1.css'

export const Reviews = () => {
  return (
    <>
    <div id="reviews" class="bg-light testimonials-color">
            <div class="container">
                <div class="about-inline">
                    <h3>— Our Client Reviews </h3>
                </div>
            </div>

            <div class="container ">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="quote3 review-custom">
                            <div className="review-single">
                                <img src="images/reviews/1.jpg" alt="" />
                                <p>Pellentesque risus metus, condimentum at cursus sodales, mollis quis purus. Pellentesque vehicula felis a mauris vulputate tincidunt. </p>
                                <span class="author">Visvan Monee - Web Design</span>
                                <div class="space100"></div>
                            </div>
                            <div className="review-single">
                                <img src="images/reviews/2.jpg" alt="" />
                                <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.  Sed volutpat eleifend interdum. Interdum et malesuada fames ac ante. </p>
                                <span class="author">Jabin Saje - UX Designer</span>
                            </div>
                            <div className="review-single">
                                <img src="images/reviews/1.jpg" alt="" />
                                <p>Aliquam vestibulum urna quam, a efficitur metus pulvinar nec. Cras efficitur sapien eu ligula sollicitudin, a interdum quam tristique. </p>
                                <span class="author">Maciea kalli - Front End</span>
                            </div>
                            <div className="review-single">
                                <img src="images/reviews/2.jpg" alt="" />
                                <p>Morbi gravida posuere fermentum. Suspendisse luctus viverra nisl. Vestibulum faucibus suscipit fringilla. </p>
                                <span class="author">Isfab mante - Web Design</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="space100"></div>
            </div>
        </div>
    </>
  )
}
