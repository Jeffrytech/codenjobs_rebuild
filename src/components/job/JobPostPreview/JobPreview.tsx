import React from "react";

import {
  JobPreviewContainer,

  JobHeader,
  JobTitle,
  JobDescription,
} from "./JobPreviewCSS";

// import MarkdownRenderer from "../../MarkdownRenderer";
import JobFeatures from "../JobFeatures";
import PostedBy from "../../PostedBy";
import JobPostSkills from "../JobPostSkills";
import How from "../How";
import PostRenderer from "../../markdown/PostRenderer";

const JobPreview = ({
  company_name,
  company_website,

  username,

  job_title,
  job_category,
  job_location,
  job_how_to_apply,

  job_salary,
  job_pay_in_cryptocurrency,

  job_description,

  job_type,
  job_skills
}) => {
  return (
    <JobPreviewContainer>
      <JobHeader>
        <PostedBy 
          username={username}
          published_at={null}
        />

        <JobTitle>
          {`${job_title}`}
        </JobTitle>

        <JobFeatures 
          job_category={job_category}
          job_type={job_type}
          job_salary={job_salary}
          job_location={job_location}
          job_pay_in_cryptocurrency={job_pay_in_cryptocurrency}

          isPreview={true}
        />
      </JobHeader>

      {/* https://github.com/remarkjs/react-markdown */}
      {/* https://github.com/remarkjs/react-markdown#appendix-b-node-types */}
      <JobDescription>
        <PostRenderer 
          input={job_description}
        />
      </JobDescription>
      
      <How 
        company_name={company_name}
        company_website={company_website}

        job_how_to_apply={job_how_to_apply}
      />

      <JobPostSkills 
        job_skills={job_skills}
        isPreview={true}
      />
    </JobPreviewContainer>
  );
};

export default JobPreview;