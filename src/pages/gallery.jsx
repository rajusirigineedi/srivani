import AboutUsLanding from "@/Components/About/AboutUsLanding/AboutUsLanding";
import Acheivments from "@/Components/Acheivements/Acheivments";
import EndWord from "@/Components/Home/EndWord/EndWord";
import { MiniGallery } from "@/Components/MiniGallery/MiniGallery";
import useFolderImageshook from "@/hooks/useFolderImageshook";
import { Space } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const Gallery = (props) => {
  const router = useRouter();
  const queryName = router?.query?.albumName;
  const [totalData, setTotalData] = useState();
  const { getFolderImages } = useFolderImageshook();

  useEffect(() => {
    if (!queryName) {
      return;
    }
    const _data = getFolderImages(queryName);
    setTotalData(_data);
  }, [getFolderImages, queryName]);

  return (
    <Space direction="vertical">
      <section>
        {totalData && totalData.length && (
          <MiniGallery
            imageList={totalData}
            title={queryName}
            subTitle="The future belongs to our students, and we are dedicated to helping them realize their dreams and achieve their goals. Below are some recent acheivements."
          />
        )}
      </section>

      <section>
        <EndWord />
      </section>
    </Space>
  );
};

export default Gallery;
