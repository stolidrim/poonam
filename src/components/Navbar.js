import React from 'react'

export default function Navbar() {
  return (
    <div>
<nav id="gtco-header-navbar" className="navbar navbar-expand-lg py-4">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <span className="lnr lnr-moon"></span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-nav-header"
                    aria-controls="navbar-nav-header" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="lnr lnr-menu"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-nav-header">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#who-we-are">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pricing">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>

    </div>
  )
}
