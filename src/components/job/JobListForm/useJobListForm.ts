// import { useState } from "react";
// import { useRouter } from "next/router";

import * as Yup from "yup";
import { useFormik } from "formik";

import { useRouter } from "next/router";
import { findJobCategoryLabelValue, findJobListSortOptionsLabelValue, findJobTypeLabelValue } from "../../../typeDefinitions/job";
import { returnYesOrNo } from "../../../typeDefinitions/select";
import { scrollToTop } from "../../../browser/scroll";
// import { Title } from "@material-ui/icons";

// const blogPostValidationSchema = Yup.object({
//   // cover: Yup.mixed(),
//   // // Job
//   // title: blogTitleValidator,
//   body: blogPostBodyValidator,
//   // bodyMarkdown: blogPostBodyValidator,
//   tags: tagsValidator,
// });

const useJobListForm = ({
  title,
  category,
  type,

  company_name,

  salary,
  pay_in_cryptocurrency,

  location,

  skill,
  page,

  sort,
}) => {
  // console.log(pay_in_cryptocurrency);
  // console.log(skill);

  const router = useRouter();

  // alert(category); // ""
  // alert(type); // ""

  // console.log(findJobCategoryLabelValue(category));

  const {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    setFieldValue,
    setValues,

    resetForm,

    isSubmitting,
    submitForm,
  } = useFormik({
    // initialValues: setInitialValues(data),

    // This solved the router rerender problem with router. 
    enableReinitialize: true,

    initialValues: {
      // cover: undefined,

      // These are from the path.
      title,
      category: findJobCategoryLabelValue(category),
      type: findJobTypeLabelValue(type),

      company_name,

      salary,
      pay_in_cryptocurrency: returnYesOrNo(pay_in_cryptocurrency),

      location,

      skill,
      page,

      // sort: findJobListSortOptionsLabelValue(sort),
      sort,
      
      // {
      //   label: "Programming",
      //   value: "Programming",
      // },

      // body: "", // html
      // bodyMarkdown: "",

      // category: "Programming",
      // tags: [],
    },
    // validationSchema: blogPostValidationSchema,
    onSubmit: async (
      values,
      // actions
    ) => {
      // console.log("values");
      // console.log(values);

      // These are from the form.
      const {
        title,
        category,
        type,

        // Include these?
        company_name,

        salary,
        pay_in_cryptocurrency,

        location,

        skill,

        sort,
      } = values;

      // alert(salary);
      // alert(location);

      try {
        // "" when absent

        const queries = new URLSearchParams(window.location.search);
        // queries.set("page", prevPage.toString());

        if (title !== "") {
          queries.set("title", title);
        } else {
          queries.delete("title");
        }

        if (category !== undefined) {
          queries.set("category", category.value);
        } else {
          queries.delete("category");
        }

        if (type !== undefined) {
          queries.set("type", type.value);
        } else {
          queries.delete("type");
        }

        if (company_name !== "") {
          queries.set("company_name", company_name);
        } else {
          queries.delete("company_name");
        }

        if (salary !== "") {
          queries.set("salary", salary);
        } else {
          queries.delete("salary");
        }

        if (pay_in_cryptocurrency !== undefined) {
          // console.log(pay_in_cryptocurrency);
          queries.set("pay_in_cryptocurrency", pay_in_cryptocurrency.value.toString());
        } else {
          queries.delete("pay_in_cryptocurrency");
        }

        if (location !== "") {
          queries.set("location", location);
        } else {
          queries.delete("location");
        }

        if (skill !== "") {
          queries.set("skill", skill);
        } else {
          queries.delete("skill");
        }

        // alert("sort");
        // alert(sort);

        // if (sort !== undefined && sort !== null) {
        if (sort !== "") {
          queries.set("sort", sort);
        } else {
          queries.delete("sort");
        }

        // if (page !== "") {
        //   // alert(page);
        //   queries.delete("page");
        //   // queries.set("page", page);
        // }

        if (queries.get("page") !== null) {
          // alert(page);
          queries.delete("page");
          // queries.set("page", page);
        }

        const query = Object.fromEntries(queries);
        router.push({
          pathname: window.location.pathname,
          query,
        });
        scrollToTop();

        // const redirect = `${window.location.pathname}?${queries.toString()}`;
        // alert(redirect);

        // @ts-ignore
        // window.location = redirect;


        // These don't work for the current approach with page?
        // Should use the SQL at server for this
        // const query = {};
        // if (title !== "") {
        //   query["title"] = title;
        // }

        // if (category !== undefined) {
        //   query["category"] = category.value;
        // }
        // if (type !== undefined) {
        //   query["type"] = type.value;
        // }

        // if (company_name !== "") {
        //   query["company_name"] = company_name;
        // }

        // if (salary !== "") {
        //   query["salary"] = salary;
        // }
        // if (pay_in_cryptocurrency !== undefined) {
        //   // console.log(pay_in_cryptocurrency);
        //   query["pay_in_cryptocurrency"] = pay_in_cryptocurrency.value;
        // }

        // if (location !== "") {
        //   query["location"] = location;
        // }
        // if (skill !== "") {
        //   query["skill"] = skill;
        // }
        // if (page !== "") {
        //   query["page"] = page;
        // }

        // router.push({
        //   pathname: router.pathname,
        //   query
        // });

        // window.location.reload();

        // router.reload();

        // router.

      } catch (error) {
        // alert(error);
        console.log("catch error");
        console.error(error);
      }
    }
  });

  return {
    handleSubmit,

    handleChange,
    handleBlur,

    values,
    errors,
    touched,

    setFieldValue,
    setValues,
    // setFieldTouched,
    resetForm,

    isSubmitting,
    submitForm,

  };
};

export default useJobListForm;