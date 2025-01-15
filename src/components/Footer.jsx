import React from "react";
import Logo from "../assets/Logo";
import { Link } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <footer className="bg-slate-300">
        <div className="w-full max-w-screen-xl space-y-10 mx-auto p-7 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href={"/home"} className="flex items-center mb-4 sm:mb-0">
              <div>
                <Logo />
              </div>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 ">
              <li>
                <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>
              <li>
                <Link href="/refund" className="mr-4 hover:underline md:mr-6 ">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="mr-4 hover:underline md:mr-6 ">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:underline">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center flex justify-center items-center gap-3 flex-col">
            Need help or have questions? Our friendly support team is available
            to assist you anytime. Whether you need product information, help
            with orders, or guidance on returns, we’re here to ensure a smooth
            shopping experience. You can easily reach out to us through our
            platform, and we’ll be happy to address any concerns promptly. At
            Xonaxh.com, customer satisfaction is our priority, and we strive to
            make your shopping journey as seamless and enjoyable as possible.
            Don’t hesitate to get in touch – we’re always ready to help make
            your experience with us exceptional!
            <Link
              href={"/contact"}
              className="btn btn-wide text-white m-2 hover:scale-105 hover:bg-slate-100 hover:text-black"
            >
              Contact Us
            </Link>
          </div>
          <hr className="my-6 border-black sm:mx-auto lg:my-8" />
          <span className="block text-sm text-black sm:text-center">
            © {new window.Date().getFullYear()}{" "}
            <Link href="https://www.xonaxh.com/" className="hover:underline">
              Xonaxh Pakistan
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
      <div className="bg-black text-white text-center p-2 text-xs">
        Powered by - <a href="https://ittidevelops.com">ITTI Develops</a>
      </div>
    </div>
  );
}

export default Footer;
