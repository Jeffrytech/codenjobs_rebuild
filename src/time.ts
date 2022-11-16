const ONE_SECOND_IN_MILISECONDS = 1000;

const unixTimestampToJavaScriptDate = (unixTimestamp: number) => {
  return new Date(unixTimestamp * ONE_SECOND_IN_MILISECONDS);
};

export {
  unixTimestampToJavaScriptDate,
};