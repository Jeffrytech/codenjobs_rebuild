import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// import {
//   EditorState,
//   // convertToRaw,
//   ContentState,
//   convertFromHTML,

//   // CompositeDecorator,

//   // isVideoType,
// } from "draft-js";

import showdown from 'showdown';

import useBlogPostForm from "./useBlogPostForm";

// Cover with Post = Blog
import CoverForm from "./CoverForm";
import PostForm from "./PostForm";

import {
  // FormIntro,

  ContinueButton,
  ContinueButtonWrapper,

  BlogPostFormContainer,
  BlogPostFormWrapper,
  BlogPostFormSection,
} from "./BlogPostFormCSS";
// import { ButtonSpinner } from "../../spinners/LoginSpinner";
import ContinueToPreivewSpinner from "../../spinners/ContinueToPreivewSpinner";
// import { Category } from "@material-ui/icons";

import BlogPostFormHeader from "../BlogPostFormHeader";

// import { findBlogStatusById } from "../../../api/job";
import { findBlogByIdForOwner } from "../../../api/privateBlog";

import { decorator, decorators } from "../../markdown/customDecorators";
import moment from "moment";

// function findImageEntities(contentBlock, callback, contentState) {
//   contentBlock.findEntityRanges((character) => {
//     const entityKey = character.getEntity();
//     return (
//       entityKey !== null &&
//       contentState.getEntity(entityKey).getType() === "IMAGE"
//     );
//   }, callback);
// }
// const Image = (props) => {
//   const { alt, height, src, width } = props.contentState.getEntity(props.entityKey).getData();

//   return <img alt={alt} src={src} height={height} width={width} style={{ maxWidth: '100%' }} />;
// };

// const decorators = [
//   {
//     strategy: findImageEntities,
//     component: Image
//   }
// ]

// const decorator = new CompositeDecorator(decorators);

// function findImageEntities(contentBlock, callback, contentState) {
//   contentBlock.findEntityRanges(character => {
//     const entityKey = character.getEntity();

//     // alert(entityKey);
//     // alert(entityKey !== null &&
//     //   contentState.getEntity(entityKey).getType() === 'IMAGE' )

//     return (
//       entityKey !== null &&
//       contentState.getEntity(entityKey).getType() === 'IMAGE' 
//       // Where is the isVideoType function?
//       // entityKey !== null &&
//       // contentState.getEntity(entityKey).getType() === 'IMAGE' &&
//       // !isVideoType(contentState.getEntity(entityKey).getData().src)
//     );
//   }, callback);
// }

// const Image = props => {
//   const { alt, height, src, width } = props.contentState.getEntity(props.entityKey).getData();
//   const url = src;

//   return <img alt={alt} src={url} height={height} width={width} style={{ maxWidth: '100%' }} />;
// };

// // // Extract
// const decorators = [
//   {
//     strategy: findImageEntities,
//     component: Image,
//   },
// ];

const BlogPostForm = ({
  id,
  user,
}) => {
  // To use created_at, updated_at,
  // const [create, setCreate] = useState(null);
  
  const [update, setUpdate] = useState(null);

  const router = useRouter();

  // const [editorState, setEditorState] = useState(
  //   () => EditorState.createEmpty(),
  // );

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    setFieldValue,
    // setFieldTouched,
    setValues,

    setFieldError,

    isSubmitting,
    submitForm,
  } = useBlogPostForm(id);

  // Is it correct? Update this.
  // useEffect(() => {
  //   if (id !== null) {
  //     findBlogStatusById(id)
  //       .then(({ data: status, error }) => {
  //         if (status === "Draft") {
  //           return;
  //         }

  //         // Should be public?
  //         if (status === "Public") {
  //           router.replace(`/blog?&id=${id}`);
  //         }

  //         // Should include more here for job status

  //         // if (error.response.data.detail === "no_job") {
  //         //   router.replace("/job/post");
  //         // }
  //       });
  //   }
  // }, []);

  // Is it correct?
  // Use this here because in /pages there is no auth token at apiRequest yet if this is used at /pages(server).
  // (Unauthorized error)
  // http://localhost:3000/blog/post?&id=191ce7d9-f94e-45a1-83e0-daa6ff520a92
  if (id !== null) {
    useEffect(() => {
      findBlogByIdForOwner(id)
        .then(({
          data,
          // Should handle this correctly.
          error
        }) => {
          if (error) {
            console.log("error");
            console.error(error);
          }

          // console.log("data");
          // console.log(data);

          if (data !== null) {
            const {
              username,

              cover,

              title,
              
              body,

              category,
              tags,

              // created_at,
              updated_at,
            } = data;

            setUpdate(updated_at);

            // Make it work 
            const isOnwer = user.username === username;
            if (isOnwer) {
              const initialValues = {
                cover,
                title,
                body,

                category,
                tags: tags || [],
              };

              // setEditorState(
              //   EditorState.createWithContent(ContentState.createFromBlockArray(
              //     convertFromHTML(body)
              //   ), decorator
              //   // {
              //   //   decorator:
              //   // }
              //   // new CompositeDecorator(decorators)
              // ));

              // const converter = new showdown.Converter();

              setValues({
                ...initialValues,
                // bodyMarkdown: "",
                // bodyMarkdown: converter.makeMarkdown(body),
                // bodyMarkdown: converter.makeMarkdown(body),
              }); // error because of bodyMarkdown?
            } else {
              router.replace("/blog/post");
            }
          }
        })
        .catch(e => {
          console.log(e);
        });
    }, []);
  }

  const {
    cover,

    title,
    
    body,
    // bodyMarkdown,

    category,
    tags,
  } = values;

  // console.log("cover");
  // console.log(cover);

  // alert(update);

  return (
    <>
      <BlogPostFormHeader activeStep={0} blogId={id} />

      {/* Extract this later? */}
      <BlogPostFormContainer>
        <BlogPostFormWrapper>
          <BlogPostFormSection>
            <form onSubmit={handleSubmit} >
              {/* Extrac this? */}
              {update && <div style={{
                marginBottom: "0.25rem",
                opacity: "0.7",
              }} >
                Edited {moment.utc(update).fromNow()}
              </div>}

              <CoverForm
                // handleChange={handleChange}
                // handleBlur={handleBlur}
                // errors={errors}
                // touched={touched}
                setFieldValue={setFieldValue}

                // id={id}
                cover={cover}
              />

              <PostForm
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                // setFieldTouched={setFieldTouched}
                // setValues={setValues}
                errors={errors}
                touched={touched}

                title={title}
                body={body}
                // bodyMarkdown={bodyMarkdown}

                category={category}
                tags={tags}

                // editorState={editorState}
                // setEditorState={setEditorState}

                // decorators={decorators}
                decorators={decorators}

                setFieldError={setFieldError}
              />

              {/* Disable this when sending request. */}
              {/* Width 100% at mobile? */}
              <ContinueButtonWrapper>
                <ContinueButton
                  disabled={isSubmitting}
                  type="button"
                  onClick={() => {
                    submitForm();
                  }}
                >
                  {isSubmitting && <ContinueToPreivewSpinner />}
                  {/* <ContinueToPreivewSpinner /> */}
                  {/* {!isSubmitting ? "Continue to preview" : "Please, wait"} */}
                  Continue to preview
                </ContinueButton>
              </ContinueButtonWrapper>
            </form>
          </BlogPostFormSection>
        </BlogPostFormWrapper>
      </BlogPostFormContainer>
    </>
  );
};

export default BlogPostForm;

