"use client";
import { Layout, Menu, MenuProps, Switch } from "antd";
import classes from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  getItem(<Link href={"/menu"}>Menu</Link>, "/menu"),
  getItem(<Link href={"/cart"}>Cart</Link>, "/cart"),
  getItem("Orders", "3"),
  getItem("Book", "4"),
  getItem("Tables", "5"),
  getItem("Chatbot", "6"),
];

const HeaderLayout = () => {
  const pathname = usePathname();

  const { Header } = Layout;
  return (
    <>
      <Header
        style={{
          background: "#fefae0",
        }}
        className={classes["header"]}
      >
        <Link
          href={"/"}
          style={{
            color: pathname === "/" ? "brown" : "black",
          }}
        >
          Coffeeland
        </Link>

        <div>
          <Menu
            style={{
              background: "#fefae0",
            }}
            theme="light"
            selectedKeys={[pathname as string]}
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
