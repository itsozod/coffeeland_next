"use client";
import { Layout, Menu, MenuProps, Switch } from "antd";
import classes from "./Header.module.css";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Menu", "1"),
  getItem("Cart", "2"),
  getItem("Orders", "3"),
  getItem("Book", "4"),
  getItem("Tables", "5"),
  getItem("Chatbot", "6"),
];

const HeaderLayout = () => {
  const { Header } = Layout;
  return (
    <>
      <Header
        style={{
          background: "#fefae0",
        }}
        className={classes["header"]}
      >
        <div>Coffeeland</div>
        <div>
          <Menu
            style={{
              background: "#fefae0",
            }}
            theme="light"
            defaultSelectedKeys={["1"]}
            mode="horizontal"
            items={items}
          />
        </div>
        <Switch />
      </Header>
    </>
  );
};

export default HeaderLayout;
