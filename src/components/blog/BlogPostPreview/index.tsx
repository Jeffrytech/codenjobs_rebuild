import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import CreateIcon from "@material-ui/icons/Create";

import BlogPostFormHeader from "../BlogPostFormHeader";

import { findBlogByIdForOwner, setBlogStatusToPublic } from "../../../api/privateBlog";

import BlogPreview from "./BlogPreview";
// import CompanyPreview from "./CompanyPreview";

import {
  PreviewIntro,

  BlogPostPreviewContainer,
  BlogPostPreviewWrapper,
  BlogPostPreviewSection,

  BlogPreviewHeader,
  BlogEditButtonWrapper,

  // PreviewTypeRadioGroupWrapper,

  ContinueButtonWrapper,
  ContinueButton,
} from "./BlogPostPreviewCSS";

import Link from "next/link";
import { Tooltip } from "@material-ui/core";

import { findJobStatusById } from "../../../api/job";
import ContinueToPreivewSpinner from "../../spinners/ContinueToPreivewSpinner";

// import {
//   CompanyLogo,
//   CompanyName,
//   CompanyDescription,
// } from "./CompanyPreviewCSS";
// import { CentralizeChildren } from "../Centralize";

// import { API } from "../../../config/environment";

const BlogPostPreview = ({
  id,
  user,
  
  title,

  // new_blog,
}) => {
  const router = useRouter();
  // const [previewType, setPreviewType] = useState("job");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [preview, setPreview] = useState({
    username: "", //  Send it from the server?

    cover: "",

    title: "",
    category: "",
    body: "",
    tags: null,

    status: "",

    published_at: null,

    // job_status: "Draft",
  });

  useEffect(() => {
    findBlogByIdForOwner(id)
      .then(({ data }) => {
        if (data !== null) {
          // Send it from the server?
          
          // console.log("data");
          // console.log(data);

          // alert(user.username);
          // alert(data.username);

          const isOwner = user && (user.username === data.username);

          // alert(isOwner);

          if (isOwner) {
            // console.log("data");
            // console.log(data);

            setPreview(data);
          }
        }
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const {
    username,

    cover,
    
    title: blogTitle,
    category,

    body,
    tags,

    status,

    published_at,
  } = preview;
  // Show card and post?

  // alert(status);

  return (
    <>
      <BlogPostFormHeader 
        activeStep={1} 
        blogId={id} 
        // blogStatus={status}
      />

      <BlogPostPreviewContainer>
        <BlogPostPreviewWrapper>
          <BlogPostPreviewSection>
            <BlogPreviewHeader>
              <PreviewIntro>
                Preview
                {/* Preview your {status === "Draft" ? "draft" : "post"} */}
                
                {/* Preview your {status == "Draft" ? "draft" : "post"} */}
                {/* Preview your post */}
                {/* Preview your draft */}
              </PreviewIntro>
              <Link href={`/blog/post?&title=${title}&id=${id}`} >
                {/* <Link href={`/job/post?&id=${id}`} > */}
                <Tooltip title="Update the blog post" arrow >
                  <BlogEditButtonWrapper>
                    <CreateIcon
                      style={{
                        fontSize: "1rem"
                      }}
                    />
                    <span style={{
                      marginLeft: "0.25rem",
                    }}>
                      Edit
                    </span>

                  </BlogEditButtonWrapper>
                </Tooltip>
              </Link>
            </BlogPreviewHeader>

            <BlogPreview
              username={username}

              cover={cover}

              title={blogTitle}
              category={category}
              
              body={body}
              tags={tags}

              published_at={published_at}
            />

            <ContinueButtonWrapper>
              {/* Refer to dev.to */}
              {/* Should be differnt depending on the blog status? (public or draft) */}
              {/* <a
                style={{
                  width: "100%",
                }}
                href={`/blog/post/publish?&title=${title}&id=${id}`}
                rel="noopener noreferrer"
              > */}
              <ContinueButton 
                style={{
                  width: "100%",
                }} 
                disabled={isSubmitting}

                onClick={async () => {
                  // set blog status from draft to public and if success send it to 
                  // `/blog/post/publish?&title=${title}&id=${id}`
                  // setIsSubmitting(true);

                  // if (username !== "codenjobs") {
                  //   alert("This will be reactivated again when we include comments for blogs");
                  //   return;
                  // }

                  if (status === "Draft") {
                    setIsSubmitting(true);
                    const { data, error } = await setBlogStatusToPublic(id);

                    if (error) {
                      console.log("error");
                      console.error(error);
                    } else {
                      if (data === true) {
                        // Redirect
                        // Send to blog read page?
                        // router.push(`/blog/post/publish?&title=${title}&id=${id}`);
                        router.push(`/blog?&title=${title}&id=${id}`);
                        // router.push(`/blog/post/publish?&title=${title}&id=${id}`);

                      } else if (data == false) {
                        console.log("The status was already public.");
                      } else {
                        console.log("Something went wrong.");
                      }
                    }
                    setIsSubmitting(false);
                  } else {
                    // Just update it when the status was publid already.
                    // Send to blog read page?
                    router.push(`/blog?&title=${title}&id=${id}`);
                    // blog?&title=How-to-learn-Vim-with-examples&id=81244128-6e8f-4606-b50f-36d730a29369
                    // router.push(`/blog/post/publish?&title=${title}&id=${id}`);
                  }
                }}
              >
                {isSubmitting && <ContinueToPreivewSpinner />}
                {/* {status == "Draft" ? "Publish" : "Read"} your {status == "Draft" ? "draft" : "blog post"} */}
                {status == "Draft" ? "Publish" : "Read"} your blog post
              </ContinueButton>
              {/* </a> */}
            </ContinueButtonWrapper>

          </BlogPostPreviewSection>
        </BlogPostPreviewWrapper>
      </BlogPostPreviewContainer>
    </>
  );
};

export default BlogPostPreview;

//       {/* Extract CSS */}


//       <PreviewTypeRadioGroupWrapper>
//         <RadioGroup
//           row
//           aria-label="previewType"
//           name="previewType"
//           value={previewType}
//           onChange={e => {
//             setPreviewType(e.target.value);
//           }}
//         >
//           <FormControlLabel value="job" control={<Radio />} label="Job" />
//           <FormControlLabel value="company" control={<Radio />} label="Company" />
//         </RadioGroup>
//       </PreviewTypeRadioGroupWrapper>

//       {preview && <CurrentBlogPostPreview
//         previewType={previewType}
//         preview={preview}
//       />}

//       {/* This doesn't render PayPal button */}
//       {/* <Link href={`/job/post/payment?&id=${id}`} > */}


