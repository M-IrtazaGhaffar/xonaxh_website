import React from "react";
import Logo from "../assets/Logo";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate()
  return (
    <div>
      <footer class="bg-slate-300">
        <div class="w-full max-w-screen-xl mx-auto p-7 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <Link
              to={'/home'}
              class="flex items-center mb-4 sm:mb-0"
            >
              <div>
                <Logo />
              </div>
            </Link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 ">
              <li>
                <Link to="/about" class="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>
              <li>
                <Link to="/refund" class="mr-4 hover:underline md:mr-6 ">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" class="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-black sm:mx-auto lg:my-8" />
          <span class="block text-sm text-black sm:text-center">
            © {new window.Date().getFullYear()}{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Xonaxh Pakistan
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
      <div className="bg-black text-white text-center p-2 text-xs">
        Powered by - {" "}
        <a href="https://ittidevelops.com">
        ITTI Develops
        </a>
      </div>
    </div>
  );
}

export default Footer;
