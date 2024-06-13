import React from 'react'

export const Parallax = () => {
  return (
    <>
        <section className="parallax-content2 parallax2 text-center" data-stellar-background-ratio="0.4">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h4>Request a Free Consultation!!</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <a href="/" className="btn btn-lg btn-primary pull-left">Reserve a slot <i className="icon-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
