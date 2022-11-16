import React from "react";

import Link from "next/link";
import { Chip } from "@material-ui/core";

import {
  JobPostSkillContainer,
  JobPostSkillsWrapper,
  Skill,
} from "./JobPostSkillsCSS";

{/* {job_skills && <JobPostSkillContainer>
          <JobPostSkillsWrapper>
            {job_skills.map((job_skill: string) => {
              return (
                <Link key={job_skill} href={`/jobs?&skill=${job_skill}`}>
                  <JobPostSkill key={job_skill} >
                    <Chip
                      variant="outlined"
                      label={job_skill}

                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </JobPostSkill>
                </Link>
              );
            }
            )}
          </JobPostSkillsWrapper>
        </JobPostSkillContainer>} */}

const JobPostSkills = ({
  job_skills,
  isPreview,
}) => {
  return (
    job_skills && <JobPostSkillContainer>
      <JobPostSkillsWrapper>
        {job_skills.map((job_skill: string) => {
          if (isPreview) {
            return (
              <Skill key={job_skill} $isPreview={isPreview} >
                <Chip
                  variant="outlined"
                  label={job_skill}
                // color="secondary"
                />
              </Skill>
            );
          } else {
            return (
              // <Link key={job_skill} href={`/jobs?&skill=${job_skill}`}>
              <Link key={job_skill} href={`/jobs?&skill=${encodeURIComponent(job_skill)}`}>
                <Skill key={job_skill} $isPreview={isPreview} >
                  <Chip
                    variant="outlined"
                    label={job_skill}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </Skill>
              </Link>
            );
          }
        }
        )}
      </JobPostSkillsWrapper>
    </JobPostSkillContainer>
  );
};

export default JobPostSkills;
