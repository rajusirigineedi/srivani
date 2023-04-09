import FooterLogo from "@/Components/Footer/FooterLogo/FooterLogo";

const {
  default: CustomButton,
} = require("@/Components/CustomButton/CustomButton");
const { Drawer, Space } = require("antd");
const { NavLinks } = require("../NavLinks/NavLinks");

const HeaderDrawer = ({ showDrawer, setShowDrawer }) => {
  const closeDrawer = () => {
    setShowDrawer(false);
  };
  return (
    <Drawer
      open={showDrawer}
      bodyStyle={{
        justifyContent: "center",
        padding: 0,
        paddingBottom: 36,
        display: "flex",
      }}
      onClose={closeDrawer}
    >
      <Space
        direction="vertical"
        style={{
          justifyContent: "space-between",
          marginTop: 36,
        }}
      >
        <Space
          style={{ width: "100%", marginTop: 36 }}
          direction="vertical"
          align="center"
          size={36}
        >
          <NavLinks closeDrawer={closeDrawer} direction={"vertical"} />
          <CustomButton text={"Join now"} />
        </Space>
        <FooterLogo />
      </Space>
    </Drawer>
  );
};

export default HeaderDrawer;
