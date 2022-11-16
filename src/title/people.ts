const formatPeopleListTitle = (
  numberOfCandidates: Number,
  // job: string,
  // location: string,
  // salary: string,

  // skill: string,
) => {
  if (numberOfCandidates === 0 ) {
    return "No results";
  } else {

    let suffix = "People";
    if (numberOfCandidates < 2) {
      suffix = "Person";
    }

    const peopleListTitle = `${numberOfCandidates} ${suffix}`;

    return peopleListTitle;
  }

};

export {
  formatPeopleListTitle
};