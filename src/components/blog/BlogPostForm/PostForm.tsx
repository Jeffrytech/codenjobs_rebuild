// Extract this file from the current folder and reuse?

// https://www.striphtml.com/ 
// Paste job description with this.

import React, {
  useEffect,
  useState,
  // useEffect,
} from "react";

import Select from "react-select";
import CreatableSelect from 'react-select/creatable';

// import ContentPasteIcon from '@mui/icons-material/ContentPaste';

// import { AiTwotoneFileImage } from "react-icons/ai";
// import { BsCardImage } from "react-icons/bs";
// import { RiImageFill } from "react-icons/ri";


// https://jpuri.github.io/react-draft-wysiwyg/#/docs
// https://blog.logrocket.com/building-rich-text-editors-in-react-using-draft-js-and-react-draft-wysiwyg/
// import {
//   EditorState,
//   convertToRaw,
//   ContentState,
//   convertFromHTML,
  
//   // CompositeDecorator,
// } from "draft-js";

// import { Editor } from "react-draft-wysiwyg";

// import draftToHtml from "draftjs-to-html";
// // import htmlToDraft from "html-to-draftjs"; // Equal to convertFromHTML
// import DOMPurify from "dompurify";

// import showdown from 'showdown';

// https://material-ui.com/api/radio/
import { Tooltip } from "@material-ui/core";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";

import CodeIcon from '@material-ui/icons/Code';
// import VisibilityIcon from '@material-ui/icons/Visibility';

import Chip from "@material-ui/core/Chip";

// import style from '../../../../editor-styles.module.css';
import Required from "../../form/Required";

// import TweetEmbed from 'react-tweet-embed'

// import ContentPasteIcon from '@mui/icons-material/ContentPaste';

import {
  MarkdownLabelWrapper,
  // MarkdownSwitch,
  EditPreviewSwitch,

  MarkdownForm,
  MarkdownFormWrapper,
  MarkdownPreviewWrapper,
} from "../../markdown/MarkdownCSS";

// import UploadImage from "../../UploadImage";

import {
  editorStyles,

  BlogPostFormLabel,
  BlogPostFormInputWrapper,
  BlogPostFormTextInput,
  // JobPostFormTextarea,

  CharactersLeftWrapper,
  // SkillsLeftWrapper,
  TagsLeftWrapper,

  // JobTypeRadioGroupWrapper,
  // JobCategoryWrapper,
  
  BlogPostTagsWrapper,
  BlogPostTag,
  BlogPostCategoryWrapper,
  CodeOfConductWrapper,

  // MarkdownBodyForm,

  // BodyLabelWrapper,
  // MarkdownSwitch,
  // BlogPostFormDetailText,
} from "./BlogPostFormCSS";

import {
  blogPostTitleMaxLength,
  blogPostBodyMaxLength,

  tagMaxLength,
  tagsValidatorError,
  skillMaxLength,
} from "../../../validators";

import {
  charactersLeft,
  charactersUsedPercent,
  // skillsLeft,
  tagsLeft
} from "../../../form";
import { 
  blogPostCategoryOptions, findBlogPostCategoryLabelValue, 
  // findBlogPostCategoryValue
} from "../../../typeDefinitions/blog";
import { styleRegex, tagRegex } from "../../../validators/regex";

// import TagErrorMessage from "../../error/TagErrorMessage";
// import UrlOrEmailFieldErrorMessage from "../../error/UrlOrEmailFieldErrorMessage";
import DropdownErrorMessage from "../../error/DropdownErrorMessage";
import { findJobSkillListForOwner } from "../../../api/privateJob";
import { toLabelValue } from "../../../typeDefinitions/select";
import ExternalLink from "../../ExternalLink";
import UploadImage from "../../UploadImage";
import PostRenderer from "../../markdown/PostRenderer";
import { COMPANY_CODE_OF_CONDUCT } from "../../../config/environment";
// import PostRenderer from "../../MarkdownRenderer";

const reactSelectControlCSS = {
  border: "2px solid rgb(239, 239, 239)",
  borderRadius: "0.5rem",
  fontFamily: "roboto",
};

