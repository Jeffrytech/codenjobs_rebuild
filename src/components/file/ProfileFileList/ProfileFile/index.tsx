import React, { useState } from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import moment from "moment";

import { updateFileDetails, updateFileReuse } from "../../../../api/privateFile";

import ExternalLink from "../../../ExternalLink";
import ProfileFilesForOwnerButtons from "../ProfileFileForOwnerButtons";
import { useSavedLinkToClipboard } from "../../../../contexts/savedLinkToClipboard";
import { FileHeader, FileImage, FileWrapper, ProfileUserFileListCardContainer } from "./ProfileFileCSS";
import copyToClipboard from "../../../../browser/copyToClipboard";

const ProfileFile = ({
  id,
  path_to_file,
  // cloudinary_file_public_id,
  title,
  description,
  reuse,

  created_at,
  updated_at,

  setFileList,
  setTotalFileList,

  filesPerPage,
  fileList,
  setFileIdToUpdate,
  setShowUpdateFileForm,
}) => {
  const {
    // @ts-ignore
    setSnackbarOpen
  } = useSavedLinkToClipboard();

  const [fileReuse, setFileReuse] = useState(reuse);

  return (
    <ProfileUserFileListCardContainer key={id} >
      <FileHeader>
        <div style={{
          fontSize: "1rem",
          opacity: "0.7",
        }}>
          {/* {`Created ${moment.utc(created_at).fromNow()}`} */}
          {`${moment.utc(created_at).fromNow()}`}
        </div>

        <div style={{
          // marginLeft: "auto",
        }} >
          <span style={{
            marginRight: "0.5rem",
          }} >
            {/* Use */}
            Reuse
          </span>
          <FormControlLabel
            control={
              <Switch
                style={{
                  color: fileReuse ? "rgb(17, 160, 245)" : "#efefef",
                }}
                checked={fileReuse}
                onChange={async () => {
                  const { data, error } = await updateFileReuse(id, !fileReuse);

                  if (error) {
                    // TODO
                    // Show error notification here
                    return;
                  }

                  if (data) {
                    setFileReuse(!fileReuse);
                  }
                }}
                color="primary"
              />
            }
            label={fileReuse ? "Yes" : "No"}
          />
        </div>
      </FileHeader>

      <FileWrapper>
        <FileImage
          alt={"file"}
          src={path_to_file}
          onClick={(e) => {
            e.preventDefault();

            copyToClipboard(path_to_file);
            setSnackbarOpen(true);
          }}
        />
      </FileWrapper>

      {/* <div>
        {title && <h2 style={{
          wordBreak: "break-all"
        }} >{title || "Title"}</h2>}
        {description && <p
          style={{
            wordBreak: "break-all",
            opacity: 0.7,
            margin: 0,

          }}
        >{description}</p>}
      </div> */}
      
      <ProfileFilesForOwnerButtons
        file_id={id}
        path_to_file={path_to_file}

        setFileList={setFileList}
        setTotalFileList={setTotalFileList}

        filesPerPage={filesPerPage}
        fileList={fileList}
        setFileIdToUpdate={setFileIdToUpdate}
        setShowUpdateFileForm={setShowUpdateFileForm}
      />

    </ProfileUserFileListCardContainer>
  );
};

export default ProfileFile;