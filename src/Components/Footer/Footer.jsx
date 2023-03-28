import { Col, Row, Space } from "antd";
import React from "react";
import { Typography } from "antd";

const { Text, Link } = Typography;
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <>
      <Row className={classes["footer"]} gutter={[24, 56]}>
        <Col xs={24} sm={24} md={12} lg={6}>
          <FooterLinkSection
            text="Srivani Global school"
            items={[
              { linkText: "Tour", linkUrl: "https://www.google.com" },
              { linkText: "Campus", linkUrl: "https://www.google.com" },
              { linkText: "Our Teachers", linkUrl: "https://www.google.com" },
              { linkText: "About us", linkUrl: "https://www.google.com" },
              { linkText: "Admissions", linkUrl: "https://www.google.com" },
              {
                linkText: "A word from directors",
                linkUrl: "https://www.google.com",
              },
            ]}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <FooterLinkSection
            text="Events"
            items={[
              {
                linkText: "Student Acheivements",
                linkUrl: "https://www.google.com",
              },
              { linkText: "Culturals", linkUrl: "https://www.google.com" },
              { linkText: "Mini projects", linkUrl: "https://www.google.com" },
              {
                linkText: "Success stories",
                linkUrl: "https://www.google.com",
              },
            ]}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <FooterLinkSection
            text="Contact Us"
            items={[
              {
                linkText: "Phone: 9099099909",
                linkUrl: "",
              },
              {
                linkText: "Email us at: srivaniglobalschool@gmail.com",
                linkUrl: "",
              },
            ]}
            suffix={<SocialIcons />}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <FooterLinkSection text="Address" suffix={<FooterAddress />} />
        </Col>
      </Row>
      <FooterLogo />
    </>
  );
};

const FooterLinkSection = ({ text, items, suffix }) => {
  return (
    <Space direction="vertical" size={24}>
      <Text className={classes["footer-text--title"]}>{text}</Text>
      <Space direction="vertical">
        {items?.map((item, index) => {
          return (
            <a
              className={classes["footer-text--link"]}
              href={item.linkUrl}
              key={index}
            >
              {item.linkText}
            </a>
          );
        })}
      </Space>
      {suffix}
    </Space>
  );
};

const FooterAddress = () => {
  return (
    <div className={classes["footer-text-address"]}>
      <p>
        Malikipuram some random street, some random road, house number some
        random district, Ambedkar konaseema ???? vaddhu.. normal konaseema ..
      </p>
    </div>
  );
};

const FooterLogo = () => {
  return (
    <Space
      style={{
        padding: "0rem 10.2rem 8rem 10.2rem",
        backgroundColor: "var(--primary-gray)",
      }}
      size={24}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          backgroundColor: "var(--primary-color)",
        }}
      ></div>
      <Text className={classes["footer-text--link"]} style={{ lineHeight: 0 }}>
        © 2023 - Srivani Global schools
        <br />
        Terms of Service Privacy Policy
      </Text>
    </Space>
  );
};

const SocialIcons = () => {
  return (
    <Space>
      <div
        style={{
          backgroundColor: "var(--fontcolor-secondary)",
          width: 36,
          height: 36,
          borderRadius: 8,
        }}
      />
      <div
        style={{
          backgroundColor: "var(--fontcolor-secondary)",
          width: 36,
          height: 36,
          borderRadius: 8,
        }}
      />
      <div
        style={{
          backgroundColor: "var(--fontcolor-secondary)",
          width: 36,
          height: 36,
          borderRadius: 8,
        }}
      />
    </Space>
  );
};

export default Footer;
