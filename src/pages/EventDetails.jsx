import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import eventData from "./eventData";

export default function EventDetails() {
  const [eventDataId, setEventDataId] = useState(
    new URLSearchParams(useLocation().search).get("id")
  );
  const [event, setEvent] = useState("");
  useEffect(() => {}, [eventDataId, event]);

  const handleClick = (e, data) => {
    document.querySelector("#event_popup").classList.add("active");
    setEvent(data);
  };

  function closePopup(e) {
    if (!e.target.matches("#event_popup_detail")) {
      e.target.classList.remove("active");
    }
  }

  const Card = ({ name, url, details, data }) => {
    return (
      <div
        className="flex border-2 shadow-lg shadow-cyan-500/50 border-sky-500/70 rounded-md my-4 justify-center items-center p-3 gap-4 m-8"
        onClick={(e) => {
          handleClick(e, data);
        }}
      >
        <div>
          <img src={url} alt="" className="cursor-pointer" />
          <h1 className="text-3xl text-white cursor-pointer hover:underline">
            {name}
          </h1>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        {eventDataId == "technical"
          ? eventData.technical.events.map((data) => {
              return (
                <Card
                  name={data.name}
                  url={data.url}
                  details={data.details}
                  data={data}
                />
              );
            })
          : ""}
        {eventDataId == "funEvents"
          ? eventData.funEvents.events.map((data) => {
              return (
                <Card
                  name={data.name}
                  url={data.url}
                  details={data.details}
                  data={data}
                />
              );
            })
          : ""}
        {eventDataId == "centerOfAttraction"
          ? eventData.centerOfAttraction.events.map((data) => {
              return (
                <Card
                  name={data.name}
                  url={data.url}
                  details={data.details}
                  data={data}
                />
              );
            })
          : ""}
        {eventDataId == "onlineEvents"
          ? eventData.onlineEvents.events.map((data) => {
              return (
                <Card
                  name={data.name}
                  url={data.url}
                  details={data.details}
                  data={data}
                />
              );
            })
          : ""}
      </div>
      <div id="event_popup" onClick={closePopup}>
        <div
          id="event_popup_detail"
          className="text-white border-2 shadow-lg shadow-cyan-500/50 border-sky-500/70 rounded-md"
        >
          <div className="flex flex-col-reverse md:flex-row p-8 scroll-smooth">
            <div className="md:w-1/2 flex flex-col">
              <div className=" text-3xl mt-4 mb-2">{event.name}</div>
              <div>{event.details}</div>
              <div className="underline mt-2">Date: {event.date}</div>
              <div className="underline mt-1">Time: {event.time}</div>
            </div>
            <div className="md:w-1/2 h-48 parentContainer">
              <div className="w-11/12 h-5/6 border-2 bottom-right -z-20"></div>
              <img src={event.url} alt="" className="w-11/12 h-5/6 z-30" />
            </div>
          </div>
          {/* <img
            src={event.url}
            alt=""
            className="mx-auto w-2/3 border-2 border-cyan-500/100 "
          />
          <div className="text-4xl mx-auto">{event.name}</div>
          <div>Date: {event.date}</div>
          <div>Time: {event.time}</div> */}
        </div>
      </div>
    </>
  );
}
