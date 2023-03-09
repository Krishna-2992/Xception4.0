import React from "react";
import PuruNavbar from "../components/PuruNavbar";

export default function AboutUs({ active }) {
  return (
    <div>
      <PuruNavbar active={active} />
      <div className="about-us-container">
        <h2 className="text-bold color-silver">About Us</h2>
        <p>
          Welcome to Xception, the most awaited and esteemed event of the year,
          proudly presented by the Computer Science and Engineering Department
          of Ujjain Engineering College, Ujjain.
        </p>
        <p>
          Xception is not just another event, it's a socio-technical cum
          cultural fest, where we aim to bring about a positive change in
          society by organizing various social drives and collaborating with
          different communities and NGOs. We strongly believe in the power of
          technology and innovation and hence, we also focus on technical events
          such as workshops, coding competitions.
        </p>
        <p>
          But wait, there's more! We understand that engagement is key, and
          that's why we have also arranged concert nights to keep the audience
          entertained and enthralled. This year, we are all set to make it
          bigger and better than ever before, with a three-day blast of various
          events from March 31st, 2023 to April 2nd, 2023.The event boasts an
          impressive lineup of renowned professors and professionals from
          different fields who will be sharing their expertise and knowledge
          through enriching sessions, benefitting the students exponentially.
          With the support of our participants, we can extend our mission and
          make a significant contribution to society.
        </p>
        <p>
          We believe that events like Xception not only benefit the participants
          but also aid in the campaigning of our country. Your generous
          contribution and support towards our event will boost our morale and
          enhance the quality of events, making it an unforgettable experience
          for everyone involved.
        </p>
        <p>
          In conclusion, we invite you to join us on this exciting journey and
          be a part of the Xception experience. With more information available
          below, we sincerely hope that you will positively respond to our
          request and be a part of this life-changing event.
        </p>
        <div className="donate-button-container">
          <a href="#" className="donate-button color-green">
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
}
