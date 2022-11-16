import { useFormik } from "formik";
import { scrollToTop } from "../../../browser/scroll";
// import { useRouter } from "next/router";
import { findProfileFileListSortOptionsLabelValue } from "../../../typeDefinitions/file";

const useProfileFileListForm = ({
  router,
  username,
  sort,
  page,
  reuse,
}) => {
  // const router = useRouter();

  const {
    setFieldValue,
    submitForm,
  } = useFormik({
    enableReinitialize: true,

    initialValues: {
      sort: findProfileFileListSortOptionsLabelValue(sort),
      page,
      reuse,
    },
    onSubmit: async (
      values,
    ) => {
      const {
        sort,
        page,
        reuse,

        // page,
      } = values;

      try {
        const queries = new URLSearchParams(window.location.search);

        if (queries.get("page")) {
          queries.delete("page");
        }

        if (sort) {
          queries.set("sort", sort.value);
        }
        
        if (reuse) {
          queries.set("reuse", reuse.toString());
        }

        // const redirect = `${window.location.pathname}?${queries.toString()}`;

        // @ts-ignore
        // window.location = redirect;

        // console.log(router);

        const query = Object.fromEntries(queries);
        router.push({
          pathname: window.location.pathname,
          query,
        });
        scrollToTop();

      } catch (error) {
        console.log("error");
        console.error(error);
      }
    }
  });

  return {
    setFieldValue,
    submitForm,
  };
};

export default useProfileFileListForm;