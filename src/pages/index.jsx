import DirectorWords from "@/Components/Home/DirectorWords/DirectorWords";
import EndWord from "@/Components/Home/EndWord/EndWord";
import EventSection from "@/Components/Home/EventSection/EventSection";
import FeatureSection from "@/Components/Home/FeatureSection/FeatureSection";
import Landing from "@/Components/Home/Landing/Landing";
import Testimonials from "@/Components/Home/Testimonials/Testimonials";
import { GetLandingPageDetails } from "@/Services/graphql/landing";
import { useQuery, gql } from "@apollo/client";
import { Space } from "antd";
import React from "react";
import client from "../../apollo-client";

const Home = (props) => {
  const {
    MainHeading,
    MainHeading2,
    MainSubtitle,
    CarouselImages,
    NotificationString,
  } = props.landingPageData;
  const { ContentImageLilst, BigTitle: AcheivementsTitle } =
    props.acheivementsData;

  const { BigTitle: DirectorsTitle, DirectorCard: DirectorCardData } =
    props.directorWordData;

  const { BigTitle: SpecialTitle, FullImage, SpecialCard } = props.specialData;

  const { BigTitle: endTitle } = props.endWordData;

  const { BigTitle: commentTitle, CommentCard } = props.commentsData;

  const imageList = CarouselImages.data.map(
    (imageEntry) => imageEntry.attributes.image.data.attributes.url
  );

  return (
    <Space direction="vertical">
      <Landing
        MainHeading={MainHeading}
        MainHeading2={MainHeading2}
        MainSubtitle={MainSubtitle}
        CarouselImages={imageList}
        NotificationString={NotificationString}
      />
      <EventSection
        bigTitle={AcheivementsTitle}
        imageList={ContentImageLilst}
      />
      <DirectorWords
        bigTitle={DirectorsTitle}
        directorCards={DirectorCardData}
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
  const { data, error } = await client.query({ query: GetLandingPageDetails });
  if (error)
    return {
      props: {
        error: "Backend might be down",
      },
    };
  return {
    props: {
      landingPageData: data.landingPage.data.attributes,
      acheivementsData: data.acheivementSection.data.attributes,
      directorWordData: data.directorWord.data.attributes,
      specialData: data.specialScreen.data.attributes,
      endWordData: data.endWord.data.attributes,
      commentsData: data.commentSection.data.attributes,
    },
  };
}

export default Home;
