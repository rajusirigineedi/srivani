import Acheivments from "@/Components/Acheivements/Acheivments";
import Events from "@/Components/Events/Events";
import EndWord from "@/Components/Home/EndWord/EndWord";
import { EventPageDetails } from "@/Services/graphql/landing";
import { Space } from "antd";
import React from "react";
import client from "../../apollo-client";
const Acheivements = (props) => {
  const { BigTitle: endTitle } = props.endWordData;
  const { BigTitle: eventsTitle } = props.eventsPageData;
  const { data: imageFolders } = props.folderData;

  return (
    <Space direction="vertical">
      <Events bigTitle={eventsTitle} imageFolders={imageFolders} />
      <EndWord bigTitle={endTitle} />
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
