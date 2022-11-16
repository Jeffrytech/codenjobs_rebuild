const scrollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

const scrollTo = (x = 0) => {
  document.body.scrollTop = x; // For Safari
  document.documentElement.scrollTop = x; // For Chrome, Firefox, IE and Opera
};

export {
  scrollToTop,
  scrollTo
};