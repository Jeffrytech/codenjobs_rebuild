import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { githubAuthorize } from "../../api/privateGithub";

import CenteredInPage from "../CenteredInPage";
import PrimarySpinner from "../spinners/PrimarySpinner";

const GitHubAuth = ({
  user,
  loading,

  code,
  state,
  // data,
  // error,
}) => {
  const router = useRouter();

  // alert(code);
  // alert(state);

  useEffect(() => {
    // if (user && user.username) {
    githubAuthorize(code, state)
      .then(({ data, error }) => {
        // console.log("data");
        // console.log(data)

        // Should handle it better
        if (error) {
          console.log("error");
          console.error(error);
          console.error("error,message");
          console.error(error.message);
            
          // alert("githubAuthorize error");
          // alert(error);
            
          // router.replace(`/register/github?&error=${error.message}`);
          router.replace(`/register/github?&error=${error.response.data.detail}`);
        }

          
        if (data) {
          const state_prefix = state.split(",")[0];

          if (state_prefix === "current_user_id") {
            router.replace(`/settings/account?&github_username=${data}`);
          }

          if (state_prefix === "ref_username") {
            const { email, username, password } = data;
  
            router.replace(`/register/github?&email=${email}&username=${username}&password=${password}`);
          } 
            
        }


        // if (typeof data === "string") {
        //   router.replace(`/settings/account?&github_username=${data}`);
        // }

        // if (data === false) {
        //   // Should handle it better
        //   router.replace("/settings/account");
        // }

        router.back();


      })
      .catch(error => {
        // Should handle it better
          
        console.log("error");
        console.error(error);

        router.replace("/settings/account");
      });
    // };
  }, []);
  // }, user);

  if (loading) {
    return (<CenteredInPage>
      <PrimarySpinner />
    </CenteredInPage>);
  }

  return null;
};

export default GitHubAuth;