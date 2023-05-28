﻿import { StyleProvider, createCache } from "@ant-design/cssinjs";
import Document, {
  Head,
  Html,
  Main,
  NextScript,
  type DocumentContext,
} from "next/document";
import { doExtraStyle } from "../scripts/genAntdCss";
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const cache = createCache();
    let fileName = "";
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <StyleProvider cache={cache}>
              <App {...props} />
            </StyleProvider>
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);
    fileName = doExtraStyle({
      cache,
    });
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {fileName && <link rel="stylesheet" href={`/${fileName}`} />}
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
