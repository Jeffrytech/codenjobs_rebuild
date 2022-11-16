import React from "react";
import Link from "next/link";

import {
  JobListSkillContainer,
  JobListSkill,
} from "./JobListSkillsCSS";

import { Chip } from "@material-ui/core";

const JobListSkills = ({
  job_skills,
}) => {
  // console.log("data");
  // console.log(data);

  return (
    <JobListSkillContainer>
      {/* {job_skills && job_skills.slice(0, window.innerWidth > 480 ? 5 : 2).map((job_skill: string) => { */}
      {job_skills && job_skills.map((job_skill: string) => {
        return (
          <Link key={job_skill} href={`/jobs?&skill=${job_skill}`}>
            <JobListSkill>
              <Chip
                variant="outlined"
                label={job_skill}

                style={{
                  cursor: "pointer",
                }}
              // color="secondary"
              />
            </JobListSkill>
          </Link>
        );
      })}
    </JobListSkillContainer>
  );
};

export default JobListSkills;