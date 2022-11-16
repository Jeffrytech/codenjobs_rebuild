const formatPathTitle = (
  title: string,
  // company_name: string
) => {
  // return `${job_title.replaceAll(" ", "-")}-for-${company_name}`;
  return `${title.split(" ").join("-")}`;
  // return `${job_title.replaceAll(" ", "-")}`;
};

export {
  formatPathTitle,
}; 
    