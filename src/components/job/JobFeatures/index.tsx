import React from "react";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Money from "@material-ui/icons/AttachMoneyRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import {
  JobFeaturesContainer,
  JobFeatureWrapper,
} from "./JobFeaturesCSS";
import Link from "next/link";
import { Tooltip } from "@material-ui/core";
import BitcoinImage from "../../../crypto/BitcoinImage";

const JobFeatures = ({
  job_category,

  job_type,
  job_salary,
  job_location,
  job_pay_in_cryptocurrency,

  isPreview,
}) => {
  // alert(job_category);
  
  if (isPreview) {
    return <JobFeaturesContainer>
      <JobFeatureWrapper $isPreview={isPreview} >
        <img
          src={"/static/logo_white.png"}
          style={{
            width: "1rem",
          }}
        />
        <span style={{
          marginLeft: "0.25rem",
        }}>
          {job_category}
        </span>
      </JobFeatureWrapper>

      <JobFeatureWrapper $isPreview={isPreview} >
        <AccountBoxIcon style={{
          fontSize: "1.25rem",
          // marginLeft: "0.1rem",
        }} />
        <span style={{
          marginLeft: "0.25rem",
        }}>
          {job_type}
        </span>
      </JobFeatureWrapper>

      <JobFeatureWrapper $isPreview={isPreview} >
        <Money
          style={{ fontSize: "1rem", marginLeft: "0.1rem", marginRight: "0.1rem", color: "white", backgroundColor: "rgb(37, 191, 161)" }}
        />
        <span style={{
          marginLeft: "0.25rem",
        }}>
          {job_salary}
        </span>
      </JobFeatureWrapper>

      <JobFeatureWrapper $isPreview={isPreview} >
        <LocationOnIcon style={{
          fontSize: "1.25rem",
          // marginLeft: "0.1rem",
        }} />
        <span style={{
          marginLeft: "0.1rem",
        }}>
          {job_location}
        </span>
      </JobFeatureWrapper>
      
      <Tooltip title="Pay in cryptocurrency" arrow >
        <JobFeatureWrapper $isPreview={isPreview} >
          <BitcoinImage />
          <span style={{
            marginLeft: "0.25rem",
          }}>
            {job_pay_in_cryptocurrency ? "Yes" : "No"}
          </span>
        </JobFeatureWrapper>
      </Tooltip>

    </JobFeaturesContainer>;
  } else {
    return <JobFeaturesContainer>
      <Link href={`/jobs?&category=${job_category}`} >
        <JobFeatureWrapper $isPreview={isPreview} >
          <img 
            src={"/static/logo_white.png"}
            style={{
              width: "1rem",
            }}
          />
          <span style={{
            marginLeft: "0.25rem",
          }}>
            {job_category}
          </span>
        </JobFeatureWrapper>
      </Link>

      <Link href={`/jobs?&type=${job_type}`} >
        <JobFeatureWrapper $isPreview={isPreview} >
          <AccountBoxIcon style={{
            fontSize: "1.25rem",
          }} />
          <span style={{
            marginLeft: "0.25rem",
          }}>
            {job_type}
          </span>
        </JobFeatureWrapper>
      </Link>

      <Link href={`/jobs?&salary=${job_salary}`} >
        <JobFeatureWrapper $isPreview={isPreview} >
          <Money
            style={{ fontSize: "1rem", marginLeft: "0.1rem", marginRight: "0.1rem", color: "white", backgroundColor: "rgb(37, 191, 161)" }}
          />
          <span style={{
            marginLeft: "0.25rem",
          }}>
            {job_salary}
          </span>
        </JobFeatureWrapper>
      </Link>

      <Link href={`/jobs?&location=${job_location}`} >
        <JobFeatureWrapper $isPreview={isPreview} >
          <LocationOnIcon style={{
            fontSize: "1.25rem",
            // marginLeft: "0.1rem",
          }} />
          <span style={{
            marginLeft: "0.1rem",
          }}>
            {job_location}
          </span>
        </JobFeatureWrapper>
      </Link>

      <Link href={`/jobs?&pay_in_cryptocurrency=${job_pay_in_cryptocurrency}`} >
        <Tooltip title="Pay in cryptocurrency" arrow >
          <JobFeatureWrapper $isPreview={isPreview} >
            <BitcoinImage />
            <span style={{
              marginLeft: "0.25rem",
            }}>
              {job_pay_in_cryptocurrency ? "Yes" : "No"}
            </span>
          </JobFeatureWrapper>
        </Tooltip>
      </Link>
      
      
    </JobFeaturesContainer>;
  }
};

export default JobFeatures;

