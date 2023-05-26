import React from "react";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img className="w-16" src={logo} alt="site logo" />
          <p>
            FoodieCrush Hunter co.ltd
            <br />
            Providing reliable culinary chef hunter since 2023
          </p>
        </div>
        <div>
          <span className="footer-title">Recipe</span>
          <Link className="link link-hover">Panta Ilish</Link>
          <Link className="link link-hover">Bhuna Khichuri </Link>
          <Link className="link link-hover">Kacchi Biryani</Link>
          <Link className="link link-hover">Morog Polao</Link>
        </div>
        <div>
          <span className="footer-title">FoodieCrush hunter</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Blog</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
