import AboutUsLanding from "@/Components/About/AboutUsLanding/AboutUsLanding";
import EndWord from "@/Components/Home/EndWord/EndWord";
import FeatureSection from "@/Components/Home/FeatureSection/FeatureSection";
import Testimonials from "@/Components/Home/Testimonials/Testimonials";
import { GetAboutUsPageDetails } from "@/Services/graphql/landing";
import { Space } from "antd";
import React from "react";
import client from "../../apollo-client";
const About = (props) => {
  const { BigTitle: SpecialTitle, FullImage, SpecialCard } = props.specialData;

  const {
    BigTitle: aboutTitle,
    videoUrl,
    ytlink,
    fblink,
    description: aboutDescription,
  } = props.aboutUsData;

  const { BigTitle: endTitle } = props.endWordData;

  const { BigTitle: commentTitle, CommentCard } = props.commentsData;
  return (
    <Space direction="vertical">
      <AboutUsLanding
        bigTitle={aboutTitle}
        ytlink={ytlink}
        fblink={fblink}
        videoUrl={videoUrl}
        description={aboutDescription}
      />
      <FeatureSection
        bigTitle={SpecialTitle}
        fullImage={FullImage}
        specialCard={SpecialCard}
      />
      <Testimonials bigTitle={commentTitle} comments={CommentCard} />
      <EndWord bigTitle={endTitle} />
    </Space>
  );
};

export async function getServerSideProps(context) {
  const { data, error } = await client.query({ query: GetAboutUsPageDetails });
  if (error)
    return {
      props: {
        error: "Backend might be down",
      },
    };
  return {
    props: {
      aboutUsData: data.aboutUs.data.attributes,
      specialData: data.specialScreen.data.attributes,
      endWordData: data.endWord.data.attributes,
      commentsData: data.commentSection.data.attributes,
    },
  };
}

export default About;
