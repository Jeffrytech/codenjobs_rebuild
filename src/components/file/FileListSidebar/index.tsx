import React, { useEffect, useState } from "react";
import { useSpring } from "react-spring";

import CloseIcon from "@material-ui/icons/Close";

import { useAuth } from "../../../contexts/auth";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  findTotalFilesForOwner,
  findFileListForOwner,
} from "../../../api/privateFile";
// import { useRouter } from "next/router";
// import { boxShadow } from "../../css/common";

import { useSavedLinkToClipboard } from "../../../contexts/savedLinkToClipboard";
import { fileTitleMaxLength } from "../../../validators/maxLengths";
import {
  FileListSidebarContainer, FileListSidebarHeader, FileListSidebarResponses, FileListSidebarClose, FileListInputContainer, FileListTitleSearchInput, FileListContainer,
  FileList,
  FileListImage,
  FileListTitle,
  NoFileList,
  // FileListImageViewContainer, FileListTitleViewContainer, FileListTitle, FileListImage 
} from "./FileListSidebarCSS";
import Link from "next/link";
import ExternalLink from "../../ExternalLink";
import { COMPANY_LOGO, COMPANY_NAME } from "../../../config/environment";
import copyToClipboard from "../../../browser/copyToClipboard";

const FileListSidebar = ({
  showFileListSidebar,
  setShowFileListSidebar
}) => {
  // @ts-ignore
  const { setSnackbarOpen } = useSavedLinkToClipboard();

  const {
    // @ts-ignore
    user,
    // isOwner,
  } = useAuth();

  if (user === null) {
    return null;
  }

  // eslint-disable-next-line
  const [totalFileList, setTotalFileList] = useState(0);
  const [fileList, setFileList] = useState([]);

  const [fileListSearch, setFileListSearch] = useState("");

  // eslint-disable-next-line
  useEffect(() => {

    const title = null;
    const sort = null;
    const reuse = true;
    const skip = null;
    const limit = null;

    // TODO
    // Extract this
    findTotalFilesForOwner()
      .then(({ data, error }) => {
        if (error) {
          toast.error("Error fetching files", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
          });
          return;
        }

        if (data) {
          findFileListForOwner(title, sort, reuse, skip, limit).then(
            ({ data, error }) => {
              if (error) {
                console.log("findFileListForOwner error");
                console.error(error);

                return;
              }
              // console.log("data --->", data);
              //filter out the files that data.reuse === true

              const { fileList, totalFileList } = data;

              // alert(fileList);

              const reusedFileList = fileList.map(file => {
                if (file.title === null || file.title === "") {
                  return {
                    ...file,
                    title: "No Title"
                  };
                } else {
                  return file;
                }
              });

              setFileList(reusedFileList);
              setTotalFileList(reusedFileList.length);
            }
          );
        }
      })
      .catch((error) => {
        console.log("error");
        console.error(error);
      });
  }, []);

  // eslint-disable-next-line
  const sidebar = useSpring({
    from: { right: "-27rem" },
    right: showFileListSidebar ? "0" : "-27rem",
  });

  const fileListByTitle = fileList.filter((file) => {
    // if (file.title !== null) {
    //   return file.title.toLowerCase().includes(fileListsearch.toLowerCase())
    // } else {
    //   return 'title'.toLowerCase().includes(fileListsearch.toLowerCase())
    // }
    return file.title.toLowerCase().includes(fileListSearch.toLowerCase());
  });

  // TODO
  // Show a message when there is no file to reuse (Redriect to profile/files)
  // Show when there is no file found to reuse
  // Update CSS for files to reuse

  if (fileListByTitle.length === 0) {
    return (<>
      <FileListSidebarContainer
        id='file-list-sidebar'
        style={sidebar}
      >
        <FileListSidebarHeader>
          {/* <FileListSidebarResponses>Files ({totalFileList})</FileListSidebarResponses> */}
          <ExternalLink
            href={`/user/${user.username}/files`}
          >
            <FileListSidebarResponses>
              File List To Reuse ({totalFileList})
            </FileListSidebarResponses>
          </ExternalLink>
          <FileListSidebarClose
            onClick={() => {
              setShowFileListSidebar(false);
            }}
          >
            <CloseIcon />
          </FileListSidebarClose>
        </FileListSidebarHeader>
        <FileListInputContainer>
          <FileListTitleSearchInput
            disabled={totalFileList === 0}
            type="text"
            // placeholder="Type file title to search here..."
            placeholder="Type a file title to search here..."
            onChange={(e) => {
              if (e.target.value && e.target.value.length > fileTitleMaxLength) {
                return;
              }

              setFileListSearch(e.target.value);
            }}
            value={fileListSearch}
          />
        </FileListInputContainer>

        <FileListContainer>
          <NoFileList>
            <FileListImage
              src={COMPANY_LOGO}
              alt={COMPANY_NAME}
            />
            <FileListTitle
            >
              There is no file to reuse {fileListSearch && "with this title"}
            </FileListTitle>
          </NoFileList>
        </FileListContainer>
      </FileListSidebarContainer>
    </>);
  }

  return (
    <>
      <FileListSidebarContainer
        id='file-list-sidebar'
        style={sidebar}
      >
        <FileListSidebarHeader>
          {/* <FileListSidebarResponses>Files ({totalFileList})</FileListSidebarResponses> */}
          <ExternalLink
            href={`/user/${user.username}/files`}
          >
            <FileListSidebarResponses>
              File List To Reuse ({totalFileList})
            </FileListSidebarResponses>
          </ExternalLink>
          <FileListSidebarClose
            onClick={() => {
              setShowFileListSidebar(false);
            }}
          >
            <CloseIcon />
          </FileListSidebarClose>
        </FileListSidebarHeader>
        <FileListInputContainer>
          <FileListTitleSearchInput
            type="text"
            // placeholder="Type file title to search here..."
            placeholder="Type a file title to search here..."
            onChange={(e) => {
              if (e.target.value && e.target.value.length > fileTitleMaxLength) {
                return;
              }

              setFileListSearch(e.target.value);
            }}
          />
        </FileListInputContainer>

        <FileListContainer>
          {fileListByTitle.map((file, index) => {

            console.log("file");
            console.log(file);

            const isLastFile = (index === (fileListByTitle.length - 1));
            // alert(isLastFile);

            return (
              <FileList
                key={file.id}

                $isLastFile={isLastFile}

                onClick={() => {
                  copyToClipboard(`![Alt text](${file.path_to_file})`);
                  setSnackbarOpen(true);
                }}
              >
                <FileListImage
                  src={file.path_to_file}
                  alt={file.title}
                />
                <FileListTitle
                >
                  {file.title !== null ? file.title : 'File to reuse'}
                  {/* {file.title !== null ? file.title : 'title'} */}
                </FileListTitle>
              </FileList>
            );
          })}
        </FileListContainer>

      </FileListSidebarContainer>

      <ToastContainer />
    </>
  );
};

export default FileListSidebar;
