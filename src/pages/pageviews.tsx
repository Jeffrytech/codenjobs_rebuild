import React, { useState, useEffect } from "react";
import Head from "next/head";

// https://react-google-charts.com/
import { Chart } from "react-google-charts";

import Layout from "../components/layouts";
import { COMPANY_NAME, COMPANY_DESCRIPTION, COMPANY_LOGO_WHITE } from "../config/environment";
import { findPageviewsDetails } from "../api/stat";
import PrimarySpinner from "../components/spinners/PrimarySpinner";
import CentralizeChildren from "../components/CentralizeChildren";
import { PageviewsContainer, PageViewsDescription, PageviewsSection } from "../components/totalpageviews/PageViewsCSS";
import Metatags from "../components/Metatags";

// Extract the required datas from the backend.
// Organize this file.
// Include it at sitemap
const Pageviews = () => {
  const title = `${COMPANY_NAME} Monthly Pageviews`;
  const description = `This page shows the details of ${COMPANY_NAME} monthly pageviews`;
  
  // const title = `${COMPANY_NAME} Daily Pageviews`
  // const description = `This page shows the details of ${COMPANY_NAME} daily pageviews`

  const [pageviewDetails, setPageviewDetails] = useState({});

  useEffect(() => {
    findPageviewsDetails().then(({ data }) => {
      setPageviewDetails(data);
    }).catch(error => {
      console.log("error");
      console.error(error);
    });

  }, []);

  const desktop = "desktop";
  const tablet = "tablet";
  const mobile = "mobile";
  const total = "total";

  const desktopPageview = desktop in pageviewDetails ? pageviewDetails[desktop] : 0;
  const tabletPageview = tablet in pageviewDetails ? pageviewDetails[tablet] : 0;
  const mobilePageview = mobile in pageviewDetails ? pageviewDetails[mobile] : 0;
  const totalPageview = total in pageviewDetails ? pageviewDetails[total] : 0;
  
  return (
    <>
      <Metatags
        title={title}
        description={description}
        image={COMPANY_LOGO_WHITE}
        rest={<style dangerouslySetInnerHTML={{
          __html: `
            svg > g > g:last-child {
              pointer-events: none;
            }
          `
        }} />}
      />

      <Layout whiteatmobile={true} >
        <CentralizeChildren>
          <PageviewsContainer>
            <PageviewsSection>
              <h1>
                {/* Our Website stats */}
                Monthly Pageviews
                {/* Daily Pageviews */}
              </h1>

              <PageViewsDescription>
                The datas used here are from Google Analytics.
              </PageViewsDescription>

              <h2 style={{
                // color: "#ff1676"
              }} >
                1. Table
              </h2>
              <Chart
                chartType="Table"
                loader={<PrimarySpinner />}
                data={[
                  [
                    { type: 'string', label: 'Type of device' },
                    { type: 'number', label: 'Pageviews' },
                    // { type: 'number', label: 'Percentage' },
                    // { type: 'number', label: 'Average Session Duration' },
                  ],
                  [
                    'Desktop',
                    { v: desktopPageview, f: desktopPageview },
                    // { v: 90.7, f: '90.7%' }
                  ],
                  [
                    'Tablet',
                    { v: tabletPageview, f: tabletPageview },
                    // { v: 0, f: '0%'},
                  ],
                  [
                    'Mobile',
                    { v: mobilePageview, f: mobilePageview },
                    // { v: 9.3, f: '9.3%' }
                  ],
                  [
                    'Total',
                    { v: totalPageview, f: totalPageview },
                    // { v: 100, f: '100%' }
                  ],
                ]}
                options={{
                  // showRowNumber: true,
                }}
              // rootProps={{ 'data-testid': '1' }}
              />
              <h2>
                2. Pie Chart
              </h2>
              {/* <ChartContainer> */}
              <Chart
                width={'100%'}
                height={'18rem'}
                chartType="PieChart"
                loader={<PrimarySpinner />}
                data={[
                  ['Pageviews', 'Grouped by type of device'],
                  ['Desktop', desktopPageview],
                  ['Tablet', tabletPageview],
                  ['Mobile', mobilePageview],
                ]}
                options={{
                  title: 'Type of device',
                }}
                rootProps={{ 'data-testid': '1' }}
              />
            </PageviewsSection>
              
          </PageviewsContainer>

        </CentralizeChildren>
      </Layout>
    </>
  );
};

export default Pageviews;

// {/* <Head>
//   <title>{title}</title>

//   <meta property="og:title" content={title} />
//   <meta name="twitter:title" content={title} />

//   <meta name="description" content={description} />
//   <meta property="og:description" content={description} />
//   <meta name="twitter:description" content={description} />

//   <meta property="og:image" content={COMPANY_LOGO_WHITE} />
//   <meta name="twitter:image" content={COMPANY_LOGO_WHITE} />
//   <meta name="image" content={COMPANY_LOGO_WHITE} />

//   <meta name="twitter:card" content="summary_large_image" />

//   {/* https://stackoverflow.com/questions/37902708/google-charts-tooltip-flickering/37940389 */}
//   {/* https://github.com/google/google-visualization-issues/issues/2162 */}
//   <style dangerouslySetInnerHTML={{
//     __html: `
//             svg > g > g:last-child {
//               pointer-events: none;
//             }
//           `
//   }} />

// </Head> */}
