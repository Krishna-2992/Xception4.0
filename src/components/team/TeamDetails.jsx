import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import data from "./data";
import TeamCard from "./TeamCard";
const TeamDetails = () => {
  console.log("data=" + JSON.stringify(data));
  const [dataId, setDataId] = useState(
    new URLSearchParams(useLocation().search).get("id")
  );
  useEffect(() => {}, [dataId]);

  return (
    <>
      <h1
        style={{
          color: "red",
          textAlign: "center",
          fontSize: "xx-large",
          margin: "20px",
        }}
      >
        Team Details
      </h1>
      {dataId == "data1"
        ? data.data1.map((data) => {
            return (
              <TeamCard
                name={data.name}
                position={data.position}
                instagram={data.instagram}
                whatsapp={data.whatsapp}
                linkedin={data.linkedin}
                imgurl={data.imgurl}
              />
            );
          })
        : ""}
      {dataId == "data2"
        ? data.data2.map((data) => {
            return (
              <TeamCard
                name={data.name}
                position={data.position}
                instagram={data.instagram}
                whatsapp={data.whatsapp}
                linkedin={data.linkedin}
                imgurl={data.imgurl}
              />
            );
          })
        : ""}
      {dataId == "data3"
        ? data.data3.map((data) => {
            return (
              <TeamCard
                name={data.name}
                position={data.position}
                instagram={data.instagram}
                linkedin={data.linkedin}
                imgurl={data.imgurl}
              />
            );
          })
        : ""}
      {dataId == "data4"
        ? data.data4.map((data) => {
            return (
              <TeamCard
                name={data.name}
                position={data.position}
                instagram={data.instagram}
                linkedin={data.linkedin}
                imgurl={data.imgurl}
              />
            );
          })
        : ""}
      {dataId == "data5"
        ? data.data5.map((data) => {
            return (
              <TeamCard
                name={data.name}
                position={data.position}
                instagram={data.instagram}
                linkedin={data.linkedin}
                imgurl={data.imgurl}
              />
            );
          })
        : ""}
      {dataId == "data6"
        ? data.data6.map((data) => {
            return (
              <TeamCard
                name={data.name}
                position={data.position}
                instagram={data.instagram}
                linkedin={data.linkedin}
                imgurl={data.imgurl}
              />
            );
          })
        : ""}
      {dataId == "data7"
        ? data.data7.map((data) => {
            return (
              <TeamCard
                name={data.name}
                position={data.position}
                instagram={data.instagram}
                linkedin={data.linkedin}
                imgurl={data.imgurl}
              />
            );
          })
        : ""}
      {dataId == "data8"
        ? data.data8.map((data) => {
            return (
              <TeamCard
                name={data.name}
                position={data.position}
                instagram={data.instagram}
                linkedin={data.linkedin}
                imgurl={data.imgurl}
              />
            );
          })
        : ""}
      {dataId == "data9"
        ? data.data9.map((data) => {
            return (
              <TeamCard
                name={data.name}
                position={data.position}
                instagram={data.instagram}
                linkedin={data.linkedin}
                imgurl={data.imgurl}
              />
            );
          })
        : ""}
      {dataId == "data10"
        ? data.data10.map((data) => {
            return (
              <TeamCard
                name={data.name}
                position={data.position}
                instagram={data.instagram}
                linkedin={data.linkedin}
                imgurl={data.imgurl}
              />
            );
          })
        : ""}
      {dataId == "data11"
        ? data.data11.map((data) => {
            return (
              <TeamCard
                name={data.name}
                position={data.position}
                instagram={data.instagram}
                linkedin={data.linkedin}
                imgurl={data.imgurl}
              />
            );
          })
        : ""}
    </>
  );
};

export default TeamDetails;