const PostForm = ({
  handleChange,
  handleBlur,
  setFieldValue,
  // setValues,
  // setFieldTouched,

  errors,
  touched,

  title,
  body,
  // bodyMarkdown,

  category,
  tags,
  setFieldError,

  // editorState,
  // setEditorState,

  decorators,

  // setActiveStep,
}) => {
  const [showFileListSidebar, setShowFileListSidebar] = useState(false);

  // alert(category);
  // const converter = new showdown.Converter();

  // let html = editorState && draftToHtml(convertToRaw(editorState.getCurrentContent()));
  // html = html.replace(styleRegex, '$1')
  // https://github.com/jpuri/draftjs-to-markdown#usage
  // const markup = draftToMarkdown(contentState, hashConfig, customEntityTransform, config);
  // alert(html.length);

  // Use code icon for this?
  const [useMarkdown, setUseMarkdown] = useState(true);
  // const [markdownValue, setMarkdownValue] = useState("");

  const [tagInput, setTagInput] = useState(""); // Use the function and value from formik.

  const [tagOptions, setTagOptions] = useState([]);

  useEffect(() => {
    // setFieldValue("bodyMarkdown", converter.makeMarkdown(body));
    
    findJobSkillListForOwner().then(({ data }) => {
      setTagOptions(data.map(skill => {
        return toLabelValue(skill);
      }));
      // setSkillOptions()
    }).catch(error => {
      console.log("error");
      console.error(error);
    });
  }, []);

  const removeTag = (index) => {
    if ((tags.length - 1) >= index) {
      const newTags = [...tags];
      newTags.splice(index, 1);
      setFieldValue("tags", newTags);
    }
  };

  // const handleTagInput = (e) => {
  //   const { value } = e.target;

  //   if (e.key === "Enter" && value && tags.length < 5) {
  //     if (tags.find(skill => skill.toLowerCase() === value.toLowerCase())) {
  //       return;
  //     }
  //     setFieldValue("tags", [...tags, value]);

  //     setTagInput("");
  //   } else if (
  //     e.key === "Backspace" && !value && tags.length > 0
  //   ) {
  //     setFieldValue("tags", tags.slice(0, (tags.length - 1)));
  //   }
  // };
  // alert(body);

  // alert(bodyMarkdown);

  return (
    <>
      {/* <TweetEmbed id="1441052849392140289" placeholder={'Loading'} /> */}
      <BlogPostFormLabel htmlFor="title" >
        Title
        <Required />
      </BlogPostFormLabel>
      
      <BlogPostFormInputWrapper>
        <BlogPostFormTextInput
          id="title"
          name="title"
          type="text"

          // placeholder={"Title(required)"}
          maxLength={blogPostTitleMaxLength}

          onChange={handleChange}
          onBlur={handleBlur}
          value={title}

          required
        />
      </BlogPostFormInputWrapper>

      <CharactersLeftWrapper>
        {charactersLeft(blogPostTitleMaxLength, title)}
      </CharactersLeftWrapper>

      {/* Extract these */}
      <MarkdownLabelWrapper>
        <div>
          <BlogPostFormLabel style={{
            marginBottom: "1rem",
          }}
          // htmlFor="body"
          htmlFor="bodyMarkdown"
          >
            Body
            <Required />
            {/* <ContentPasteIcon /> */}
          </BlogPostFormLabel>
        </div>

        {/* Cursor pointer for this. */}
        <div>
          
        </div>
        <Tooltip title={!useMarkdown ? "Edit markdown" : "Preview the result"} arrow>
          <EditPreviewSwitch
            $useMarkdown={useMarkdown}
            onClick={(e) => {
              e.preventDefault();

              // alert(useMarkdown);

              // if (!useMarkdown) {
              // setFieldValue("bodyMarkdown", converter.makeMarkdown(body));
              // setFieldValue("body", converter.makeMarkdown(body));
              // }
              setUseMarkdown(!useMarkdown);
            }}
          >
            {/* {useMarkdown ? <CodeIcon /> : <VisibilityIcon />} */}
            {/* {useMarkdown ? "Preview" : "Edit"} */}
            {useMarkdown ? <div style={{
              display: "flex",
              alignItems: "center",
            }}>
              <span style={{
                marginRight: "0.25rem",
                // marginRight: "1rem",
              }}>
                Preview
              </span> 
              <CodeIcon style={{
                marginRight: "0.5rem",
              }} />
            </div> : 
              <div style={{
                display: "flex",
                alignItems: "center",
              }}>
                <span style={{
                  marginRight: "0.25rem",
                }}>
                Edit
                </span>
                <CodeIcon 
                  style={{
                    marginRight: "0.5rem",
                  }}
                />
              </div>}
          </EditPreviewSwitch>
        </Tooltip>
      </MarkdownLabelWrapper>
      {/* Extract these */}

      <UploadImage 
        useMarkdown={useMarkdown} 
        showFileListSidebar={showFileListSidebar}
        setShowFileListSidebar={setShowFileListSidebar}
      />

      <MarkdownFormWrapper $useMarkdown={useMarkdown} >
        {!useMarkdown ? <MarkdownPreviewWrapper>
          <PostRenderer input={body} />
        </MarkdownPreviewWrapper> : <MarkdownForm
          id="bodyMarkdown"
          name="bodyMarkdown"
          // id="body"
          // name="body"

          // rows={5}
          rows={11}

          // Show value with markdown
          // Make it to markdown
          // value={markdownValue} // html to makrdown
          // value={bodyMarkdown} // html to makrdown
          value={body} // html to makrdown
          // value={body} // html to makrdown
          // value={converter.makeMarkdown('<h1>a heading</h1>')} // html to makrdown

          // placeholder="You can use markdown here."
          placeholder="Use markdown here."
          maxLength={blogPostBodyMaxLength}

          // onBlur={handleBlur}

          // Save html value.
          // Then, when valeu changes, set it from markdown to html.
          onBlur={handleBlur}
          onChange={async (e) => {
            const markdown = e.target.value;
            // setFieldValue("bodyMarkdown", markdown);

            // const html = converter.makeHtml(e.target.value);
            // const markdown = converter.makeMarkdown(e.target.value);
            setFieldValue("body", markdown);

            // setEditorState(EditorState.createWithContent(ContentState.createFromBlockArray(
            //   convertFromHTML(html)
            // )));
          }}
          // onChange={async (e) => {
          //   // await this?
          //   // https://stackoverflow.com/questions/33088482/onchange-in-react-doesnt-capture-the-last-character-of-text
          //   // or use empty string at the end?
          //   await setMarkdownValue(e.target.value);
 
          //   const html = converter.makeHtml(markdownValue)
          //   setFieldValue("body", html);

          //   setEditorState(EditorState.createWithContent(ContentState.createFromBlockArray(
          //     convertFromHTML(html)
          //   )));
          // }}
          // Yeah, so you can use the input event which happens as soon as the value of the input changes.
          // onInput={(e) => {
          //   setMarkdownValue(e.target.value);

          //   const html = converter.makeHtml(markdownValue)
          //   setFieldValue("body", html);

          //   setEditorState(EditorState.createWithContent(ContentState.createFromBlockArray(
          //     convertFromHTML(html)
          //   )));
          // }}
        />}
      </MarkdownFormWrapper>

      <CharactersLeftWrapper>
        {charactersUsedPercent(blogPostBodyMaxLength, body)}
        <CodeOfConductWrapper>
          <ExternalLink href={COMPANY_CODE_OF_CONDUCT} >
            Code of Conduct
          </ExternalLink>
        </CodeOfConductWrapper>
      </CharactersLeftWrapper>

      {/* <BlogPostFormLabel htmlFor="title" >
        Canonical URL
      </BlogPostFormLabel>

      <BlogPostFormInputWrapper>
        <BlogPostFormTextInput
          id="canonical_url"
          name="canonical_url"
          type="url"

          // placeholder={"Title(required)"}
          maxLength={blogPostTitleMaxLength}

          onChange={handleChange}
          onBlur={handleBlur}
          value={title}

          required
        />
      </BlogPostFormInputWrapper>
      <UrlOrEmailFieldErrorMessage
        // formValue={canonical_url}
        formError={errors.canonical_url}
        formTouch={touched.canonical_url}
      /> */}

      <BlogPostFormLabel htmlFor="category" >
        Category
        <Required />
      </BlogPostFormLabel>

      <BlogPostCategoryWrapper>
        <Select
          id="category"
          name="category"

          styles={{
            control: (provided) => ({
              ...provided,
              // none of react-select's styles are passed to <Control />
              border: "2px solid rgb(239, 239, 239)",
              borderRadius: "0.5rem",
              fontFamily: "roboto",
              // opacity: "0.7",
            }),
          }}
          value={findBlogPostCategoryLabelValue(category)}
          onChange={e => {
            // console.log(e);
            setFieldValue("category", e.value);
          }}
          options={blogPostCategoryOptions}
        />
      </BlogPostCategoryWrapper>

      <BlogPostFormLabel htmlFor="tags" >
        Tags
      </BlogPostFormLabel>

      <DropdownErrorMessage 
        formValue={tagInput}
        formError={errors.tags}
      />
      <BlogPostFormInputWrapper>
        <div style={{
          marginTop: "1rem",
        }}>
          <CreatableSelect
            id="skills"
            name="skills"
            // @ts-ignore
            type="text"

            placeholder="Select a tag"

            styles={{
              control: (provided) => ({
                ...provided,
                // none of react-select's styles are passed to <Control />
                ...reactSelectControlCSS,
                // opacity: "0.7",
              }),
            }}

            backspaceRemovesValue={true}
            isClearable

            inputValue={tagInput}

            onInputChange={(e) => {

              const result = tagRegex.test(e);

              if (result) {
                if (e.length <= skillMaxLength) {
                  setFieldError("tags", "");
                  setTagInput(e);

                  // setLocalCompanyName(e);
                  // setFieldValue("name", e.slice(0, 25));
                } else {
                  setTagInput(e.slice(0, skillMaxLength));
                }
              } else {
                setFieldError("tags", tagsValidatorError);
              }

              // console.log("onInputChage");
              // console.log(e);
              // setFieldValue("name", e);
            }}

            onChange={(e) => {
              if (e === null) {
                // alert("No value");
                // Delete a skill with this.
                if (tags.length > 0) {
                  setFieldValue("tags", tags.slice(0, (tags.length - 1)));
                }
              } else {
                if (tags.find(tag => tag.toLowerCase() === e.value.toLowerCase())) {
                  return;
                }

                setFieldValue("tags", [...tags, e.value]);
              }

            }}

            options={tagOptions}

            required
          />
        </div>
      </BlogPostFormInputWrapper>
      {/* <TagErrorMessage
        formValue={tagInput}
        formError={errors.tags}
      /> */}

      <TagsLeftWrapper>
        {tagsLeft(5, tags.length)}
      </TagsLeftWrapper>

      <BlogPostTagsWrapper>
        {
          tags.map((tag, index) => {
            return (
              <BlogPostTag key={tag} >
                <Chip
                  variant="outlined"
                  label={tag}
                  onDelete={(e) => {
                    e.preventDefault();

                    removeTag(index);
                  }}
                  // color="secondary"
                />
              </BlogPostTag>
            );
          })
        }
      </BlogPostTagsWrapper>
    </>
  );
};

// Description(mardkown editor) -> Location -> Type (enum with selector) -> Salary -> How to apply (email or website) -> Tags (array of tag)
// tags -> description

export default PostForm;

// {/* <BlogPostFormTextInput
//           id="tags"
//           name="tags"

//           type="text"
//           placeholder="Enter a tag"
//           maxLength={tagMaxLength}

//           onChange={e => {
//             e.preventDefault();

//             const result = tagRegex.test(e.target.value);

//             if (result) {
//               setFieldError("tags", "");
//               setTagInput(e.target.value);
//             } else {
//               // alert(skillsValidatorError);
//               setFieldError("tags", tagsValidatorError)
//             }

//             // setTagInput(e.target.value);
//           }}
//           onKeyDown={handleTagInput}
//           value={tagInput}
//         /> */}