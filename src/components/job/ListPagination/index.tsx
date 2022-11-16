import React from "react";
import { ListPaginationButtonsContainer } from "./ListPaginationCSS";

const ListPagination = ({
  // prevButtonClick,
  // nextButtonClick,
}) => {
  return (
    <ListPaginationButtonsContainer>
      {/* PagnationPrevButton */}
      <button
        style={{
          // color: "rgb(17, 160, 245)",
          // background: "rgb(37, 191, 161)",
          background: "rgb(17, 160, 245)",
          color: "white",
          padding: "0.5rem 2rem",
          border: "2px solid #efefef",
          borderRadius: "0.5rem",

          transition: "all 0.2s",
          cursor: "pointer",
          // ":hover": {
          //   opacity: 0.7,
          // },
          // ":focus": {
          //   outline: "none",
          // },
          marginRight: "0.25rem",
        }}
        onClick={(e) => {
          e.preventDefault();

          // router.push();
          // const prevPage = page - 1;

          // router.push(`/message/messages?page=${prevPage}`);
        }}
      >
        Prev
      </button>
      {/* </button>} */}

      {/* <span style={{
              marginLeft: "0.25rem",
              marginRight: "0.25rem",
              opacity: "0.25",
            }}>
              { "|" }
            </span> */}

      {/* Pagination Next Button */}
      {/* {page !== totalPage && <button */}
      <button
        style={{
          // color: "rgb(17, 160, 245)",
          // background: "rgb(37, 191, 161)",
          background: "rgb(17, 160, 245)",
          color: "white",
          padding: "0.5rem 2rem",
          border: "2px solid #efefef",
          borderRadius: "0.5rem",

          transition: "all 0.2s",
          cursor: "pointer",
          // ":hover": {
          //   opacity: 0.7,
          // },
          // ":focus": {
          //   outline: "none",
          // },
        }}
        onClick={(e) => {
          e.preventDefault();

          // const nextPage = page + 1;

          // router.push(`/message/messages?page=${nextPage}`);
        }}
      >
        Next
      </button>
      {/* </button>} */}
    </ListPaginationButtonsContainer>
  );
};

export default ListPagination;