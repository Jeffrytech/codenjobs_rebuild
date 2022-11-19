import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { ProfileUserFileList } from "../../profile/ProfileList";
import {
  findFileForOwner,
  findFileListForOwner,
} from "../../../api/privateFile";

import { useAuth } from "../../../contexts/auth";
import useProfileFileListForm from "./useProfileFileListForm";
import ProfileFile from "./ProfileFile";
import { scrollToTop } from "../../../browser/scroll";
import UpdateFileForm from "../UpdateFileForm";
import {
  ProfileFileListPaginationButtonsContainer,
  ProfileFileListPaginationCurrentButton,
  ProfileFileListPaginationNextButton,
  ProfileFileListPaginationPrevButton,
} from "./ProfileFileListPagination";
import ProfileFileListSkeleton from "./ProfileFileListSkeleton";
import NoSearchList from "../../SearchList/NoSearchList";
import { FileNoSearchListHeader } from "./ProfileFileListCSS";
// import UpdateProfileFileForm from "./UpdateProfileFileForm";

const formatProfilFileListTitle = (
  numberOfFiles: Number,
  currentPage: Number,
  totalPage: Number
) => {
  // const prefix = "Code";

  let suffix = "Files";
  if (numberOfFiles < 2) {
    suffix = "File";
  }

  const fileListTitle = `${numberOfFiles} ${suffix}`;
  // const fileListState = `(${currentPage} / ${totalPage})`;

  return (
    <div>
      {/* {fileListTitle} <span>{fileListState}</span> */}
      {fileListTitle}
      {/* {fileListTitle} */}
    </div>
  );
};

