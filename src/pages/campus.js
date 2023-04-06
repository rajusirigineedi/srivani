import React from "react";
import AboutUsLanding from "@/Components/About/AboutUsLanding/AboutUsLanding";
import Acheivments from "@/Components/Acheivements/Acheivments";
import EndWord from "@/Components/Home/EndWord/EndWord";
import { Space } from "antd";
import CampusComponent from "@/Components/Campus/Campus";
import DirectorWords from "@/Components/Home/DirectorWords/DirectorWords";
import client from "../../apollo-client";
import { GetCampusPageDetails } from "@/Services/graphql/landing";

const Campus = (props) => {
  const { BigTitle: DirectorsTitle, DirectorCard: DirectorCardData } =
    props.directorWordData;
  const { BigTitle: endTitle } = props.endWordData;

  const {
    BigTitle: campusTitle,
    campusImage,
    description: campusDescription,
  } = props.campusData;

  return (
    <Space direction="vertical">
      <CampusComponent
        bigTitle={campusTitle}
        image={campusImage}
        description={campusDescription}
      />
      <DirectorWords
        bigTitle={DirectorsTitle}
        directorCards={DirectorCardData}
      />
      <EndWord bigTitle={endTitle} />
    </Space>
  );
};

export async function getServerSideProps(context) {
  const { data, error } = await client.query({ query: GetCampusPageDetails });
  if (error)
    return {
      props: {
        error: "Backend might be down",
      },
    };
  return {
    props: {
      campusData: data.campusPage.data.attributes,
      directorWordData: data.directorWord.data.attributes,
      endWordData: data.endWord.data.attributes,
    },
  };
}

export default Campus;
