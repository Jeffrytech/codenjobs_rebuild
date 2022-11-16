import React from "react";
import Link from "next/link";

import {
  HiringListSkillContainer,
  HiringListSkill,
} from "./HiringListSkillsCSS";

import { Chip } from "@material-ui/core";

const HiringListSkills = ({
  job_skills,
}) => {
  // console.log("data");
  // console.log(data);

  return (
    <HiringListSkillContainer>
      {/* {job_skills && job_skills.slice(0, window.innerWidth > 480 ? 5 : 2).map((job_skill: string) => { */}
      {job_skills && job_skills.map((job_skill: string) => {
        return (
          <Link key={job_skill} href={`/jobs?&skill=${job_skill}`}>
            <HiringListSkill>
              <Chip
                variant="outlined"
                label={job_skill}

                style={{
                  cursor: "pointer",
                }}
              // color="secondary"
              />
            </HiringListSkill>
          </Link>
        );
      })}
    </HiringListSkillContainer>
  );
};

export default HiringListSkills;