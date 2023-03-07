import React from "react";
import "./team.css";
import "./Team";
import { NavLink } from "react-router-dom";

const TeamCard = (props) => {
  return (
    <>
      <div className="people-card">
        <div className="img">
          <img src={props.imgurl} alt="" />
        </div>
        <div className="details">
          <div className="front">
            <h2>
              {props.name}
              <br />
              <span>{props.position}</span>
            </h2>
          </div>
          <div className="rear">
            <ul className="social-icons">
              {props.instagram && (
                <li>
                  <a href={props.instagram} target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              )}
              {props.linkedin && (
                <li>
                  <a href={props.linkedin} target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              )}
              {props.whatsapp && (
                <li>
                  <a href={props.whatsapp} target="_blank">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              )}
            </ul>
            {props.Members && (
              <div className="more-btn">
                <NavLink to={"/teamdetails?id=" + props.dataId}>
                  Members
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;

// {/* <h1>Team Cart</h1>
//       <div className="box">
//         <div className="image">{<img src={logo} alt="" />}</div>
//         <div className="info">
//           <h1>{props.name}</h1>
//           <h2>{props.position}</h2>
//           <div className="icons">
//             <a href={props.linkedin}>{/* <img src={linkedin} alt="" /> */}</a>
//             <a href={props.instagram}>{/* <img src={instagram} alt="" /> */}</a>
//             <a href={props.whatsapp}>{/* <img src={whatsapp} alt="" /> */}</a>
//             <form>
//               <button
//                variant="btn btn-success"
//               onClick={() => history.push("/Teams")}
//               >
//                 view team
//               </button>
//             </form>
//           </div>
//         </div>
//       </div> */}
