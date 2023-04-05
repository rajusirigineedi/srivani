import Acheivments from "@/Components/Acheivements/Acheivments";
import Events from "@/Components/Events/Events";
import EndWord from "@/Components/Home/EndWord/EndWord";
import { EventPageDetails } from "@/Services/graphql/landing";
import { Space } from "antd";
import React from "react";
import client from "../../apollo-client";
const Acheivements = (props) => {
  const { title: endTitle, subtitle: endSubtitle } = props.endWordData;
  const { title: eventsTitle, subtitle: eventsSubtitle } = props.eventsPageData;
  const { data: imageFolders } = props.folderData;

  return (
    <Space direction="vertical">
      <Events
        title={eventsTitle}
        subtitle={eventsSubtitle}
        imageFolders={imageFolders}
      />
      <EndWord title={endTitle} subtitle={endSubtitle} />
    </Space>
  );
};
export async function getServerSideProps(context) {
  const { data, error } = await client.query({
    query: EventPageDetails,
  });
  if (error)
    return {
      props: {
        error: "Backend might be down",
      },
    };
  return {
    props: {
      eventsPageData: data.eventsPage.data.attributes,
      endWordData: data.endWord.data.attributes,
      folderData: data.imageFolders,
    },
  };
}

export default Acheivements;
