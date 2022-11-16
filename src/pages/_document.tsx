import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import { Provider as StyletronProvider } from "styletron-react";
import {
  // eslint-disable-next-line no-unused-vars
  Server,
} from "styletron-engine-atomic";
import { ServerStyleSheets } from "@material-ui/core/styles";
import { styletron } from "../styletron";

// class MyDocument extends Document<{ stylesheets: Sheet[] }> {
class MyDocument extends Document<{ stylesheets: any[] }> {
  // Material UI worked with this
  // react-onclickouside shouldn't be used with this
  // Need to make the base ui work
  static async getInitialProps(ctx) {
    const mateiralUiStyleSheets = new ServerStyleSheets();
    const basewebStyleSheets = (styletron as Server).getStylesheets() || [];

    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App: any) =>
          function EnhanceApp(props) {
            return (
              <StyletronProvider value={styletron}>
                {mateiralUiStyleSheets.collect(
                  <App {...props} displayName="App" />
                )}
              </StyletronProvider>
            );
            // return <App {...props} displayName="App" />
          },
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component: any) =>
          function EnhanceComponent(props) {
            return <Component {...props} />;
          },
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    // console.log("basewebStyleSheets");
    // console.log(basewebStyleSheets);
    // [{ css: '', attrs: {} }]

    // console.log("mateiralUiStyleSheets");
    // console.log(mateiralUiStyleSheets);
    // ServerStyleSheets {
    //   options: { },
    //   sheetsRegistry: SheetsRegistry { registry: [] }
    // }

    // console.log("initialProps.styles");
    // console.log(initialProps.styles);

    return {
      ...initialProps,
      stylesheets: basewebStyleSheets,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        mateiralUiStyleSheets.getStyleElement(),
      ],
    };
  }

  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs["data-hydrate"]}
              key={i}
            />
          ))}
          {/* https://nextjs.org/docs/messages/no-stylesheets-in-head-component */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            href="https://fonts.cdnfonts.com/css/satoshi"
            rel="stylesheet"
          />
          <link
            href="https://fonts.cdnfonts.com/css/manrope"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// Resolution order
//
// On the server:
// 1. app.getInitialProps
// 2. page.getInitialProps
// 3. document.getInitialProps
// 4. app.render
// 5. page.render
// 6. document.render
//
// On the server with error:
// 1. document.getInitialProps
// 2. app.render
// 3. page.render
// 4. document.render
//
// On the client
// 1. app.getInitialProps
// 2. page.getInitialProps
// 3. app.render
// 4. page.render
