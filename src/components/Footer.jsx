import logo from "../../images/xception-logo.png";
import "../component/social-links.css";
import { NavLink } from "react-router-dom";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    // for main flexbox which is vertical
    <div className="text-white flex flex-col gradient-bg-welcome">
      {/* for sub main flex which align item in two vertical in sm and horizontal in md */}
      <div className="flex flex-col md:flex-row">
        {/* for sub sub main flex which is used to align aboutus topic and its content */}
        <div className="flex flex-col md:w-2/5 m-4 md:m-8 md:p-4 mt-4">
          <div className="text-4xl md:text-6xl font-medium mb-4">
            Xception 4.0
          </div>
          <div className="text-l md:text-xl">
            We're hosting Xception, a 3-day socio-technical and cultural fest
            from March 31st to April 2nd, organized by the Computer Science and
            Engineering Department of Ujjain Engineering College.
            <br />
            <br /> We'll have workshops, coding competitions, concerts, and
            sessions by renowned professionals. We're seeking your support to
            make it a success and benefit students.
          </div>
        </div>
        {/* for sub main flex which will align those three components in horizontal manner irrespective of screen size */}
        <div className="flex">
          {/* for sub sub main strips which are three in count */}
          <div className=" flex flex-col m-4 md:m-8">
            <div className="my-4 cursor-pointer text-l md:text-xl font-bold">
              <NavLink to="/">SITEMAP</NavLink>
            </div>
            <div className="my-4 cursor-pointer text-l md:text-xl">
              <NavLink to="/events">Events</NavLink>
            </div>
            <div className="my-4 cursor-pointer text-l md:text-xl">
              <NavLink to="/gallery">Gallery</NavLink>
            </div>
            <div className="my-4 cursor-pointer text-l md:text-xl">
              <NavLink to="/sponsors">Sponsors</NavLink>
            </div>
            <div className="my-4 cursor-pointer text-l md:text-xl">
              <NavLink to={"/about"}>About</NavLink>
            </div>
            <div className="my-4 cursor-pointer text-l md:text-xl font-bold">
              <NavLink to={"/merchandise"}>MERCHANDISE</NavLink>
            </div>
          </div>

          <div>
            <div className=" flex flex-col m-4 md:m-8">
              <div className="my-4 cursor-pointer text-l md:text-2xl font-bold">
                <NavLink to={"/events"}>EVENTS</NavLink>
              </div>
              <div className="my-4 cursor-pointer text-l md:text-xl">
                <NavLink to={"/eventDetails?id=funEvents"}>Fun Events</NavLink>
              </div>
              <div className="my-4 cursor-pointer text-l md:text-xl">
                <NavLink to={"/eventDetails?id=centerOfAttraction"}>
                  Center of Attraction
                </NavLink>
              </div>
              <div className="my-4 cursor-pointer text-l md:text-xl">
                <NavLink to={"/eventDetails?id=technical"}>
                  Technical Events
                </NavLink>
              </div>
              <div className="my-4 cursor-pointer text-l md:text-xl">
                <NavLink to={"/eventDetails?id=onlineEvents"}>
                  Online Events
                </NavLink>
              </div>
              <div className="my-4 cursor-pointer text-l md:text-2xl font-bold">
                <NavLink to={"/sponsors"}>SPONSORS</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col m-8">
            <div className="my-4 cursor-pointer text-l md:text-xl font-bold">
              <NavLink to={"/"}>CONTACT US</NavLink>
            </div>
            <div className="my-4 cursor-pointer text-l md:text-xl">
              <NavLink to={"/"}>Core Team</NavLink>
            </div>
            <div className="my-4 cursor-pointer text-l md:text-xl">
              <NavLink to={"/"}>Design Team</NavLink>
            </div>
            <div className="my-4 cursor-pointer text-l md:text-xl">
              <NavLink to={"/"}>Tech Team</NavLink>
            </div>
            <div className="my-4 cursor-pointer text-l md:text-xl">
              <NavLink to={"/"}>Marketing Team</NavLink>
            </div>
          </div>
        </div>
      </div>

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
      </div>
    </div>
  );
};

export default Footer;
