import React from 'react'
import './styles1.css'

export const NavBar = () => {
  return (
    <>
    <nav className="navbar-inverse navbar-lg navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a href="/" className="navbar-brand brand nav-logo"><img src="images/logo.png" alt="logo"/></a>
                    </div>

                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				</button>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right navbar-login">
                            <li>
                                <a href="tel:1800789123"><i className="ilmosys-headphone"></i> +91 99999 99999</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown mm-menu">
                                <a className="page-scroll" href="/">Home</a>
                            </li>

                            <li className="dropdown mm-menu">
                                <a className="page-scroll" href="#destinations">Destinations</a>
                            </li>

                            <li className="dropdown mm-menu">
                                <a className="page-scroll" href="#about">About</a>
                            </li>

                            <li className="dropdown mm-menu">
                                <a className="page-scroll" href="#reviews">Reviews</a>
                            </li>

                            <li className="dropdown mm-menu">
                                <a className="page-scroll" href="#contact-info">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </>
  )
}
