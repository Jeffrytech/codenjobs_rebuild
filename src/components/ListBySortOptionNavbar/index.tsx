import React from "react";
import { 
  ListBySortNavbarOption,
  ListBySortNavbarOptionContainer,
  ListBySortOptionNavbarContainer, 
  ListBySortOptionNavbarWrapper
} from "./ListBySortOptionNavbarCSS";

const ListBySortOptionNavbar = ({
  includeTopOption = false,
  setFieldValue = null,
  submitForm = null,
}) => {
  const queries = new URLSearchParams(window.location.search);
  const sortQuery = queries.get("sort");
  // alert(sortQuery);

  return (
    <ListBySortOptionNavbarContainer>
      <ListBySortOptionNavbarWrapper>
        <ListBySortNavbarOptionContainer>
          <ListBySortNavbarOption
            $selected={sortQuery === null}

            $first={true}

            onClick={async () => {
              if (setFieldValue && submitForm) {
                setFieldValue("sort", "");

                await submitForm();
              } else {

                queries.delete("sort");

                // await submitForm();
                // const redirect = `${window.location.pathname}?${queries.toString()}`;
                const redirect = `${window.location.pathname}`;
                // alert(redirect);

                // @ts-ignore
                window.location = redirect;
              }
            }}
          >
            All
          </ListBySortNavbarOption>
          {includeTopOption && <ListBySortNavbarOption
            // style={{
            //   opacity: 0.5,
            //   marginRight: "1rem",
            // }}
            $selected={sortQuery === "top"}

            onClick={async () => {
              if (setFieldValue && submitForm) {
                setFieldValue("sort", "top");
                await submitForm();
              } else {

                queries.set("sort", "top");

                // await submitForm();
                const redirect = `${window.location.pathname}?${queries.toString()}`;
                // alert(redirect);

                // @ts-ignore
                window.location = redirect;
              }
              
            }}
          >
            Top
          </ListBySortNavbarOption>}
          <ListBySortNavbarOption
            $selected={sortQuery === "new"}
            // style={{
            //   opacity: 0.5,
            //   marginRight: "1rem",
            // }}

            onClick={async () => {
              if (setFieldValue && submitForm) {
                // alert("new");

                setFieldValue("sort", "new");
                await submitForm();
              } else {
                queries.set("sort", "new");

                // await submitForm();
                const redirect = `${window.location.pathname}?${queries.toString()}`;
                // alert(redirect);

                // @ts-ignore
                window.location = redirect;
              }

            }}
          >
            New
          </ListBySortNavbarOption>
          <ListBySortNavbarOption
            $selected={sortQuery === "old"}

            onClick={async () => {
              if (setFieldValue && submitForm) {
                setFieldValue("sort", "old");
                await submitForm();
              } else {
                queries.set("sort", "old");
  
                // await submitForm();
                const redirect = `${window.location.pathname}?${queries.toString()}`;
                // alert(redirect);
  
                // @ts-ignore
                window.location = redirect;
              }
            }}
          >
            Old
          </ListBySortNavbarOption>
        </ListBySortNavbarOptionContainer>
      </ListBySortOptionNavbarWrapper>
    </ListBySortOptionNavbarContainer>
  );
};

export default ListBySortOptionNavbar;