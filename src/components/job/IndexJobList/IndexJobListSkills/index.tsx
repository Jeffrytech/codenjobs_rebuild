import React from "react";
import Link from "next/link";

import {
  IndexJobListSkillContainer,
  IndexJobListSkill,
} from "./IndexJobListSkillsCSS";

import { Chip } from "@material-ui/core";

const IndexJobListSkills = ({
  job_skills,
}) => {
  // console.log("data");
  // console.log(data);

  return (
    <IndexJobListSkillContainer>
      {/* {job_skills && job_skills.slice(0, window.innerWidth > 480 ? 5 : 2).map((job_skill: string) => { */}
      {job_skills && job_skills.map((job_skill: string) => {
        return (
          <Link key={job_skill} href={`/jobs?&skill=${encodeURIComponent(job_skill)}`}>
            {/* <Link key={job_skill} href={`/jobs?&skill=${job_skill}`}> */}
            <IndexJobListSkill>
              <Chip
                variant="outlined"
                label={job_skill}

                style={{
                  cursor: "pointer",
                }}
              // color="secondary"
              />
            </IndexJobListSkill>
          </Link>
        );
      })}
    </IndexJobListSkillContainer>
  );
};

export default IndexJobListSkills;