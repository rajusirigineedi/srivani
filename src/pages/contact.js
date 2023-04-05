import ContactSection from "@/Components/Contact/ContactSection";
import EndWord from "@/Components/Home/EndWord/EndWord";
import { ContactPageDetails } from "@/Services/graphql/landing";
import { Space } from "antd";
import React from "react";
import client from "../../apollo-client";

const contact = (props) => {
  const { title: endTitle, subtitle: endSubtitle } = props.endWordData;
  const { title, subtitle, locationTitle, locationSubtitle, locationImage } =
    props.contactData;
  return (
    <Space direction="vertical">
      <ContactSection
        title={title}
        subtitle={subtitle}
        locationTitle={locationTitle}
        locationSubtitle={locationSubtitle}
        locationImage={locationImage}
      />
      <EndWord title={endTitle} subtitle={endSubtitle} />
    </Space>
  );
};

export async function getServerSideProps(context) {
  const { data, error } = await client.query({ query: ContactPageDetails });
  if (error)
    return {
      props: {
        error: "Backend might be down",
      },
    };
  return {
    props: {
      contactData: data.contactPage.data.attributes,
      endWordData: data.endWord.data.attributes,
    },
  };
}

export default contact;
