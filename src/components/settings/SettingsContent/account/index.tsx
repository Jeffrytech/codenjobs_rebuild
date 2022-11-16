// https://github.com/settings/profile
// https://www.reddit.com/settings/profile

import React, { useState } from "react";

import Preferences from "./Preferences";
import Connect from "./Connect";
import Delete from "./Delete";

const Settings = ({
  email,
  github_username,
}) => {
  const [changeEmail, setChangeEmail] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const [removeUser, setRemoveUser] = useState(false);

  return (
    <>
      <Preferences
        email={email}

        changeEmail={changeEmail}
        setChangeEmail={setChangeEmail}
        
        changePassword={changePassword}
        setChangePassword={setChangePassword}

        removeUser={removeUser} // Use this not to affect another modal
      />

      <Connect github_username={github_username} />

      <Delete
        removeUser={removeUser}
        setRemoveUser={setRemoveUser}
      />

    </>
  );
};

export default Settings;