import logo from "../../images/xception-logo.png";
import "../component/social-links.css";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center"></div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          {/* <p className='text-white text-base text-center mx-2 cursor-pointer'>Market</p> */}
          <ul className="ull">
            <li className="lii">
              <FaInstagramSquare className="text-4xl" />
            </li>
            <li className="lii">
              <FaFacebookSquare className="text-4xl" />
            </li>
            <li className="lii">
              <FaTwitterSquare className="text-4xl" />
            </li>
            <li className="lii">
              <FaLinkedin className="text-4xl" />
            </li>
            {/* <p className='text-white text-base text-center mx-2 cursor-pointer'>Exchange</p> */}
            {/* <p className='text-white text-base text-center mx-2 cursor-pointer'>Tutorials</p> */}
            {/* <p className='text-white text-base text-center mx-2 cursor-pointer'>Wallets</p> */}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-small text-center">Come join us</p>
        <p className="text-white text-small text-center">
          Required google form link{" "}
        </p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-evenly items-center mt-3">
        <p className="text-white text-small text-center">@Xception 2023</p>
        <p className="text-white text-small text-center">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
