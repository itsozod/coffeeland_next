"use client";
import { Layout } from "antd";
import React, { ReactNode } from "react";

const ContentLayout = ({ children }: { children: ReactNode }) => {
  const { Content } = Layout;
  return <Content>{children}</Content>;
};

export default ContentLayout;
