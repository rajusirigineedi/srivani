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
  const { MainHeading, MainSubtitle, CarouselImages, NotificationString } =
    props.landingPageData;
  const {
    ContentImageLilst,
    subtitle: AcheivementsSubTitle,
    title: AcheivementsTitle,
  } = props.acheivementsData;

  const {
    title: DirectorsTitle,
    subtitle: DirectorsSubtitle,
    DirectorCard: DirectorCardData,
  } = props.directorWordData;

  const {
    title: SpecialTitle,
    subtitle: SpecialSubTitle,
    FullImage,
    SpecialCard,
  } = props.specialData;

  const { title: endTitle, subtitle: endSubtitle } = props.endWordData;

  const {
    title: commentTitle,
    subtitle: commentSubtitle,
    CommentCard,
  } = props.commentsData;

  const imageList = CarouselImages.data.map(
    (imageEntry) => imageEntry.attributes.image.data.attributes.url
  );

  return (
    <Space direction="vertical">
      <Landing
        MainHeading={MainHeading}
        MainSubtitle={MainSubtitle}
        CarouselImages={imageList}
        NotificationString={NotificationString}
      />
      <EventSection
        title={AcheivementsTitle}
        subtitle={AcheivementsSubTitle}
        imageList={ContentImageLilst}
      />
      <DirectorWords
        title={DirectorsTitle}
        subtitle={DirectorsSubtitle}
        directorCards={DirectorCardData}
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
  const { data, error } = await client.query({ query: GetLandingPageDetails });
  console.log("the reult is ", data, error);
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
