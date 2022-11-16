import React from "react";

import CreateIcon from "@material-ui/icons/Create";
import CancelIcon from "@material-ui/icons/Cancel";

// import { 
//   // RiImageFill, 
//   RiFileCopy2Fill 
// } from "react-icons/ri";

import { useAuth } from "../../../../contexts/auth";

import SavedLinkToClipboard from "../../../SavedLinkToClipboard";
// import { useSavedLinkToClipboard } from "../../../../contexts/savedLinkToClipboard";
import { deleteFileByIdForOwner, findFileListForOwner } from "../../../../api/privateFile";
import { styled } from "baseui";
import { hover } from "../../../../design/common";
import { scrollToTop } from "../../../../browser/scroll";
import { useRouter } from "next/router";

const OwnerButtonsContainer = styled("div", {
  display: "flex",
  marginTop: "1rem",
});

const OwnerEditButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",

  color: "rgb(17, 160, 245)",
  marginRight: "0.5rem",


  ":hover": hover,

});

const FileDeleteButtonWrapper = styled("div", {
  display: "flex",
  alignItems: "center",

  ":hover": hover,
});

const ProfileFileForOwnerButtons = ({
  file_id,
  path_to_file,

  setFileList,
  setTotalFileList,

  filesPerPage,
  fileList,
  setFileIdToUpdate,
  setShowUpdateFileForm,
}) => {
  const router = useRouter();

  const {
    // @ts-ignore
    user
  } = useAuth();

  return (
    <OwnerButtonsContainer>
      <OwnerEditButtonWrapper>
        <div 
          style={{
            display: "flex",
            alignItems: "center",

            marginLeft: "0.25rem",
          }}
          onClick={(e) => {
            e.preventDefault();

            setFileIdToUpdate(file_id);
            setShowUpdateFileForm(true);
          }}
        >
          <CreateIcon style={{
            fontSize: "1rem",
          }} />
          {/* <RiFileCopy2Fill /> */}
          <span style={{
            marginLeft: "0.25rem",
          }}>
            Edit
          </span>
        </div>
      </OwnerEditButtonWrapper>

      <FileDeleteButtonWrapper
        onClick={async (e) => {
          e.preventDefault();

          const confirmed = confirm("Do you really want to delete it?");
          if (confirmed) {
            const { data, error } = await deleteFileByIdForOwner(file_id);

            if (error) {
              console.log("deleteFileByIdForOwner");
              console.error(error);

              return;
            }

            if (data === true) {
              // window.location.reload();
              // window.location.href = `/user/${user.username}/files`;

              // const { data, error } = await findFileListForOwner(
              //   null,
              //   null,
              //   null,
              //   null,
              //   null,
              // );

              // if (error) {
              //   console.log("findFileListForOwner error");
              //   console.error(error);

              //   return
              // }

              // if (data) {

              //   const { fileList, totalFileList } = data;

              const queries = new URLSearchParams(window.location.search);
              const file_id_query = queries.get("file_id");
              // alert("file_id");
              // alert(file_id);
              if (file_id_query !== null) {
                queries.delete("file_id");
                const query = Object.fromEntries(queries);
                router.push({
                  pathname: window.location.pathname,
                  query,
                });
                return;
              }

              const filesLeft = (fileList.length - 1);
              const currentPage = queries.get("page");

              if (filesLeft === 0) {

                if (currentPage !== "1" && currentPage !== null) {
                  const prevPage = +(new Number(currentPage)) - 1;
                  queries.set("page", prevPage.toString());

                  const query = Object.fromEntries(queries);
                  router.push({
                    pathname: window.location.pathname,
                    query,
                  });
                  scrollToTop();
                } else {
                  setFileList(fileList => {
                    const newFileList = fileList.filter(file => {
                      return file.id !== file_id;
                    });

                    return newFileList;
                  });

                  // scrollToTop();
                }
              } else {
                setFileList(fileList => {
                  const newFileList = fileList.filter(file => {
                    return file.id !== file_id;
                  });

                  return newFileList;
                });

                // const query = Object.fromEntries(queries);

                // router.push({
                //   pathname: window.location.pathname,
                //   query,
                // })

                // scrollToTop();
              }

              setTotalFileList(totalFileList => {
                return totalFileList - 1;
              });
              // }
            } else {
              console.log("Something went wrong");
            }
          }
        }}
      >
        <CancelIcon style={{
          fontSize: "1rem",
          color: "#ff1676",
        }} />
        <span style={{
          marginLeft: "0.25rem",
          color: "#ff1676",
        }}>
          Delete
        </span>
      </FileDeleteButtonWrapper>

      <SavedLinkToClipboard />
    </OwnerButtonsContainer>
  );
};

export default ProfileFileForOwnerButtons;