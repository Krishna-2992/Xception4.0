import React from "react";
import TeamCard from "./TeamCard.jsx";
import "./team.css";
import PuruNavbar from "../PuruNavbar.jsx";

const Team = ({ active }) => {
  return (
    <>
      <PuruNavbar active={active} />
      <div id="teams">
        <h1
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "xx-large",
            margin: "20px",
          }}
        >
          Event team{" "}
        </h1>
        <TeamCard
          name="Priyanshu Jangid"
          position="Event Head"
          instagram="https://instagram.com/priyanshhu_4?igshid=YmMyMTA2M2Y="
          whatsapp="https://wa.me/919893510414"
          imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
          dataId="data1"
          Members={true}
        />
        <TeamCard
          name="Yogesh Patel"
          position="Management Head"
          instagram="https://instagram.com/yogesh7024_patel?igshid=YmMyMTA2M2Y="
          whatsapp="https://wa.me/7024911322"
          imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
          dataId="data2"
          Members={true}
        />
        <TeamCard
          name="Prashant Patil"
          position="Campaign Head Co-ordinator"
          instagram="https://instagram.com/____prashant_patil____?igshid=YmMyMTA2M2Y="
          imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
          dataId="data3"
          Members={true}
        />
        <TeamCard
          name="Akshay Patidar"
          position="Technical Head"
          instagram="https://instagram.com/akshayy30?igshid=YmMyMTA2M2Y="
          linkedin="https://www.linkedin.com/in/akshay-patidar-031355194"
          imgurl="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception4.0-team%2FIMG-20221231-WA0009-min.jpg?alt=media&token=401173e3-e387-4df3-934d-c5bbbcd913d2"
          dataId="data4"
          Members={true}
        />
        <TeamCard
          name="Aastha Jain"
          position="Cultural Head"
          instagram="https://instagram.com/aastha__jain18?igshid=YmMyMTA2M2Y="
          linkedin="https://www.linkedin.com/in/aastha-jain-112214209"
          imgurl="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception4.0-team%2FIMG-20230307-WA0004-min.jpg?alt=media&token=38d919d8-3275-46a5-9bb2-ab044d50fd28"
          dataId="data5"
          Members={true}
        />
        <TeamCard
          name="Nagendra Chouhan"
          position="Web-Dev Head"
          instagram="https://instagram.com/nagendra_0_1?igshid=YmJhNjkzNzY="
          linkedin="https://www.linkedin.com/in/nagendra-chouhan-b70042165"
          imgurl="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception4.0-team%2FIMG_20230303_163439-min.jpg?alt=media&token=8f4fa0d7-d6bc-4979-8235-758ed8533847"
          dataId="data6"
          Members={true}
        />
        <TeamCard
          name="Tanushka Mangal"
          position="Design Head"
          instagram="https://instagram.com/tannushhka?igshid=ZDdkNTZiNTM="
          linkedin="https://www.linkedin.com/in/tanushka-mangal"
          imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
          dataId="data7"
          Members={true}
        />
        <TeamCard
          name="Raksha Birla"
          position="Marketing Head"
          instagram="https://instagram.com/ra_kshu073?igshid=YmMyMTA2M2Y="
          imgurl="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception4.0-team%2FIMG20211211102807-min.jpg?alt=media&token=64220745-a0e2-4939-aab3-47db1225efbe"
          dataId="data8"
          Members={true}
        />
        <TeamCard
          name="Anushka Gupta"
          position="Creative Head"
          instagram="https://instagram.com/anushka_gupta_02?igshid=YmMyMTA2M2Y="
          linkedin="https://www.linkedin.com/in/anushka-gupta-02"
          imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
          dataId="data9"
          Members={true}
        />
        <TeamCard
          name="Rahul Singh"
          position="Gaming Head"
          instagram="https://instagram.com/t_h_a_k_u_r_0904?igshid=YmMyMTA2M2Y="
          imgurl="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception4.0-team%2FIMG_20230307_122835-min.jpg?alt=media&token=7a447f28-a071-487a-9f31-434fdcb5aad2"
          dataId="data10"
          Members={true}
        />
        <TeamCard
          name="Yashwant Patidar"
          position="Online Event Head"
          instagram="https://instagram.com/yash_patidar2207?igshid=YmMyMTA2M2Y="
          imgurl="https://firebasestorage.googleapis.com/v0/b/direct-axiom-325907.appspot.com/o/xception4.0-team%2FIMG_20200620_095033_723-min.jpg?alt=media&token=d8472f4d-9d65-45b5-ad4d-97b5bb167070"
          dataId="data11"
          Members={true}
        />
      </div>
    </>
  );
};

export default Team;
