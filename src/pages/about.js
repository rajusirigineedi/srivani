import AboutUsLanding from "@/Components/About/AboutUsLanding/AboutUsLanding";
import EndWord from "@/Components/Home/EndWord/EndWord";
import FeatureSection from "@/Components/Home/FeatureSection/FeatureSection";
import Testimonials from "@/Components/Home/Testimonials/Testimonials";
import { GetAboutUsPageDetails } from "@/Services/graphql/landing";
import { Space } from "antd";
import React from "react";
import client from "../../apollo-client";
const About = (props) => {
  const {
    title: SpecialTitle,
    subtitle: SpecialSubTitle,
    FullImage,
    SpecialCard,
  } = props.specialData;

  const {
    title: aboutTitle,
    subtitle: aboutSubtitle,
    videoUrl,
    ytlink,
    fblink,
    description: aboutDescription,
  } = props.aboutUsData;

  console.log(props.aboutUsData);

  const { title: endTitle, subtitle: endSubtitle } = props.endWordData;

  const {
    title: commentTitle,
    subtitle: commentSubtitle,
    CommentCard,
  } = props.commentsData;
  return (
    <Space direction="vertical">
      <AboutUsLanding
        title={aboutTitle}
        subtitle={aboutSubtitle}
        ytlink={ytlink}
        fblink={fblink}
        videoUrl={videoUrl}
        description={aboutDescription}
      />
      <FeatureSection
        title={SpecialTitle}
        subtitle={SpecialSubTitle}
        fullImage={FullImage}
        specialCard={SpecialCard}
      />
      <Testimonials
        title={commentTitle}
        subtitle={commentSubtitle}
        comments={CommentCard}
      />
      <EndWord title={endTitle} subtitle={endSubtitle} />
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
