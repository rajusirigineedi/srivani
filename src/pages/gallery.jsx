import AboutUsLanding from "@/Components/About/AboutUsLanding/AboutUsLanding";
import Acheivments from "@/Components/Acheivements/Acheivments";
import EndWord from "@/Components/Home/EndWord/EndWord";
import { MiniGallery } from "@/Components/MiniGallery/MiniGallery";
import useFolderImageshook from "@/hooks/useFolderImageshook";
import { GetEndWords } from "@/Services/graphql/landing";
import { Space } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import client from "../../apollo-client";
const Gallery = (props) => {
  const router = useRouter();
  const queryName = router?.query?.albumName;
  const { title: endTitle, subtitle: endSubtitle } = props.endWordData;

  return (
    <Space direction="vertical">
      <MiniGallery
        folder={queryName}
        title={queryName}
        subTitle="The future belongs to our students, and we are dedicated to helping them realize their dreams and achieve their goals. Below are some recent acheivements."
      />
      <EndWord title={endTitle} subtitle={endSubtitle} />
    </Space>
  );
};

export async function getServerSideProps(context) {
  const { data, error } = await client.query({ query: GetEndWords });
  if (error)
    return {
      props: {
        error: "Backend might be down",
      },
    };
  return {
    props: {
      endWordData: data.endWord.data.attributes,
    },
  };
}

export default Gallery;
