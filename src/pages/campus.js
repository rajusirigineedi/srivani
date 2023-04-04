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
  const {
    title: DirectorsTitle,
    subtitle: DirectorsSubtitle,
    DirectorCard: DirectorCardData,
  } = props.directorWordData;
  const { title: endTitle, subtitle: endSubtitle } = props.endWordData;

  const {
    title: campusTitle,
    subtitle: campusSubtitle,
    campusImage,
    description: campusDescription,
  } = props.campusData;

  return (
    <Space direction="vertical">
      <CampusComponent
        title={campusTitle}
        subtitle={campusSubtitle}
        image={campusImage}
        description={campusDescription}
      />
      <DirectorWords
        title={DirectorsTitle}
        subtitle={DirectorsSubtitle}
        directorCards={DirectorCardData}
      />
      <EndWord title={endTitle} subtitle={endSubtitle} />
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
