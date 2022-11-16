import React from "react";
import GitHubAuth from "../../components/auth/GitHubAuth";

import { useAuth } from "../../contexts/auth";

// import { authorize } from "../../api/github";

// login -> GitHub?

const GitHub = ({
  code,
  state,
}) => {
  const {
    // @ts-ignore
    user,
    // @ts-ignore
    loading,
  } = useAuth();

  return (<GitHubAuth
    user={user}
    loading={loading}

    code={code}
    state={state}
  />);
};

export async function getServerSideProps({
  query
}) {
  const {
    code,
    state,
  } = query;

  return {
    // Solve unserialable json problem with this.
    props: {
      code,
      state,
    }
  };
}

export default GitHub;