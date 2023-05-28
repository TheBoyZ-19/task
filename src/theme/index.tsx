import React from "react";
import { ConfigProvider, Layout } from "antd";

const withTheme = (node: JSX.Element) => (
  <>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Golos-Text,sans-serif",
          colorPrimary: "#008C46",
        },
      }}
    >
      <Layout
        style={{
          backgroundColor: "#1E1E1E",
          minHeight: "100vh",
        }}
      >
        {node}
      </Layout>
    </ConfigProvider>
  </>
);

export default withTheme;
