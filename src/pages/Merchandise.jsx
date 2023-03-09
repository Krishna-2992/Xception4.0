import React from "react";
import Footer from "../components/Footer";
import PuruNavbar from "../components/PuruNavbar";

export default function Merchandise({ active }) {
  return (
    <div>
      {/* <Navbar active="Merchandise"/> */}
      <PuruNavbar active={active} />
      <div className="flex flex-col md:flex-row justify-center ">
        <div className="flex flex-col md:w-1/3 mt-8 items-center">
          <img
            src="data:image/jpeg;base64,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"
            alt="t-shirt"
            className="m-3"
          />
          <button className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] m-12">
            Order now
          </button>
        </div>
        <div className="white-glassmorphism md:w-1/3 align-center p-8 m-8">
          <h1 className="text-2xl text-white ">Xception merchandise</h1>
          <p className="text-xl text-white m-2">Price: 300</p>
          <p className="text-xl text-white ml-4 underline">Instructions:</p>
          <ul className="text-white list-disc ml-4">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              molestiae magnam harum.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              molestiae magnam harum.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              molestiae magnam harum.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              molestiae magnam harum.
            </li>
          </ul>

          <div className="grid grid-cols-3 mt-3 text-white list-none w-full md:w-1/2 text-md ml-4">
            <li>Size</li>
            <li>Chest</li>
            <li>Length</li>
            <li>S</li>
            <li>36</li>
            <li>27</li>
            <li>M</li>
            <li>38</li>
            <li>28</li>
            <li>L</li>
            <li>40</li>
            <li>29</li>
          </div>
        </div>
      </div>
      <hr className="w-1/2 mx-auto" />
      <Footer />
    </div>
  );
}
