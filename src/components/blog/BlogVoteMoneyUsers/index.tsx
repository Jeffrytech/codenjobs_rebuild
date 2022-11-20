import React, { useEffect, useState } from "react";
// import Link from "next/link";

// import moment from "moment";

// import { Tooltip } from "@material-ui/core";

// import CreateIcon from "@material-ui/icons/Create";
// import CancelIcon from "@material-ui/icons/Cancel";
// import SettingsIcon from '@material-ui/icons/Settings';
// import NoEncryptionIcon from '@material-ui/icons/NoEncryption';

// // https://react-icons.github.io/react-icons/search?q=heart
// import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
// import MoneyRoundedIcon from '@material-ui/icons/MoneyRounded';
// import PollButton from '@material-ui/icons/Poll';
// // import FavoriteIcon from '@material-ui/icons/Favorite';
// // import FavoriteBorderIcon from '@material-ui/ico/ns/FavoriteBorder';
// import PaidIcon from '@mui/icons-material/Paid';

// import ClapButton from 'react-clap-button';

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogContentText from "@material-ui/core/DialogContentText";

import DialogTitle from "@material-ui/core/DialogTitle";
import { findBlogVoteMoneyUsers } from "../../../api/blog";
import Link from "next/link";
import ProfileImage from "../../ProfileImage";
import { Avatar } from "baseui/avatar";
import { API } from "../../../config/environment";

import { BlogVoteMoneyuserListCardContainer } from "./BlogVoteMoneyUsersCSS";
import PrimarySpinner from "../../spinners/PrimarySpinner";

// import { OwnerButtonsContainer, OwnerDeleteButtonWrapper, OwnerEditButtonWrapper, PollButtonWrapper, UserButtonsContainer, UserMoneyButtonWrapper } from "../../OwnerButtonsCSS";
// import { deleteBlogByIdForOwner, findUserVoteMoneyForBlog, updateUserVoteMoneyForBlog } from "../../../api/privateBlog";

const BlogVoteMoneyUsers = ({
  id,

  showBlogVoteMoneyUsers,
  setShowBlogVoteMoneyUsers,

  totalMoneyVote,

  // showVoters,
}) => {
  // const router = useRouter();

  const [blogVoteMoneyUserList, setBlogVoteMoneyUserList] = useState(null);

  // Rename?
  const closeBlogVoteMoneyUsers = () => {
    setShowBlogVoteMoneyUsers(false);
  };

  // # $curl - X GET "http://127.0.0.1:8000/api/v1/blog/vote/money/users?id=ce8b5a94-9303-421c-b1f4-f9d94b478556"
  // @router.get("/vote/money/users")
  // async def vote_money_users(
  //   id: UUID4,

  //   # current_user: User = Depends(get_current_active_user),
  //   db: Session = Depends(get_db)
  // ):

  useEffect(() => {
    findBlogVoteMoneyUsers(id)
      .then(({ data }) => {
        setBlogVoteMoneyUserList(data);
        // alert(data);
        // console.log("data");
        // console.log(data);
        // username, created_at, profile_image
      })
      .catch((error) => {
        console.log("findBlogVoteMoneyUser error");
        console.error(error);
      });
  }, [totalMoneyVote]);
  // }, [user])

  if (blogVoteMoneyUserList === null) {
    return null;
  }

  // This should come from the backend
  // const moneyVote = false;
  return (
    <Dialog
      open={showBlogVoteMoneyUsers}
      onClose={closeBlogVoteMoneyUsers}
      aria-labelledby="show-blog-vote-money-users"
    >
      {/* Include image here */}
      <DialogTitle id="show-blog-vote-money-users">
        <div
          style={{
            //  display: "flex",
            //  alignItems: "center",

            display: "flex",
            alignItems: "center",
            // justifyContent: "center",
            // marginTop: "1rem",
            // marginLeft: "-0.5rem",
          }}
        >
          {/* <div>
            <Avatar
              alt={username}
              src={image || "/static/logo.svg"}
            />
          </div> */}

          {/* {!blogVoteMoneyUserList ? "1 Voter" : `${blogVoteMoneyUserList.length} Voters`} */}
          {blogVoteMoneyUserList &&
            `${blogVoteMoneyUserList.length} ${
              blogVoteMoneyUserList.length < 2 ? "Voter" : "Voters"
            }`}
          {/* {blogVoteMoneyUserList !== null && `${blogVoteMoneyUserList.length} ${blogVoteMoneyUserList.length < 2 ? "Voter" : "Voters"}`} */}
        </div>
      </DialogTitle>

      <DialogContent>
        {/* <DialogContentText>
          Post a new blog or job post.
        </DialogContentText> */}

        <div
          style={{
            display: "flex",
            flexFlow: "column",
            minWidth: "17rem",
          }}
        >
          {blogVoteMoneyUserList?.map(
            ({ username, profile_name, profile_image }) => {
              // alert(username);
              return (
                <BlogVoteMoneyuserListCardContainer key={username}>
                  <Link href={`/user/${username}`}>
                    <div
                      style={{
                        display: "flex",
                        marginLeft: "-0.15rem",
                      }}
                    >
                      <Avatar
                        name={username}
                        size="1.25rem"
                        src={profile_image || ""}
                      />
                      <span
                        style={{
                          marginLeft: "0.25rem",
                        }}
                      >
                        {profile_name || username}
                      </span>
                    </div>
                  </Link>
                </BlogVoteMoneyuserListCardContainer>

                // <div>
                //   <Link
                //     href={`/user/${username}`}
                //   >
                //     <div style={{
                //       display: "flex",
                //       marginLeft: "-0.15rem",
                //     }}>
                //       <Avatar
                //         name={username}
                //         size="1.25rem"
                //         src={profile_image || ""}
                //       />
                //       <span style={{
                //         marginLeft: "0.25rem",
                //       }}>
                //         u/{username}
                //       </span>
                //     </div>

                //   </Link>
                // </div>
              );
            }
          )}
        </div>

        {/* <NewBlogPostButton href="/blog/post" >
            <CodeIcon />
            <span style={{
              marginLeft: "0.25rem",
            }} >
              Post a blog
            </span>
          </NewBlogPostButton>

          <NewJobPostButton href="/job/post" >
            <MonetizationOnIcon />
            <span style={{
              marginLeft: "0.25rem",
            }} >
              Post a job
            </span>
          </NewJobPostButton> */}
      </DialogContent>

      <DialogActions>
        <Button
          // disabled={isSubmitting}
          onClick={closeBlogVoteMoneyUsers}
          color="primary"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BlogVoteMoneyUsers;
