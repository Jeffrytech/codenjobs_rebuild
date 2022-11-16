import React from "react";

import TextField from "@material-ui/core/TextField";

import { fileDescriptionMaxLength, fileTitleMaxLength } from "../../../validators/maxLengths";
import { FileImage, FileImageWrapper } from "./UpdateFileCSS";

const UpdateFileForm = ({
  handleSubmit,
  handleChange,
  handleBlur,

  setFieldValue,

  values,

  fileThumbnail,
}) => {
  const {
    // image,
    title,
    // link,
    description,
  } = values;

  return (
    <form onSubmit={handleSubmit} >
      {
        fileThumbnail &&
        <FileImageWrapper>
          <FileImage
            src={fileThumbnail}
          />
        </FileImageWrapper>
      }

      <TextField
        placeholder="Your file title"
        // autoFocus
        autoComplete="off"
        // required

        inputProps={{
          maxLength: fileTitleMaxLength,

          // pattern: "[a-zA-Z_]+",
        }}

        id="title"
        label="Title"
        type="text"

        onChange={handleChange}
        onBlur={handleBlur}
        value={title}

        margin="dense"
        fullWidth
        variant="outlined"
        style={{
          background: "rgb(247, 248, 250)",
          marginTop: "1rem",
          // background: "#efefef",
        }}
      />

      <TextField
        placeholder="Describe this file"
        multiline
        rows={4}
        rowsMax={4}

        // autoFocus
        autoComplete="off"
        // required

        inputProps={{
          maxLength: fileDescriptionMaxLength,

          // pattern: "[a-zA-Z_]+",
        }}

        // error={(!!(email && email.length > 4 && touched.email && errors.email))}

        id="description"
        label="Description"
        type="text"

        onChange={handleChange}
        // onChange={(e) => {
        //   // alert(e.target.value);
        //   // alert(e.target.value.length);

        //   if (!e.target.value || e.target.value?.length === 0) {
        //     setFieldValue("description", "");
        //   } else {
        //     setFieldValue("description", e.target.value);
        //   }
        // }}
        onBlur={handleBlur}
        value={description}

        // inputProps={{ maxLength: passwordMaxLength }}

        margin="dense"
        fullWidth
        variant="outlined"
        style={{
          background: "rgb(247, 248, 250)",
          // background: "#efefef",
        }}
      />

    </form>
  );
};

export default UpdateFileForm;