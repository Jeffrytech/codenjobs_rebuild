import React from "react";
import Link from "next/link";

import {
  ForHireListSkillContainer,
  ForHireListSkill,
} from "./ForHireListSkillsCSS";

import { Chip } from "@material-ui/core";

const ForHireListSkills = ({
  job_skills,
}) => {
  // console.log("data");
  // console.log(data);

  return (
    <ForHireListSkillContainer>
      {/* {job_skills && job_skills.slice(0, window.innerWidth > 480 ? 5 : 2).map((job_skill: string) => { */}
      {job_skills && job_skills.map((job_skill: string) => {
        return (
          <Link key={job_skill} href={`/jobs?&skill=${job_skill}`}>
            <ForHireListSkill>
              <Chip
                variant="outlined"
                label={job_skill}

                style={{
                  cursor: "pointer",
                }}
              // color="secondary"
              />
            </ForHireListSkill>
          </Link>
        );
      })}
    </ForHireListSkillContainer>
  );
};

export default ForHireListSkills;