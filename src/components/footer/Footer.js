import React from "react";
import { Facebook, Twitter, Youtube, Linkedin } from 'react-feather';
import { Navbar } from "reactstrap";

const Footer = () => (
    <footer>
        <Navbar fixed="bottom" className="d-flex shadow-sm border-top align-items-center shadow-sm p-3" expand='xs'>
                <div className='d-none d-lg-block justify-content-center justify-content-lg-between '>
                    <p className="">Copyright &copy; 2022 crdr. All rights reserved</p>
                </div>
                <div className="d-none d-lg-block align-items-right">
                    <a href='' className="m-4 text-reset">
                        <Facebook className="footer-icons"  />
                    </a>
                    <a href='' className="m-4 text-reset">
                        <Twitter className="footer-icons" />
                    </a>
                    <a href='' className="m-4 text-reset">
                        <Youtube className="footer-icons"  />
                    </a>
                    <a href='' className="m-4 text-reset">
                        <Linkedin className="footer-icons" />
                    </a>
                </div>
        </Navbar>
    </footer>
);

export default Footer;