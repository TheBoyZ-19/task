import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ConfigProvider } from "antd";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ConfigProvider theme={{
      token: {
        fontFamily: 'Golos-Text, sans-serif'
      }
    }}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ConfigProvider>
  );
};

export default api.withTRPC(MyApp);
