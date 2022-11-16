import React, { useState, useEffect } from "react";

import {
  PortfolioListContainer,
  
  PortfolioCard,

  PortfolioImageWrapper,
  PortfolioImage,

  PortfolioTitle,
  PortfolioDescription,
} from "./PortfolioListCSS";

import PortfolioListForOwnerButtons from "./PortfolioListForOwnerButtons";

import UpdatePortfolioForm from "../UpdatePortfolioForm";
import { findPortfolioListByUsername } from "../../../api/portfolio";

const PortfolioList = ({
  username,
  isOwner,

  profile_image
}) => {
  const [showUpdatePortfolioForm, setShowUpdatePortfolioForm] = useState(false);
  const [portfolioIdToUpdate, setPortfolioIdToUpdate] = useState(null);

  const [portfolioList, setPortfolioList] = useState(null);

  useEffect(() => {
    findPortfolioListByUsername(username)
      .then(({ data, error }) => {
        if (data) {
          setPortfolioList(data);
          return;
        }

        if (error) {
          console.log("error");
          console.error(error);
        }
      })
      .catch(error => {
        console.log("error");
        console.error(error);
      });

    // return () => {
    //   setPortfolioList([]);
    // };
  }, []);

  // No data from server, show loading?
  if (portfolioList === null) {
    return null;
  }

  // Data from server, show notification?
  if (portfolioList.length === 0) {
    return null;
  }

  // console.log("portfolioList");
  // console.log(portfolioList);

  // created_at: "2021-04-07T12:15:32.651481"
  // description: "The pandemic has caused an enormous shift in the way the world works. Companies had to adapt, and we see that remote working has become a reality."
  // id: "7dd66d7a-22f6-45eb-9274-614464c28edc"
  // image: "http://localhost:8000/public/portfolio/image/wGD3o3O409FpLUCQqQweRjTV9aI14wiMmmgB3kNcUgbs7Zw1.jpeg"
  // link: "https://www.codenjobs.com"
  // title: "5 tips to find the best remote jobs"
  // updated_at: null

  // Refer to this https://remoteworkers.net/blog
  return (
    <>
      <PortfolioListContainer>
        {portfolioList.map(({
          id,
          image,
          title,
          description,
          link,
        }) => {
          // alert(id);
          
          return (<PortfolioCard key={id}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                opacity: 0.7,
              }}
            >
              <PortfolioImageWrapper>
                <PortfolioImage
                  // style={{
                  //   opacity: 0.7,
                  // }}
                  src={image}
                />
              </PortfolioImageWrapper>
            </a>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"

              style={{
                textDecoration: "none",
              }}
            >
              <PortfolioTitle>
                {title}
              </PortfolioTitle>
            </a>

            <PortfolioDescription $isOwner={isOwner} >
              {description}
            </PortfolioDescription>

            {/* <div style={{
              padding: "0 2rem 1rem 2rem",
              // padding: "0 2rem 2rem 2rem",
            }}>
              Edit
              Delete
            </div> */}
            {isOwner && <PortfolioListForOwnerButtons
              portfoilo_id={id}
              // key={id}
              
              // portfolioList={portfolioList}
              // setPortfolioList={setPortfolioList}
              setShowUpdatePortfolioForm={setShowUpdatePortfolioForm}
              setPortfolioIdToUpdate={setPortfolioIdToUpdate}
            />}
          </PortfolioCard>);
        })}
      </PortfolioListContainer>

      <UpdatePortfolioForm
        username={username}
        profile_image={profile_image}
        
        portfolioIdToUpdate={portfolioIdToUpdate}
        setPortfolioIdToUpdate={setPortfolioIdToUpdate}

        showUpdatePortfolioForm={showUpdatePortfolioForm}
        setShowUpdatePortfolioForm={setShowUpdatePortfolioForm}
      />
    </>
  );
};

export default PortfolioList;