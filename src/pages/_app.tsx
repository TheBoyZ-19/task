import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import { ConfigProvider, Layout } from "antd";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
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
          <Component {...pageProps} />
        </Layout>
      </ConfigProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
