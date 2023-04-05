import AboutUsLanding from "@/Components/About/AboutUsLanding/AboutUsLanding";
import Acheivments from "@/Components/Acheivements/Acheivments";
import EndWord from "@/Components/Home/EndWord/EndWord";
import { AcheivementPageDetails } from "@/Services/graphql/landing";
import { Space } from "antd";
import React from "react";
import client from "../../apollo-client";
const Acheivements = (props) => {
  const { title, subtitle, CarouselImages } = props.aceivementsPageData;
  const { title: endTitle, subtitle: endSubtitle } = props.endWordData;

  return (
    <Space direction="vertical">
      <Acheivments title={title} subtitle={subtitle} images={CarouselImages} />
      <EndWord title={endTitle} subtitle={endSubtitle} />
    </Space>
  );
};

export async function getServerSideProps(context) {
  const { data, error } = await client.query({ query: AcheivementPageDetails });
  if (error)
    return {
      props: {
        error: "Backend might be down",
      },
    };
  return {
    props: {
      endWordData: data.endWord.data.attributes,
      aceivementsPageData: data.aceivementsPage.data.attributes,
    },
  };
}

export default Acheivements;
