const formatJobListTitle = (
  numberOfJobs: Number,
  isIndex = false,
) => {
  // alert(numberOfJobs);

  if (numberOfJobs === 0) {
    return "No results";
  } else {
    let suffix = "Jobs";
    if (numberOfJobs < 2) {
      suffix = "Job";
    }

    const jobListTitle = isIndex ? `Top ${numberOfJobs} ${suffix}` : `${numberOfJobs} ${suffix}`;
    return jobListTitle;
  }

};

export{
  formatJobListTitle
};