const ProfileFileList = ({
  file_id,

  title,
  sort,
  reuse,
  page,
}) => {
  const {
    // @ts-ignore
    user,
  } = useAuth();

  const { username, image } = user;
  const router = useRouter();

  const [showUpdateFileForm, setShowUpdateFileForm] = useState(false);
  const [fileIdToUpdate, setFileIdToUpdate] = useState(null);

  const { setFieldValue, submitForm } = useProfileFileListForm({
    router,
    username,
    sort,
    page,
    reuse,
  });

  // const filesPerPage = 6;
  const filesPerPage = 12;

  const [fileList, setFileList] = useState(null);
  const [totalFileList, setTotalFileList] = useState(0);

  // TODO
  // Should work with the database, null and other, delete should work without page restart

  // const filesPerPage = 10;
  // const filesPerPage = 6;
  // const filesPerPage = 12;
  // const filesPerPage = 5;

  // It should use totalPage from the backend
  // const totalPage = fileList === null ? 1 : Math.ceil(fileList.length / filesPerPage);
  const totalPage = Math.ceil(totalFileList / filesPerPage);

  let currentPage;
  if (page === null || page === 1) {
    currentPage = 1;
  } else {
    currentPage = page;
  }

  if (page > totalPage) {
    if (totalPage !== 0) {
      const queries = new URLSearchParams(window.location.search);

      // The pagination happens at the backend here so router.push works
      queries.set("page", totalPage.toString());
      // @ts-ignore
      // window.location = `${window.location.pathname}?${queries.toString()}`;

      router.push(`/user/${username}/files?${queries.toString()}`);
      scrollToTop();
    }
  }

  useEffect(() => {
    if (file_id) {
      findFileForOwner(file_id)
        .then(({ data, error }) => {
          if (error) {
            console.log("findFileForOwner error");
            console.error(error);

            return;
          }

          if (data) {
            const { fileList, totalFileList } = data;

            setFileList(fileList);
            setTotalFileList(totalFileList);
          }
        })
        .catch((error) => {
          console.log("error");
          console.error(error);
        });
    } else {
      const skip = (currentPage - 1) * filesPerPage;
      const limit = filesPerPage;

      findFileListForOwner(title, sort, reuse, skip, limit)
        .then(({ data, error }) => {
          if (error) {
            console.log("findFileForOwner error");
            console.error(error);

            return;
          }

          if (data) {
            const { fileList, totalFileList } = data;

            setFileList(fileList);
            setTotalFileList(totalFileList);
          }
        })
        .catch((error) => {
          console.log("error");
          console.error(error);
        });
    }
  }, [
    file_id,

    title,
    sort,
    page,
    reuse,

    // fileList,
  ]);

  // alert(fileList);
  // alert(fileList.length);

  if (fileList === null) {
    return (
      <ProfileUserFileList>
        <ProfileFileListSkeleton />
        <ProfileFileListSkeleton />
        <ProfileFileListSkeleton />
        <ProfileFileListSkeleton />
        <ProfileFileListSkeleton />
        <ProfileFileListSkeleton />
        <ProfileFileListSkeleton />
        <ProfileFileListSkeleton />
        <ProfileFileListSkeleton />
        <ProfileFileListSkeleton />
        <ProfileFileListSkeleton />
        <ProfileFileListSkeleton />
      </ProfileUserFileList>
    );
  }

  if (fileList.length === 0) {
    // if (true) {
    return (
      <>
        <FileNoSearchListHeader>
          <NoSearchList
            href="/blog/post"
            message="Upload a file for blog posts"
          />
        </FileNoSearchListHeader>
        <ProfileUserFileList>
          <ProfileFileListSkeleton />
          <ProfileFileListSkeleton />
          <ProfileFileListSkeleton />
          <ProfileFileListSkeleton />
          <ProfileFileListSkeleton />
          <ProfileFileListSkeleton />
          <ProfileFileListSkeleton />
          <ProfileFileListSkeleton />
          <ProfileFileListSkeleton />
          <ProfileFileListSkeleton />
          <ProfileFileListSkeleton />
          <ProfileFileListSkeleton />
        </ProfileUserFileList>
      </>
    );
  }

  // alert(fileList.length);

  const desktopListPerRow = 3;
  const includeMoreList = fileList.length % desktopListPerRow;

  return (
    <>
      <ProfileUserFileList includeMoreList={includeMoreList}>
        {fileList.map(
          ({
            id,
            path_to_file,
            // cloudinary_file_public_id,
            title,
            description,
            reuse,

            created_at,
            updated_at,
          }) => {
            // TODO
            // This should be a separate component to have its own state
            // and update title, reuse, description, created_at, updated_at etc

            return (
              <ProfileFile
                id={id}
                key={id}
                path_to_file={path_to_file}
                // cloudinary_file_public_id,
                title={title}
                description={description}
                reuse={reuse}
                created_at={created_at}
                updated_at={updated_at}
                setFileList={setFileList}
                setTotalFileList={setTotalFileList}
                filesPerPage={filesPerPage}
                fileList={fileList}
                setFileIdToUpdate={setFileIdToUpdate}
                setShowUpdateFileForm={setShowUpdateFileForm}
              />
            );
          }
        )}
      </ProfileUserFileList>

      {fileList && totalPage > 1 && (
        <ProfileFileListPaginationButtonsContainer>
          {currentPage.toString() !== "1" && (
            <ProfileFileListPaginationPrevButton
              onClick={(e) => {
                e.preventDefault();

                const prevPage = +new Number(currentPage) - 1;

                const queries = new URLSearchParams(window.location.search);
                queries.set("page", prevPage.toString());
                // @ts-ignore
                // window.location = `${window.location.pathname}?${queries.toString()}`;

                router.push(`/user/${username}/files?${queries.toString()}`);
                scrollToTop();
              }}
            >
              {/* Prev */}
              {(parseInt(currentPage) - 1).toString()}
            </ProfileFileListPaginationPrevButton>
          )}
          <ProfileFileListPaginationCurrentButton>
            {currentPage}
          </ProfileFileListPaginationCurrentButton>
          {currentPage.toString() !== totalPage.toString() && (
            <ProfileFileListPaginationNextButton
              onClick={(e) => {
                e.preventDefault();

                let nextPage = +new Number(currentPage) + 1;

                const queries = new URLSearchParams(window.location.search);
                queries.set("page", nextPage.toString());
                // @ts-ignore
                // window.location = `${window.location.pathname}?${queries.toString()}`;
                router.push(`/user/${username}/files?${queries.toString()}`);
                scrollToTop();
              }}
            >
              {/* Next */}
              {(parseInt(currentPage) + 1).toString()}
            </ProfileFileListPaginationNextButton>
          )}
        </ProfileFileListPaginationButtonsContainer>
      )}

      <UpdateFileForm
        username={username}
        profile_image={image}
        fileIdToUpdate={fileIdToUpdate}
        setFileIdToUpdate={setFileIdToUpdate}
        showUpdateFileForm={showUpdateFileForm}
        setShowUpdateFileForm={setShowUpdateFileForm}
        setFileList={setFileList}
      />
    </>
  );
};

export default ProfileFileList;

// display: flex;
// /* margin-left: 1.5rem; */
// margin - bottom: 2rem;
// align - items: center;
// justify - content: center;
// width: 100 %;

