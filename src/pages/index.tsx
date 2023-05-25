import { Button, Layout } from "antd";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hackaton</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Link href="/survey">
          <Button>К странице теста</Button>
        </Link>
      </Layout>
    </>
  );
};

export default Home;
