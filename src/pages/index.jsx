import DirectorWords from "@/Components/Home/DirectorWords/DirectorWords";
import EndWord from "@/Components/Home/EndWord/EndWord";
import EventSection from "@/Components/Home/EventSection/EventSection";
import FeatureSection from "@/Components/Home/FeatureSection/FeatureSection";
import Landing from "@/Components/Home/Landing/Landing";
import Testimonials from "@/Components/Home/Testimonials/Testimonials";
import { useQuery, gql } from "@apollo/client";
import { Space } from "antd";
import React from "react";

const QUERY = gql`
  # Write your query or mutation here
  query AllFolders {
    imageFolders {
      data {
        attributes {
          folder
          title
          images {
            data {
              attributes {
                title
                info
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
const Home = (props) => {
  const { data, loading, error } = useQuery(QUERY);
  console.log(data, loading, error);
  return (
    <Space direction="vertical">
      <Landing />
      <EventSection />
      <DirectorWords />
      <FeatureSection />
      <Testimonials />
      <EndWord />
    </Space>
  );
};

export default Home;
