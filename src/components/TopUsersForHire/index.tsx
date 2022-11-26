import React, { useState, useEffect } from "react";
import { Avatar } from "baseui/avatar";

import { COMPANY_LOGO } from "../../config/environment";
import { findTopUsersForHire } from "../../api/user";
import Link from "next/link";

const TopUsersForHire = ({ limit = 10 }) => {
  const [topUsersForHireList, setTopUsersForHireList] = useState(null);

  useEffect(() => {
    // Make an end point for this later?
    findTopUsersForHire(limit)
      .then(({ data, error }) => {
        // console.log("data");
        // console.log(data);

        if (error) {
          console.log("findTopUsersForHire error");
          console.error(error);
        }

        const { forhireList } = data;
        setTopUsersForHireList(forhireList);
      })
      .catch((catchError) => {
        console.error("findTopUsersForHire catchError");
        console.error(catchError);
      });
  }, []);

  if (topUsersForHireList === null) {
    return null;
  }

  return (
    <div>
      <Link href="/forhire?sort=top" passHref>
        <h5>Top Users For Hire</h5>
      </Link>

      <div className="space-y-3">
        {topUsersForHireList.map(({ username, profile_image }) => (
          <div key={username}>
            <Link href={`/user/${username}`} target="_blank" passHref>
              <div className="flex items-center gap-2">
                {/* @ts-ignore */}
                <Avatar
                  name={username}
                  size="2rem"
                  src={profile_image || COMPANY_LOGO}
                />
                <span>{username}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsersForHire;
