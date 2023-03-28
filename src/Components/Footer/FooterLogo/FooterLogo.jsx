const { Space } = require("antd");
import { Typography } from "antd";
import classes from "../Footer.module.css";

const { Text, Link } = Typography;

const FooterLogo = ({ padding, backgroundColor }) => {
  return (
    <Space
      style={{
        padding,
        backgroundColor,
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

export default FooterLogo;