// {
//   fileList && totalPage > 1 && <ListPaginationButtonsContainer
//     style={{
//       marginLeft: "1.5rem",
//     }}
//   >
//     {currentPage.toString() !== "1" && <ListPaginationPrevButton
//       onClick={(e) => {
//         e.preventDefault();

//         const prevPage = +(new Number(currentPage)) - 1;

//         const queries = new URLSearchParams(window.location.search);
//         queries.set("page", prevPage.toString());
//         // @ts-ignore
//         // window.location = `${window.location.pathname}?${queries.toString()}`;

//         router.push(`/user/${username}/files?${queries.toString()}`);
//         scrollToTop();
//       }}
//     >
//       {/* Prev */}
//       {(parseInt(currentPage) - 1).toString()}
//     </ListPaginationPrevButton>}
//     <ListPaginationCurrentButton>
//       {currentPage}
//     </ListPaginationCurrentButton>
//     {currentPage.toString() !== totalPage.toString() && <ListPaginationNextButton
//       onClick={(e) => {
//         e.preventDefault();

//         let nextPage = +(new Number(currentPage)) + 1;

//         const queries = new URLSearchParams(window.location.search);
//         queries.set("page", nextPage.toString());
//         // @ts-ignore
//         // window.location = `${window.location.pathname}?${queries.toString()}`;
//         router.push(`/user/${username}/files?${queries.toString()}`);
//         scrollToTop();
//       }}
//     >
//       {/* Next */}
//       {(parseInt(currentPage) + 1).toString()}
//     </ListPaginationNextButton>}
//   </ListPaginationButtonsContainer>
// }

// {
//   file_id === null && <ListHeader>
//     <CentralizeChildren>
//       {formatProfilFileListTitle(totalFileList, currentPage, totalPage)}
//       {/* {formatProfilFileListTitle(fileList.length, currentPage, totalPage)} */}
//     </CentralizeChildren>
//     <div style={{
//       marginLeft: "0.5rem",
//       marginRight: "1rem",
//     }}>
//       <Select
//         id="profile_followers_not_owner_sort_options"
//         name="profile_followers_not_owner_sort_options"

//         styles={{
//           control: (provided) => ({
//             ...provided,
//             border: "2px solid rgb(239, 239, 239)",
//             borderRadius: "0.5rem",

//             fontFamily: "roboto",

//             minWidth: "10rem",
//           }),
//           placeholder: (provided) => ({
//             ...provided,
//             marginLeft: "1.75rem",
//             opacity: "0.7"
//           }),
//           input: (provided) => ({
//             ...provided,
//             backgroundImage: "url('/static/logo.svg')",
//             backgroundRepaet: "no-repeat",
//             backgroundSize: "cover",

//             width: "1.25rem",
//             height: "1.25rem",

//             marginRight: "1rem",
//           }),
//           singleValue: (provided) => ({
//             ...provided,
//             marginLeft: "1.75rem",
//           }),
//         }}

//         onChange={(e) => {
//           if (e === null) {
//             setFieldValue("sort", undefined);
//           } else {
//             setFieldValue("sort", e);
//           }

//           submitForm();
//         }}
//         isClearable={false}
//         placeholder="Sort"
//         value={findProfileFileListSortOptionsLabelValue(sort)}
//         options={profileFileListOptions}
//       />
//     </div>
//   </ListHeader>
// }

{
  /* {
  fileList && totalPage > 1 && <ListPaginationButtonsContainer
    style={{
      marginLeft: "1.5rem",
    }}
  >
    {currentPage.toString() !== "1" && <ListPaginationPrevButton
      onClick={(e) => {
        e.preventDefault();

        const prevPage = +(new Number(currentPage)) - 1;

        const queries = new URLSearchParams(window.location.search);
        queries.set("page", prevPage.toString());
        // @ts-ignore
        // window.location = `${window.location.pathname}?${queries.toString()}`;

        router.push(`/user/${username}/files?${queries.toString()}`);
        scrollToTop();
      }}
    >
      Prev
    </ListPaginationPrevButton>}
    {currentPage.toString() !== totalPage.toString() && <ListPaginationNextButton
      onClick={(e) => {
        e.preventDefault();

        let nextPage = +(new Number(currentPage)) + 1;

        const queries = new URLSearchParams(window.location.search);
        queries.set("page", nextPage.toString());
        // @ts-ignore
        // window.location = `${window.location.pathname}?${queries.toString()}`;
        router.push(`/user/${username}/files?${queries.toString()}`);
        scrollToTop();
      }}
    >
      Next
    </ListPaginationNextButton>}
  </ListPaginationButtonsContainer>
} */
}
