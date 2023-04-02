import BigTitle from "@/Components/BigTitle/BigTitle";
import CustomButton from "@/Components/CustomButton/CustomButton";
import Directors from "@/Components/Directors/Directors";
import Features from "@/Components/Features/Features";
import React from "react";
import { Space } from "antd";
import Contact from "@/Components/Contact/Contact";
import DirectorCard from "@/Components/DirectorCard/DirectorCard";

const test = (props) => {
  return (
    <div style={{ width: "100%", height: "3000px" }}>
      <h1>Test your components here..</h1>
      <h4>Button Component : </h4>
      <CustomButton text={"hellow"} />

      <BigTitle title="Srivani Global School is committed to providing our students with the
      skills, knowledge, and opportunities they need to succeed in the future."
        colorIndex={[0, 1, 2]}
        subTitle="With a focus on innovation, creativity, and critical thinking, our
      school is helping to shape the next generation of leaders and innovators"/>


      <div style={{height:"150px"}}>

      </div>


      <Directors image="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        title="Raviteja Sunkara" 
        subTitle="Director and vice president, MBBS FRCS"
        text="New methods in the teaching."
        paragraph="By encouraging curiosity, exploration, and a love of learning, we are empowering our students to achieve their full potential and make a positive impact on the world." 
      />      
      
      <div style={{height:"150px"}}>

      </div>

      <Space>
        <Features logo="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          text="Powered by LEAD.Bringing power to education"
          paragraph="Drag and drop elements - quickly and easily - from a comprehensive library of widgets and smart-shapes."
        />
        <Features logo="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          text="Powered by LEAD.Bringing power to education"
          paragraph="Drag and drop elements - quickly and easily - from a comprehensive library of widgets and smart-shapes."
        />
        <Features logo="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          text="Powered by LEAD.Bringing power to education"
          paragraph="Drag and drop elements - quickly and easily - from a comprehensive library of widgets and smart-shapes."
        />
      </Space>
      
      <div style={{height:"150px"}}>

      </div>
      <DirectorCard title="Raviteja Sunkara"
      rolee="10th Class,Section A"
      description="IAm very lucky to join in srivani global schools because of srivani global schools i got AIR-7 in IIT Advanced.Thank you srivani schools."
      />

      <Contact/>
    </div>
  );
};

export default test;
