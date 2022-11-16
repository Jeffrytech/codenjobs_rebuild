// import React from "react";
// import Link from "next/link";

// import {
//   IndexHeroContainer,
//   IndexHeroContentWrapper,
//   IndexHeroWebsite,
//   IndexHeroTitle,
//   IndexHeroButtonWrapper,
//   GetStartedButton,
//   FindJobButton
// } from "./IndexHeroCSS";

// import { useAuth } from "../../contexts/auth";

// import { COMPANY_WEBSITE } from "../../config/environment";

// const IndexHero = () => {
//   const {
//     // @ts-ignore
//     user,
//   } = useAuth();

//   return (
//     <IndexHeroContainer>
//       <IndexHeroContentWrapper>
//         <IndexHeroWebsite>
//           {COMPANY_WEBSITE}
//         </IndexHeroWebsite>
//         <IndexHeroTitle>
//           The worldwide crypto network to help you
//         </IndexHeroTitle>
//         <IndexHeroButtonWrapper>
//           <Link href={user === null ? "/register" : "/job/post"} >
//             <GetStartedButton>
//               {user === null ? "Get Started" : "Post a job"}
//               {/* {user === null ? "Get Started" : "Post a job"} */}
//             </GetStartedButton>
//           </Link>
//           <Link href={user === null ? "/company/about" : "/jobs"} >
//             <FindJobButton>
//               {user === null ? "Our Services" : "FIND A JOB"}
//             </FindJobButton>
//           </Link>
//           {/* <Link href="/jobs" >
//             <FindJobButton>
//               FIND A JOB
//             </FindJobButton>
//           </Link> */}
//         </IndexHeroButtonWrapper>
//       </IndexHeroContentWrapper>
//     </IndexHeroContainer>
//   );
// };

// export default IndexHero;